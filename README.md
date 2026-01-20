# Shayan Personal AI Assistant API

A RESTful API for Shayan Umair's Personal AI Assistant - A professional AI chatbot API representing Shayan's expertise in AI/ML.

## 🚀 Tech Stack

- **Node.js** with Express
- **OpenAI API** for AI responses
- **Swagger/OpenAPI** for API documentation
- **Vercel** for serverless deployment

## 📁 Project Structure

```
.
├── server.js          # Main Express API server with Swagger docs
├── package.json       # Dependencies and scripts
├── .env               # Environment variables (OPENAI_API_KEY, PORT)
├── API_DOCUMENTATION.md  # Detailed API documentation
├── SWAGGER_GUIDE.md   # Swagger UI testing guide
├── api/               # Vercel serverless functions (optional)
│   ├── chat.js
│   └── package.json
└── vercel.json        # Vercel deployment configuration
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ installed
- OpenAI API key

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Shayan-Personal-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   
   Create `.env` in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   The API will be available at `http://localhost:5000`
   Swagger documentation at `http://localhost:5000/api-docs`

## 📡 API Endpoints

### Base URL
- **Development**: `http://localhost:5000`
- **Production**: `https://your-vercel-domain.vercel.app`

### 1. Health Check
**GET** `/health`

### 2. Chat with AI Assistant
**POST** `/chat`

#### Request Payload
```json
{
  "message": "Tell me about your experience with machine learning"
}
```

#### Success Response (200)
```json
{
  "reply": "I have **1+ years** of hands-on experience in Machine Learning...\n\n## Key Areas:\n- Supervised Learning\n- Deep Learning"
}
```

#### Error Responses
- **400**: `{ "error": "Message is required" }`
- **500**: `{ "reply": "Assistant is currently unavailable." }`

## 📚 API Documentation

### Interactive Swagger UI for Testing
**Access the interactive API testing interface at:**
- **Local**: `http://localhost:5000/api-docs` (or just `http://localhost:5000/`)
- **Production**: `https://your-domain.vercel.app/api-docs`

**Features:**
- ✅ Test endpoints directly in the browser
- ✅ See request/response examples
- ✅ Interactive "Try it out" functionality
- ✅ Schema validation and documentation
- ✅ Copy cURL commands

**Quick Start:**
1. Start the server: `cd backend && npm start`
2. Open `http://localhost:5000/api-docs` in your browser
3. Click "Try it out" on any endpoint
4. Enter your test data and click "Execute"

📖 **See `backend/SWAGGER_GUIDE.md` for detailed Swagger UI testing instructions**

### Detailed Documentation
See `backend/API_DOCUMENTATION.md` for complete API documentation including:
- Endpoint details
- Request/response schemas
- Example code in multiple languages
- Error handling

## 🔌 API Usage Examples

### JavaScript (Fetch)
```javascript
const response = await fetch('http://localhost:5000/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'Tell me about your Python experience'
  })
});
const data = await response.json();
console.log(data.reply);
```

### Python (Requests)
```python
import requests

response = requests.post(
    'http://localhost:5000/chat',
    json={'message': 'What ML projects have you worked on?'}
)
print(response.json()['reply'])
```

### cURL
```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Describe your expertise"}'
```

## 🚀 Deployment on Vercel

### Prerequisites
- Vercel account
- OpenAI API key

### Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Set Environment Variables**
   
   In Vercel dashboard, add:
   - `OPENAI_API_KEY`: Your OpenAI API key

4. **Access Your API**
   - API: `https://your-project.vercel.app/chat`
   - Swagger Docs: `https://your-project.vercel.app/api-docs`

## 📝 Features

- 🤖 AI-powered responses using OpenAI GPT-4o-mini
- 📖 Complete Swagger/OpenAPI documentation
- 🔒 CORS enabled for cross-origin requests
- 📝 Markdown-formatted responses
- ⚡ Fast and efficient API
- ☁️ Serverless deployment ready

## 🔧 Configuration

### System Prompt
The AI assistant is configured with a custom system prompt in:
- `server.js` (main server file)

You can modify the `SYSTEM_PROMPT` constant to change the assistant's behavior and knowledge base.

## 📄 License

This project is private and personal.

## 👤 Author

**Shayan Umair**
- Computer Science student at Lead University
- AI & ML Specialist
