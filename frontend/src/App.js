import { useState, useEffect } from 'react';
import './App.css';

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 1 5.25 21h13.5A2.25 2.25 0 0 1 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

const TextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 20, height: 20, color: '#22c55e' }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.21 0-9.42-4.209-9.42-9.42a9.72 9.72 0 0 1 2.636-6.227 9.72 9.72 0 0 1 10.136-.001c3.403 3.422 3.87 8.006 1.936 11.752Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 1 5.25 21h13.5A2.25 2.25 0 0 1 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const HistoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

const CompareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [summaryStyle, setSummaryStyle] = useState('concise');
  const [compareMode, setCompareMode] = useState(false);
  const [compareDocs, setCompareDocs] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('documentHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(selectedFile.type)) {
        setError('Please upload a PDF or Word document');
        return;
      }
      setFile(selectedFile);
      setError('');
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('style', summaryStyle);

    try {
      const response = await fetch('http://localhost:8000/api/process/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Processing failed');
      }

      setResult(data);
      
      const newHistory = [
        { fileName: file.name, date: new Date().toLocaleString(), summary: data.summary },
        ...history.slice(0, 9)
      ];
      setHistory(newHistory);
      localStorage.setItem('documentHistory', JSON.stringify(newHistory));

      if (compareMode) {
        setCompareDocs(prev => [...prev, { fileName: file.name, ...data }]);
      }
    } catch (err) {
      setError(err.message || 'Failed to process document. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const exportResults = (format) => {
    if (!result) return;
    
    let content = '';
    let mimeType = '';
    let extension = '';

    if (format === 'txt') {
      content = `Document Analysis Results\n\nTitle: ${result.key_sections.title || 'N/A'}\nAuthor: ${result.key_sections.author || 'N/A'}\n\nSummary:\n${result.summary}\n\nExtracted Text:\n${result.extracted_text}`;
      mimeType = 'text/plain';
      extension = 'txt';
    } else if (format === 'json') {
      content = JSON.stringify(result, null, 2);
      mimeType = 'application/json';
      extension = 'json';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analysis-results.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('documentHistory');
  };

  const loadFromHistory = (item) => {
    setResult({
      key_sections: { title: '', author: '' },
      summary: item.summary,
      extracted_text: ''
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Document Assistant</h1>
          <p className="subtitle">Upload a PDF or Word document to get AI-powered insights</p>
        </div>

        <div className="toolbar">
          <button 
            className={`icon-btn ${compareMode ? 'active' : ''}`}
            onClick={() => {
              setCompareMode(!compareMode);
              if (!compareMode) setCompareDocs([]);
            }}
            title="Compare Mode"
          >
            <CompareIcon />
          </button>
          <button 
            className="icon-btn" 
            onClick={() => setShowHistory(!showHistory)}
            title="History"
          >
            <HistoryIcon />
          </button>
          <button 
            className="icon-btn" 
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {showHistory && (
          <div className="history-panel">
            <div className="history-header">
              <h3>History</h3>
              {history.length > 0 && (
                <button className="clear-btn" onClick={clearHistory}>
                  <TrashIcon /> Clear
                </button>
              )}
            </div>
            {history.length === 0 ? (
              <p className="no-history">No documents analyzed yet</p>
            ) : (
              <div className="history-list">
                {history.map((item, index) => (
                  <div 
                    key={index} 
                    className="history-item"
                    onClick={() => loadFromHistory(item)}
                  >
                    <span className="history-filename">{item.fileName}</span>
                    <span className="history-date">{item.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="upload-section">
          <div className="options-row">
            <select 
              value={summaryStyle} 
              onChange={(e) => setSummaryStyle(e.target.value)}
              className="style-select"
            >
              <option value="concise">Concise Summary</option>
              <option value="detailed">Detailed Summary</option>
              <option value="bullets">Bullet Points</option>
            </select>
          </div>
          
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            id="file-input"
          />
          <label htmlFor="file-input" className="file-label">
            <UploadIcon />
            {file ? file.name : 'Choose file'}
          </label>
          
          {file && (
            <div className="selected-file">
              <CheckIcon />
              <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
            </div>
          )}
          
          <button onClick={handleUpload} disabled={loading || !file}>
            {loading ? 'Processing...' : 'Analyze Document'}
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p className="loading-text">Analyzing your document with AI...</p>
          </div>
        )}

        {result && (
          <div className="results">
            <div className="results-header">
              <DocumentIcon />
              <h2>Analysis Results</h2>
              <div className="export-buttons">
                <button className="export-btn" onClick={() => exportResults('txt')}>
                  <DownloadIcon /> TXT
                </button>
                <button className="export-btn" onClick={() => exportResults('json')}>
                  <DownloadIcon /> JSON
                </button>
              </div>
            </div>

            <div className="result-section">
              <h3>
                <SparklesIcon />
                AI Summary ({summaryStyle})
              </h3>
              <p>{result.summary}</p>
            </div>

            <div className="result-section">
              <h3>
                <DocumentIcon />
                Key Sections
              </h3>
              <div className="key-info">
                <div className="info-item">
                  <span>Title</span>
                  <span>{result.key_sections.title || 'Not detected'}</span>
                </div>
                <div className="info-item">
                  <span>Author</span>
                  <span>{result.key_sections.author || 'Not detected'}</span>
                </div>
              </div>
            </div>

            <div className="result-section">
              <h3>
                <TextIcon />
                Extracted Text (Preview)
              </h3>
              <pre>{result.extracted_text}</pre>
            </div>
          </div>
        )}

        {compareMode && compareDocs.length > 0 && (
          <div className="compare-section">
            <h2>Document Comparison ({compareDocs.length} documents)</h2>
            <div className="compare-grid">
              {compareDocs.map((doc, index) => (
                <div key={index} className="compare-card">
                  <h4>{doc.fileName}</h4>
                  <p>{doc.summary.substring(0, 200)}...</p>
                </div>
              ))}
            </div>
            {compareDocs.length < 2 && (
              <p className="compare-hint">Upload one more document to compare</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;