const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8080;
const api_key = 'GjMfOdgf9sfcGMdK5S45xPJy9fiKgbuc';

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the origin(s) you want to allow
  methods: 'GET', // Specify the HTTP methods you want to allow
};

const options = {
  method: 'GET',
  url: `https://api.tomorrow.io/v4/weather/forecast?location=yerevan&apikey=${api_key}`,
  headers: { accept: 'application/json' }
};

// Use the cors middleware to enable CORS for your Express app
app.use(cors(corsOptions));

// Define a simple GET route at /api/weather
app.get('/api/weather', (req, res) => {
    axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
    console.log(error);
      res.status(error.response.status).json({ error: error.response.statusText });
    });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});