# Story_Generator_App

# Project Overview

The Story Generator App allows users to create personalized stories by inputting key details like character name, setting, theme, and writing style. The app dynamically generates a unique short story based on user inputs, leveraging advanced prompt engineering techniques with a *Large Language Model (LLM). This application is built using React for the frontend and Node.js/Express for the backend, and it communicates with an LLM API to generate stories based on the user's preferences.

# Why I Used These Prompting Techniques

# Zero-shot Prompting:
Zero-shot prompting is used when the user provides basic inputs like character name, setting, and theme without specifying a specific writing style. The model then generates a creative and free-form story based on these inputs. Zero-shot prompting allows the model to take the given details and create a unique narrative without needing predefined examples of how a specific writing style should appear.

# Few-shot Prompting:
Few-shot prompting is employed when the user specifies a style (e.g., "Sci-fi thriller," "Fantasy epic"). By providing a few examples of the chosen style, the model learns how to structure the story according to that genre. This helps the model generate coherent and contextually fitting narratives, with the tone, pacing, and structure appropriate to the specified genre.

# Why I Use These Model Settings:

1. Temperature (0.7):
   Setting the temperature to 0.7 allows the model to generate stories that are creative but not too random. It strikes a balance between uniqueness and coherence, ensuring that the generated narrative is both imaginative and logical.

2. Max Tokens (500): 
   The story is capped at 500 tokens, keeping the narrative concise yet comprehensive. This length ensures the generated story is long enough to include a beginning, middle, and end while remaining readable and engaging.

3. Top-P (0.9):
   The Top-P sampling technique helps the model select words from the top 90% of possible choices, encouraging the generation of diverse and varied language, which keeps the story interesting and avoids repetitive or predictable language.

4. Frequency Penalty (0.2):
   The frequency penalty prevents the model from overusing the same words or phrases. This results in a more natural flow of the story, reducing redundancy and ensuring that different words and concepts are used throughout the narrative.

5. Presence Penalty (0.3):  
   The presence penalty discourages the model from repeating the same themes or concepts. This keeps the story fresh, ensuring it explores a wide range of ideas and maintains variety throughout.

# How Prompting Techniques Were Applied

# Frontend (React):
- Character Name: Users input the name of the main character, which helps personalize the story.
- Setting: Users specify where the story takes place (e.g., "forest," "distant planet"), providing context for the narrative.
- Theme: The user inputs the central theme or message of the story (e.g., "adventure," "redemption").
- Writing Style (Optional): Users can optionally specify the style of the story, such as "mystery," "romance," or "horror," which guides the tone and structure of the story.

# Backend (Node.js/Express):

- Prompt Creation:
  - Zero-shot Prompting: If no writing style is specified, the backend constructs a general prompt that guides the AI to create a story based on the user inputs.  
    Example: "Write a story with the main character named Sarah, set in a small town during winter, with the theme of overcoming fear."

  - Few-shot Prompting: If a style is provided, the backend adjusts the prompt to include examples or guidelines for the AI to follow.  
    Example: "Write a mystery story about a detective named James, set in a foggy city, focusing on the theme of solving an old case."

- Model Parameters: The backend sets the following parameters for the LLM:
  - Temperature: 0.7
  - Max Tokens: 500
  - Top-P, Frequency Penalty, and Presence Penalty:** Fine-tuned to encourage creativity, coherence, and narrative variety.

- Dynamic Prompting: Based on the user's input, the backend dynamically creates the prompt, ensuring that the story is unique and tailored to the provided inputs.

# Technologies Used

- Frontend: React
- Backend:Node.js, Express
- Model API: Gemini or other LLM API
- Deployment: Can be deployed on platforms such as Heroku, AWS, or Vercel

# How to Run the Application

# Prerequisites:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- LLM API key (Gemini or another model API)

# Steps to Set Up the Project:

1. Clone the repository to your local machine.
   
   ```bash
   git clone https://github.com/yourusername/story-generator-app.git
   ```

2. Install dependencies for both the frontend and backend:
   
   Navigate to the backend folder and install dependencies:
   ```bash
   cd backend
   npm install
   ```

   Navigate to the frontend folder and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Configure the backend API with your LLM API key:
   - In the backend folder, create a `.env` file with the following:
     ```bash
     LLM_API_KEY=your_api_key_here
     ```

4. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

5. Start the frontend React app:
   ```bash
   cd frontend
   npm start
   ```

6. Access the Story Generator app in your browser:
   Open `http://localhost:5000` to start generating stories.

# Example Use Cases:
- Creative Writing: Aspiring writers can use the app to generate ideas or inspiration for their next story.
- Education: Teachers can use the app to demonstrate different writing styles and themes to students.
- Entertainment: Users can have fun creating their own personalized stories, discovering new plots and characters.
