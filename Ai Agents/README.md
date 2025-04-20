# LinkedIn Job Matcher

An AI-powered agent that finds relevant job postings on LinkedIn based on your resume.

## Features
- Analyzes your resume content
- Matches skills and experience with LinkedIn job postings
- Ranks job postings by relevance
- Provides detailed job information and application links

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file in the project root with your LinkedIn API credentials:
```
LINKEDIN_CLIENT_ID=your_client_id
LINKEDIN_CLIENT_SECRET=your_client_secret
LINKEDIN_ACCESS_TOKEN=your_access_token
```

3. Place your resume in PDF format in the `resumes` directory

4. Run the application:
```bash
python main.py
```

## Requirements
- Python 3.8+
- LinkedIn API credentials
- Resume in PDF format 