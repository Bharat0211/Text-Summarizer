**server/.env**
```
OPENAI_API_KEY=your-api-key-here
```

**README.md**
```
# Text Summarizer

This is a simple **Text Summarization Tool** built with React (frontend) and Express.js (backend), using OpenAI's API for text summarization.

## Features
- Enter any text to get a concise summary
- Uses OpenAI's GPT model for summarization
- Simple and intuitive UI

## Setup and Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Bharat0211/Text-Summarizer.git
cd Text-Summarizer
```

### 2️⃣ Install Dependencies
#### Backend (Server)
```sh
cd server
npm install
```
#### Frontend (Client)
```sh
cd ../client/text-summarizer-client
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file inside the `server` directory and add your OpenAI API key:
```
OPENAI_API_KEY=your-api-key-here
```

### 4️⃣ Run the Application
#### Start the Backend
```sh
cd server
npm start
```
#### Start the Frontend
```sh
cd ../client/text-summarizer-client
npm start
```

### 5️⃣ Access the Application
- Open **http://localhost:3000/** in your browser to use the app.
- The backend runs on **http://localhost:3001/**

## Notes
- Ensure you have **Node.js** and **npm** installed before running the app.
- If you face CORS issues, check that the backend server is running and properly configured.

---
**Enjoy Summarizing! 🚀**
