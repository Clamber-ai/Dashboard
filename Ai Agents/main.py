import os
import json
from dotenv import load_dotenv
import spacy
import pandas as pd
from linkedin import linkedin
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import PyPDF2
import re
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# Load environment variables
load_dotenv()

class LinkedInJobMatcher:
    def __init__(self):
        # Initialize LinkedIn API client
        self.client = linkedin.LinkedInApplication(
            token=os.getenv('LINKEDIN_ACCESS_TOKEN')
        )
        # Load spaCy model for NLP
        self.nlp = spacy.load('en_core_web_sm')
        # Initialize Selenium WebDriver
        self.driver = None
        
    def setup_selenium(self):
        """Setup Selenium WebDriver for automated applications"""
        options = webdriver.ChromeOptions()
        options.add_argument('--start-maximized')
        self.driver = webdriver.Chrome(options=options)
        
    def login_to_linkedin(self):
        """Login to LinkedIn using credentials"""
        self.driver.get('https://www.linkedin.com/login')
        email = os.getenv('LINKEDIN_EMAIL')
        password = os.getenv('LINKEDIN_PASSWORD')
        
        # Wait for login form
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.ID, "username"))
        )
        
        # Enter credentials
        self.driver.find_element(By.ID, "username").send_keys(email)
        self.driver.find_element(By.ID, "password").send_keys(password)
        self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
        
        # Wait for login to complete
        time.sleep(5)
        
    def apply_to_job(self, job_url, resume_path):
        """Apply to a job posting"""
        try:
            self.driver.get(job_url)
            time.sleep(3)
            
            # Click Easy Apply button if available
            easy_apply_button = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "button.jobs-apply-button"))
            )
            easy_apply_button.click()
            time.sleep(2)
            
            # Upload resume
            resume_input = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='file']"))
            )
            resume_input.send_keys(os.path.abspath(resume_path))
            time.sleep(2)
            
            # Fill out required fields
            self.fill_application_form()
            
            # Submit application
            submit_button = WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "button[aria-label='Submit application']"))
            )
            submit_button.click()
            time.sleep(2)
            
            return True
        except Exception as e:
            print(f"Error applying to job: {e}")
            return False
            
    def fill_application_form(self):
        """Fill out the job application form"""
        try:
            # Handle different types of form fields
            fields = self.driver.find_elements(By.CSS_SELECTOR, "input[type='text'], input[type='tel'], input[type='email']")
            for field in fields:
                if field.is_displayed() and field.is_enabled():
                    field_name = field.get_attribute('name') or field.get_attribute('id')
                    if 'phone' in field_name.lower():
                        field.send_keys(os.getenv('PHONE_NUMBER'))
                    elif 'email' in field_name.lower():
                        field.send_keys(os.getenv('LINKEDIN_EMAIL'))
                    elif 'name' in field_name.lower():
                        field.send_keys(os.getenv('FULL_NAME'))
                        
            # Handle dropdowns
            dropdowns = self.driver.find_elements(By.CSS_SELECTOR, "select")
            for dropdown in dropdowns:
                if dropdown.is_displayed() and dropdown.is_enabled():
                    # Select first available option
                    options = dropdown.find_elements(By.TAG_NAME, "option")
                    if len(options) > 1:
                        options[1].click()
                        
        except Exception as e:
            print(f"Error filling form: {e}")
            
    def extract_text_from_pdf(self, pdf_path):
        """Extract text from PDF resume"""
        text = ""
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            for page in reader.pages:
                text += page.extract_text()
        return text

    def extract_skills(self, text):
        """Extract skills from resume text using NLP"""
        doc = self.nlp(text)
        skills = []
        for ent in doc.ents:
            if ent.label_ in ['ORG', 'PRODUCT', 'TECH']:
                skills.append(ent.text)
        return list(set(skills))

    def search_jobs(self, skills, location=None, experience_level=None):
        """Search for jobs on LinkedIn"""
        search_params = {
            'keywords': ' '.join(skills),
            'location': location or 'United States',
            'experience_level': experience_level or ['entry_level', 'mid_senior_level']
        }
        
        try:
            jobs = self.client.search_job(**search_params)
            return jobs
        except Exception as e:
            print(f"Error searching jobs: {e}")
            return []

    def calculate_relevance(self, job_description, resume_skills):
        """Calculate relevance score between job and resume"""
        vectorizer = TfidfVectorizer()
        try:
            texts = [job_description, ' '.join(resume_skills)]
            tfidf_matrix = vectorizer.fit_transform(texts)
            similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
            return similarity
        except:
            return 0

    def match_and_apply_jobs(self, resume_path, location=None, experience_level=None, max_applications=5):
        """Main function to match and apply to jobs"""
        # Setup Selenium
        self.setup_selenium()
        self.login_to_linkedin()
        
        # Extract and process resume
        resume_text = self.extract_text_from_pdf(resume_path)
        skills = self.extract_skills(resume_text)
        
        # Search for jobs
        jobs = self.search_jobs(skills, location, experience_level)
        
        # Calculate relevance and apply to jobs
        applied_jobs = []
        for job in jobs:
            relevance = self.calculate_relevance(job['description'], skills)
            if relevance > 0.5:  # Only apply to highly relevant jobs
                print(f"\nApplying to: {job['title']} at {job['company']}")
                success = self.apply_to_job(job['url'], resume_path)
                if success:
                    applied_jobs.append({
                        'title': job['title'],
                        'company': job['company'],
                        'location': job['location'],
                        'relevance_score': relevance,
                        'status': 'Applied'
                    })
                    if len(applied_jobs) >= max_applications:
                        break
                time.sleep(2)  # Wait between applications
        
        # Cleanup
        self.driver.quit()
        
        return applied_jobs

def main():
    # Create necessary directories
    os.makedirs('resumes', exist_ok=True)
    
    # Initialize job matcher
    matcher = LinkedInJobMatcher()
    
    # Get resume path from user
    resume_path = input("Enter the path to your resume (PDF): ")
    
    # Optional parameters
    location = input("Enter preferred location (press Enter for default): ") or None
    experience_level = input("Enter experience level (entry/mid/senior, press Enter for default): ") or None
    max_applications = int(input("Enter maximum number of applications (default 5): ") or 5)
    
    # Match and apply to jobs
    applied_jobs = matcher.match_and_apply_jobs(resume_path, location, experience_level, max_applications)
    
    # Display results
    print("\nApplied Jobs Summary:")
    for i, job in enumerate(applied_jobs, 1):
        print(f"\n{i}. {job['title']} at {job['company']}")
        print(f"   Location: {job['location']}")
        print(f"   Relevance Score: {job['relevance_score']:.2f}")
        print(f"   Status: {job['status']}")

if __name__ == "__main__":
    main() 