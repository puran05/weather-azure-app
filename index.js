// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// Additional routes can be added here
// Example:
// app.post('/api', (req, res) => {
//   res.json({ message: 'Data received', data: req.body });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
