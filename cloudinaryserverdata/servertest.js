//servertest.js
console.log("Hello, World!");
const express = require('express');
const app = express();
const port = 4300; // Or whatever port you are using

app.get('/', (req, res) => {
  res.send('This is a statement that was sent from server to client succesfully.'); // Or serve an HTML file
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
