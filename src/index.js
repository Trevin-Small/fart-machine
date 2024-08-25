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

app.get('/noise-machine', (req, res) => {

  if (FART) {
    FART = false;
    res.status(200).send("noise 1");
  } else {
    res.status(200).send("noise 0");
  }

});

app.post('/noise-machine', (req, res) => {
  FART = true;
  res.sendStatus(200).send("OK");
});
