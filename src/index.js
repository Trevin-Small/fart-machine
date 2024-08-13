const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

let FART = false;

app.get('/fart-machine', (req, res) => {

  if (FART) {
    res.status(200).send(1);
    FART = false;
  }

  res.status(200).send(0);

});

app.post('/fart-machine', (req, res) => {
  FART = true;
  res.status(200).send("OK");
});
