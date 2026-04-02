import os
import re
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from PyPDF2 import PdfReader
from docx import Document
from openai import OpenAI

client = OpenAI(api_key=settings.OPENAI_API_KEY)


def extract_text_from_pdf(file):
    reader = PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text


def extract_text_from_docx(file):
    doc = Document(file)
    text = ""
    for para in doc.paragraphs:
        text += para.text + "\n"
    return text


def extract_key_sections(text):
    lines = text.strip().split("\n")
    title = lines[0] if lines else ""
    
    author_match = re.search(r"(?:author|by)[:\s]+(.+)", text, re.IGNORECASE)
    author = author_match.group(1) if author_match else ""
    
    sentences = text.split(".")
    main_content = ".".join(sentences[:5]) if len(sentences) > 5 else text
    
    return {
        "title": title.strip(),
        "author": author.strip(),
        "main_content": main_content.strip()
    }


@api_view(["POST"])
def process_document(request):
    file = request.FILES.get("file")
    if not file:
        return Response({"error": "No file provided"}, status=400)
    
    ext = file.name.split(".")[-1].lower()
    
    if ext == "pdf":
        text = extract_text_from_pdf(file)
    elif ext in ["docx", "doc"]:
        text = extract_text_from_docx(file)
    else:
        return Response({"error": "Unsupported file format"}, status=400)
    
    if not text.strip():
        return Response({"error": "Could not extract text from document"}, status=400)
    
    key_sections = extract_key_sections(text)
    
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a document assistant. Summarize the following document concisely."},
                {"role": "user", "content": f"Summarize this document:\n\n{text[:4000]}"}
            ],
            max_tokens=500
        )
        summary = response.choices[0].message.content
    except Exception as e:
        summary = f"LLM processing unavailable: {str(e)}"
    
    return Response({
        "extracted_text": text[:2000],
        "key_sections": key_sections,
        "summary": summary
    })