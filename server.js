// Install modules
const express = require('express')
const app = express()

const zodiak = [];

// Dynamic JSON Endpoint
app.get('/api/zodiak', function (request, response) {
  response.send(zodiak)
})

app.get('/api/zodiak/:id', function (request, response) {
  console.log(request.params)
  const character = '[name here]';
  response.send(character)
})

// Handle 404 errors with middleware
app.use(function (request, response) {
  response.status(404)
  response.send('404: File Not Found')
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});