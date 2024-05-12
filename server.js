// server.js

import express from "express";
import cors from "cors";
import { OpenAI } from "openai";

const app = express();
const port = process.env.PORT || 3005;
const apiKey = process.env.VITE_OPEN_AI_KEY;
const openai = new OpenAI({ apiKey: apiKey });

app.use(cors());
app.use(express.json()); 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post("/chatbot", async (req, res) => {
// The 'question' variable is the user's input from the frontend
  const { question } = req.body;
  // Here is where we communicate with the OpenAI API to create our chatbot.
  // We store the chatbot's response in the 'response' variable
  const response = await openai.chat.completions.create({
    messages: [
  // We give the chatbot a role with some content to determine how it will behave
      {
        role: "system",
        content:
          "You are a Spanish translator.",
      },
  // We ask the chatbot to generate an answer based on the user's question
      {
        role: "user",
        content: "Translate the following to Spanish without elaborating on the topic: " + question,
      }, 
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 50,
  });
  res.send(response.choices[0].message.content);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});