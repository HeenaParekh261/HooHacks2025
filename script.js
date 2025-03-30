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
};

function requestNotificationPermission() {
  if (Notification.permission !== "granted") {
      Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
              console.log("Notification permission granted.");
          } else {
              console.log("Notification permission denied.");
          }
      });
  }
}

// Function to show a notification
function showNotification() {
  if (Notification.permission === "granted") {
      const notification = new Notification("Hello, Hiker!", {
          body: "This is your reminder to drink water!",
          requireInteraction: true, // Optional: keeps the notification until dismissed
      });
  } else {
      console.log("You need to grant permission to see notifications.");
  }
}

// Wait for the page to load and then request permission
window.onload = function() {
  requestNotificationPermission();

  // Add event listener to show notification when the button is clicked
  document.getElementById("submit").addEventListener("click", function() {
      showNotification();
  });
};