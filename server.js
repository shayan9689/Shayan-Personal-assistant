import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Shayan Personal AI Assistant API',
      version: '1.0.0',
      description: 'API for Shayan Umair\'s Personal AI Assistant - A professional AI chatbot representing Shayan\'s expertise in AI/ML',
      contact: {
        name: 'Shayan Umair',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
      {
        url: 'https://your-vercel-domain.vercel.app',
        description: 'Production server',
      },
    ],
    tags: [
      {
        name: 'Health',
        description: 'Health check endpoints',
      },
      {
        name: 'Chat',
        description: 'Chat with the AI assistant',
      },
    ],
  },
  apis: ['./server.js'], // Path to the API files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI with custom options
const swaggerUiOptions = {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Shayan AI Assistant API Docs',
  customfavIcon: '/favicon.ico',
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    tryItOutEnabled: true,
  },
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

// Serve OpenAPI JSON spec
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Root endpoint redirects to Swagger UI
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Initialize OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// System prompt
const SYSTEM_PROMPT = `
You are a professional personal AI assistant representing Shayan Umair.

Profile:
Shayan Umair is a Computer Science student at Lead University with 1+ year of
hands-on experience in Artificial Intelligence and Machine Learning.

Professional Summary:
Shayan specializes in designing, developing, and deploying AI-driven solutions.
He has strong experience in supervised machine learning, deep learning, and
reinforcement learning, with a practical, business-oriented mindset.

Technical Expertise:
- Supervised & Unsupervised Machine Learning
- Deep Learning (CNNs, Neural Networks)
- Reinforcement Learning
- Python for Data Science & AI
- NumPy, Pandas, Matplotlib, Seaborn
- Scikit-learn
- TensorFlow & Keras
- PyTorch
- Data preprocessing, feature engineering, and model evaluation
- Custom AI & business chatbots
- Model training, testing, and deployment

Professional Experience:
- Built multiple AI/ML projects from scratch
- Developed custom AI chatbots for business use cases
- Hands-on freelancing experience in AI solutions
- Experience in real-world datasets and client-focused problem solving

Personality & Communication Rules:
- Be professional, confident, and clear
- Explain concepts in a structured manner
- Do NOT exaggerate skills
- Respond as Shayan's official AI representative

Response Formatting Requirements:
- ALWAYS format responses using Markdown for better readability
- Use bullet points (- or *) for lists
- Use numbered lists (1., 2., 3.) for step-by-step explanations
- Use **bold** for emphasis on key terms or important points
- Use code blocks with language tags for code examples (e.g., \`\`\`python)
- Use inline code (\`code\`) for technical terms, file names, or commands
- Use headers (##, ###) to organize longer responses into sections
- Keep paragraphs concise (2-3 sentences max)
- Use line breaks between sections for better readability
- Structure responses with clear sections when explaining complex topics
- Focus on being concise and to-the-point while maintaining professionalism
`;

// Routes

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the health status of the API server. Use this to verify the API is running and accessible.
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is running and healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Server is running
 *             examples:
 *               success:
 *                 summary: Server is healthy
 *                 value:
 *                   status: "ok"
 *                   message: "Server is running"
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Send a message to the AI assistant
 *     description: |
 *       Send a message and receive a response from Shayan's personal AI assistant.
 *       
 *       The AI assistant represents Shayan Umair, a Computer Science student with expertise in:
 *       - Machine Learning & Deep Learning
 *       - Python for Data Science
 *       - TensorFlow, PyTorch, Scikit-learn
 *       - AI/ML project development
 *       
 *       Responses are formatted in Markdown for better readability.
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *                 description: The user's message or question
 *                 minLength: 1
 *                 examples:
 *                   experience:
 *                     value: "Tell me about your experience with machine learning"
 *                   projects:
 *                     value: "What AI projects have you worked on?"
 *                   skills:
 *                     value: "What are your technical skills?"
 *                   python:
 *                     value: "Describe your Python experience"
 *     responses:
 *       200:
 *         description: Successful response from AI assistant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *                   description: The AI assistant's response (formatted in Markdown)
 *                   example: |
 *                     I have **1+ years** of hands-on experience in Machine Learning and AI.
 *                     
 *                     ## Key Areas of Expertise:
 *                     - Supervised & Unsupervised Machine Learning
 *                     - Deep Learning (CNNs, Neural Networks)
 *                     - Reinforcement Learning
 *                     
 *                     ## Technical Skills:
 *                     - Python for Data Science & AI
 *                     - TensorFlow & PyTorch
 *                     - Scikit-learn, Pandas, NumPy
 *             examples:
 *               success:
 *                 summary: Successful response
 *                 value:
 *                   reply: "I have **1+ years** of hands-on experience in Machine Learning..."
 *       400:
 *         description: Bad request - message is missing or empty
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message is required
 *             examples:
 *               missing:
 *                 summary: Missing message field
 *                 value:
 *                   error: "Message is required"
 *       500:
 *         description: Internal server error - OpenAI API unavailable or other server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 reply:
 *                   type: string
 *                   example: Assistant is currently unavailable.
 *             examples:
 *               error:
 *                 summary: Server error
 *                 value:
 *                   reply: "Assistant is currently unavailable."
 */
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message }
      ]
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ reply: 'Assistant is currently unavailable.' });
  }
});

// Export handler for Vercel serverless functions
export default app;

// Only listen if running locally (not in Vercel)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
