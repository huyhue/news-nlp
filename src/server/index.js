require("dotenv").config();
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
const mockAPIResponse = require("./mockAPI.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("dist"));

// Get key API
const apiKey = process.env.API_KEY;
console.log(`API key meaningcloud: ${process.env.API_KEY}`);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});

app.post("/api", async (req, res) => {
  console.log(`Analy Web URL: ${req.body.url}`);
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.url}&lang=en`;
  const response = await fetch(apiURL);
  const projectData = await response.json();
  console.log(projectData);
  res.send(projectData);
});

app.listen(3000, () => {
  console.log("Server start port 3000");
});

module.exports = app;
