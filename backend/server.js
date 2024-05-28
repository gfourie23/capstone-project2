// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { OpenAI } =require("openai");


const app = express();
const port = process.env.port || 3008;
const host = '127.0.0.1';
const apiKey = process.env.VITE_OPEN_AI_KEY;
const openai = new OpenAI({ apiKey: apiKey });
const apiRouter = require('./api');

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);
//app.listen(port, () => {
  ////console.log(`Server running on port ${port}`);
//});

const startServer = (port) => {
  const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1); // Or handle it by trying another port
  } else {
    console.error(`Server error: ${err}`);
    process.exit(1);
  }
});

app.post("/new-word", async (req, res) => {
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
};

//app.listen(port, () => {
    //console.log(`Server is running on port ${port}`);
//});

startServer(3008);