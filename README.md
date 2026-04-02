# AI-Powered Document Assistant

A web application that allows users to upload documents (PDF or Word files), extracts text, uses AI to summarize the content, and identifies key sections like title, author, and main content.

## Project Structure

```
Document_assistant/
├── backend/                 # Django REST API backend
│   ├── backend/           # Django project settings
│   ├── documents/        # Document processing app
│   ├── manage.py        # Django management script
│   ├── requirements.txt # Python dependencies
│   └── db.sqlite3       # SQLite database
├── frontend/              # React frontend
│   ├── src/             # React source files
│   ├── public/          # Static assets
│   └── package.json     # Node dependencies
└── venv/                # Python virtual environment
```

## Features

- **Document Upload**: Supports PDF (.pdf) and Word (.doc, .docx) files
- **Text Extraction**: Extracts text content from uploaded documents using PyPDF2 and python-docx
- **AI Summarization**: Uses OpenAI GPT-3.5 to generate document summaries
- **Key Section Detection**: Automatically identifies title, author, and main content
- **Web Interface**: Clean, modern React frontend

## Technology Stack

### Backend
- **Django 6.0** - Python web framework
- **Django REST Framework** - REST API
- **PyPDF2** - PDF text extraction
- **python-docx** - Word document text extraction
- **OpenAI** - GPT-3.5 for AI summarization

### Frontend
- **React 19** - JavaScript UI library
- **Create React App** - React project bootstrap

## Prerequisites

- Python 3.8+
- Node.js 14+
- OpenAI API key

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment (optional):
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   # source venv/bin/activate  # Linux/Mac
   ```

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

   Or install individually:
   ```bash
   pip install djangorestframework django-cors-headers PyPDF2 python-docx openai python-dotenv
   ```

4. Run migrations (if needed):
   ```bash
   python manage.py migrate
   ```

5. Start the Django server:
   ```bash
   python manage.py runserver
   ```

   The API will be available at `http://localhost:8000/`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000/`

## Usage

1. Start the Django backend server (port 8000)
2. Start the React frontend (port 3000)
3. Open `http://localhost:3000/` in your browser
4. Click "Choose file" to select a PDF or Word document
5. Click "Analyze Document" to process the file
6. View the results: summary, key sections, and extracted text

## API Endpoints

### Process Document
- **URL**: `http://localhost:8000/api/process/`
- **Method**: POST
- **Content-Type**: multipart/form-data
- **Parameters**:
  - `file` (required): PDF or Word file
- **Response**:
  ```json
  {
    "extracted_text": "Extracted text preview...",
    "key_sections": {
      "title": "Document Title",
      "author": "Author Name",
      "main_content": "Main content..."
    },
    "summary": "AI-generated summary..."
  }
  ```

## Configuration

### OpenAI API Key

The OpenAI API key is configured in `backend/backend/settings.py`:

```python
OPENAI_API_KEY = 'your-api-key-here'
```

To change the key, edit this file directly or set an environment variable:

```bash
set OPENAI_API_KEY=your-api-key-here  # Windows
export OPENAI_API_KEY=your-api-key-here  # Linux/Mac
```

### Django Settings

Key settings in `backend/backend/settings.py`:

- `DEBUG = True` - Enable debug mode
- `ALLOWED_HOSTS = []` - Allowed hosts for production
- `CORS_ALLOW_ALL_ORIGINS = True` - CORS settings

### Frontend API URL

To change the backend API URL, edit `frontend/src/App.js`:

```javascript
const response = await fetch('http://localhost:8000/api/process/', {
```

## Development

### Running Both Servers

1. **Terminal 1** - Django backend:
   ```bash
   cd backend
   python manage.py runserver
   ```

2. **Terminal 2** - React frontend:
   ```bash
   cd frontend
   npm start
   ```

### Creating Django App

To add a new Django app:
```bash
cd backend
python manage.py startapp appname
```

### Building for Production

**Frontend**:
```bash
cd frontend
npm run build
```

The build output will be in `frontend/build/`

**Backend**:
For production, use a WSGI server like gunicorn:
```bash
pip install gunicorn
gunicorn backend.wsgi --bind 0.0.0.0:8000
```

## Troubleshooting

### CORS Errors
If you encounter CORS errors, ensure `django-cors-headers` is installed and configured:
```python
CORS_ALLOW_ALL_ORIGINS = True
```

### OpenAI API Errors
- Verify the API key is correct in settings.py
- Check your OpenAI account has credits
- Ensure you have an active internet connection

### File Upload Errors
- Check file format is PDF or Word (.doc/.docx)
- Ensure file size is under the server limits
- Verify the backend has write permissions for temp files

### Port Already in Use
If port 3000 or 8000 is in use, specify a different port:
```bash
# Django
python manage.py runserver 8001

# React
npm start -- -p 3001
```

## License

This project is for demonstration purposes.

## Author

Created for Feyti Medical Group Software Development Internship assignment.