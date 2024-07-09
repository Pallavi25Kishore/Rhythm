require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");
const controllers = require('./controllers.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.json());

app.get('/artists', (req, res) => {
  controllers.getArtists()
  .then((response) => {
    res.status(200).send(response);
  })
  .catch((err) => {
    console.log("error in fetching Artists data");
    res.send(400);
  })
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);