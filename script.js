//hello this is openai api vibes
/*const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.chatReq = async (req, res) => {
    try {
      const message = "Hi chat! Can you help me with diagnosing something from symptoms?";
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        temperature: 0,
        max_tokens: 1000,
      });
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err.message);
    }
  };*/

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const { Configuration, OpenAIApi } = require("openai");
const OpenAI = require("openai"); 

const app = express();
const port = 3000;

app.use(cors()); // Allow frontend requests
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: "API_KEY" });


app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


document.getElementById("remindForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const water = document.getElementById("water").value;
  const food = document.getElementById("food").value;
  const sunscreen = document.getElementById("sunscreen").value;
  const duration1 = document.getElementById("duration1").value;
  const duration2 = document.getElementById("duration2").value;
  const duration3 = document.getElementById("duration3").value;

  const 

  document.getElementById("output").textContent = jsContent;
}