# API Documentation

## Base URL
- **Development**: `http://localhost:5000`
- **Production**: `https://your-vercel-domain.vercel.app`

## Swagger UI
Access interactive API documentation at: `http://localhost:5000/api-docs`

---

## Endpoints

### 1. Health Check

**GET** `/health`

Check if the API server is running.

#### Response
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

---

### 2. Chat with AI Assistant

**POST** `/chat`

Send a message to Shayan's personal AI assistant and receive a formatted response.

#### Request Payload

```json
{
  "message": "Tell me about your experience with machine learning"
}
```

#### Payload Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | string | Yes | The user's message or question |

#### Example Request

```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is your experience with TensorFlow?"
  }'
```

#### Success Response (200)

```json
{
  "reply": "I have **1+ years** of hands-on experience with TensorFlow...\n\n## Key Areas:\n- Model development\n- Training and optimization\n- Deployment"
}
```

**Note**: The `reply` field contains Markdown-formatted text for better readability.

#### Error Responses

**400 Bad Request** - Missing message:
```json
{
  "error": "Message is required"
}
```

**500 Internal Server Error**:
```json
{
  "reply": "Assistant is currently unavailable."
}
```

---

## Response Format

All AI responses are formatted using **Markdown** for better readability:

- **Bold text** for emphasis
- `Inline code` for technical terms
- Code blocks for examples
- Bullet points and numbered lists
- Headers for section organization

---

## Example Usage

### JavaScript (Fetch)

```javascript
const response = await fetch('http://localhost:5000/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
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

url = "http://localhost:5000/chat"
payload = {
    "message": "What machine learning projects have you worked on?"
}

response = requests.post(url, json=payload)
data = response.json()
print(data['reply'])
```

### cURL

```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Describe your expertise"}'
```

---

## Environment Variables

Required environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key
- `PORT`: Server port (default: 5000)

---

## CORS

The API has CORS enabled and accepts requests from any origin.
