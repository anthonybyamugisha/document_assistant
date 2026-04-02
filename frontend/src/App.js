import { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log('Uploading file:', file.name);
      const response = await fetch('http://localhost:8000/api/process/', {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Processing failed');
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Document Assistant</h1>
        <p className="subtitle">Upload a PDF or Word document to get AI-powered insights</p>

        <div className="upload-section">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            id="file-input"
          />
          <label htmlFor="file-input" className="file-label">
            {file ? file.name : 'Choose file'}
          </label>
          <button onClick={handleUpload} disabled={loading || !file}>
            {loading ? 'Processing...' : 'Analyze Document'}
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        {result && (
          <div className="results">
            <div className="result-section">
              <h2>Summary</h2>
              <p>{result.summary}</p>
            </div>

            <div className="result-section">
              <h2>Key Sections</h2>
              <div className="key-info">
                <div className="info-item">
                  <strong>Title:</strong> {result.key_sections.title || 'Not detected'}
                </div>
                <div className="info-item">
                  <strong>Author:</strong> {result.key_sections.author || 'Not detected'}
                </div>
              </div>
            </div>

            <div className="result-section">
              <h2>Extracted Text (Preview)</h2>
              <pre>{result.extracted_text}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;