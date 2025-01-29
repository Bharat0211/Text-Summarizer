import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');

    const handleSummarize = async () => {
        try {
            const response = await axios.post('http://localhost:3001/summarize', { text });
            setSummary(response.data.summary);
        } catch (error) {
            console.error('Error summarizing text:', error);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Text Summarizer</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to summarize"
                rows="10"
                cols="50"
                style={{ marginBottom: '20px', width: '100%' }}
            />
            <br />
            <button onClick={handleSummarize} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Summarize
            </button>
            <h2>Summary:</h2>
            <p>{summary}</p>
        </div>
    );
}

export default App;
