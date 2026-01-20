# Swagger UI Testing Guide

## 🚀 Accessing Swagger UI

### Local Development
1. Start the server:
   ```bash
   cd backend
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5000/api-docs
   ```

3. Or visit the root URL (automatically redirects to Swagger):
   ```
   http://localhost:5000/
   ```

### Production
After deploying to Vercel:
```
https://your-domain.vercel.app/api-docs
```

---

## 📖 Using Swagger UI for API Testing

### 1. **Health Check Endpoint**

1. Expand the **Health** section
2. Click on **GET /health**
3. Click the **"Try it out"** button
4. Click **"Execute"**
5. View the response below showing `{"status": "ok", "message": "Server is running"}`

### 2. **Chat Endpoint**

1. Expand the **Chat** section
2. Click on **POST /chat**
3. Click the **"Try it out"** button
4. In the **Request body** section, you'll see a JSON editor with:
   ```json
   {
     "message": "Tell me about your experience with machine learning"
   }
   ```
5. Modify the message field with your question:
   ```json
   {
     "message": "What are your technical skills?"
   }
   ```
6. Click **"Execute"**
7. View the response in the **Responses** section

---

## 🎯 Example Test Messages

Try these example messages in Swagger UI:

### About Experience
```json
{
  "message": "Tell me about your machine learning experience"
}
```

### About Projects
```json
{
  "message": "What AI projects have you worked on?"
}
```

### About Skills
```json
{
  "message": "What are your technical skills in Python?"
}
```

### About Expertise
```json
{
  "message": "Describe your expertise in deep learning"
}
```

### About Tools
```json
{
  "message": "What tools and frameworks do you use?"
}
```

---

## 🔍 Swagger UI Features

### Available Features:
- ✅ **Try it out** - Test endpoints directly in the browser
- ✅ **Request/Response Examples** - See example payloads and responses
- ✅ **Schema Validation** - Understand required fields and data types
- ✅ **Filter** - Search for specific endpoints
- ✅ **Authorization Persistence** - (If you add auth later)
- ✅ **Request Duration** - See how long requests take
- ✅ **Copy cURL** - Get cURL command for any request

### How to Use:
1. **Expand/Collapse** sections by clicking on them
2. **Try it out** button enables interactive testing
3. **Execute** button sends the request
4. **Responses** show status code, headers, and body
5. **Schema** tab shows the data structure
6. **Example** tab shows sample values

---

## 📋 Response Format

All AI responses are formatted in **Markdown**:

- **Bold text** for emphasis
- `Inline code` for technical terms
- Code blocks for examples
- Bullet points and numbered lists
- Headers for organization

Example response:
```json
{
  "reply": "I have **1+ years** of hands-on experience...\n\n## Key Areas:\n- Machine Learning\n- Deep Learning"
}
```

---

## 🛠️ Troubleshooting

### Swagger UI not loading?
- Make sure the server is running
- Check the console for errors
- Verify port 5000 is available

### API calls failing?
- Check that `OPENAI_API_KEY` is set in `.env`
- Verify the server logs for error messages
- Ensure the request body matches the schema

### Need the OpenAPI JSON spec?
Access it at:
```
http://localhost:5000/api-docs.json
```

---

## 📚 Additional Resources

- **API Documentation**: See `API_DOCUMENTATION.md` for detailed docs
- **README**: See main `README.md` for setup instructions
- **OpenAPI Spec**: Available at `/api-docs.json`
