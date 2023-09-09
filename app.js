require("dotenv").config();
const express = require("express");
const app = express();

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

// API Router
const activitiesRouter = require("./routes/activities");
const routinesRouter = require("./routes/routines");

// Use the API routers
app.use("/api/activities", activitiesRouter);
app.use("/api/routines", routinesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;

