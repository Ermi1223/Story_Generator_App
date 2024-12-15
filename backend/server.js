// Import required packages
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables from the .env file
dotenv.config();

// Initialize the app
const app = express();

// Middleware to handle CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Initialize Google Generative AI with the API Key from .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Use the API Key from .env file
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' }); // Use the Gemini model

// Set up a simple route to verify the server is working
app.get('/', (req, res) => {
  res.send('Story Generator API is running!');
});

// Route to dynamically generate personalized stories based on user input
app.post('/generate-story', async (req, res) => {
  const { name, setting, theme, style } = req.body;

  // Validate input
  if (!name || !setting || !theme) {
    return res.status(400).send({ message: 'Name, setting, and theme are required for generating the story.' });
  }

  // Construct the prompt dynamically based on user input
  let prompt = `Write a captivating story about a character named ${name} who lives in ${setting}. The story should explore the theme of ${theme}.`;

  // Apply Zero-Shot Prompting (general instructions if no specific style is provided)
  if (!style) {
    prompt += `
      The story should be immersive, emotional, and thought-provoking, drawing readers into the world you've created.
      Use rich descriptions, engaging dialogue, and strong character development.
    `;
  } else {
    // Apply Few-Shot Prompting (incorporate user-specified style into the prompt)
    prompt += `
      Follow the writing style of ${style}. Use elements of this style to craft a narrative that stays true to the tone and feel.
      Include vivid details, emotional depth, and a strong sense of character and place.
    `;
  }

  // Log the generated prompt to check if it's constructed properly
  console.log("Generated prompt:", prompt);

  // LLM Settings for better control of output
  const settings = {
    temperature: 0.7, // Controls creativity
    maxTokens: 300, // Allow for a longer story
    topP: 0.9, // Nucleus sampling for diversity
    frequencyPenalty: 0.2, // Avoid repetition of words
    presencePenalty: 0.3 // Avoid repeated ideas
  };

  // Log the settings being used
  console.log("Using LLM settings:", settings);

  try {
    // Generate the story using Google Generative AI
    const result = await model.generateContent(prompt, settings);

    // Log the result to verify if the model output is correct
    console.log("Generated story:", result.response.text());

    // Limit the generated output to 1-2 paragraphs (you can adjust based on need)
    const story = result.response.text().split('\n').slice(0, 10).join('\n'); // Limit to a few lines

    // Respond with the generated story
    res.json({ story });
  } catch (error) {
    console.error('Error generating story:', error);
    res.status(500).send({ message: 'Error generating story. Please try again later.' });
  }
});

// Set server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
