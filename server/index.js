const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { ChatOpenAI } = require('@langchain/openai');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize ChatOpenAI with API key
let chatModel;
try {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY is not defined in the environment variables.');
    }
    chatModel = new ChatOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
} catch (error) {
    console.error('Error initializing ChatOpenAI:', error.message);
    process.exit(1); // Exit the server if the API key is not set
}

// Endpoint to handle summarization requests
app.post('/summarize', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        console.error('Text is missing in the request payload.');
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        console.log('Received text for summarization:', text);

        const response = await chatModel.invoke(`Summarize the following text:\n\n${text}`);
        
        if (!response || !response.content) {
            console.error('Invalid response from ChatOpenAI:', response);
            throw new Error('Received invalid response from ChatOpenAI.');
        }

        console.log('Summary generated successfully:', response.content);
        res.json({ summary: response.content });
    } catch (error) {
        console.error('Error during summarization:', error.stack || error.message);
        res.status(500).json({ error: 'Error summarizing text' });
    }
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
