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

app.get('/tracks/:id', (req, res) => {
  controllers.getTracks(req.params.id)
  .then((response) => {
    res.status(200).send(response);
  })
  .catch((err) => {
    console.log("error in fetching Tracks data");
    res.send(400);
  });
});

app.post('/playlist', (req, res) => {
  let data = {
    track_id: req.body.track_id,
    track_name: req.body.track_name,
    track_image: req.body.track_image
  }
  controllers.addPlaylistTrack(data)
  .then((response) => {
    res.status(200).send(response)
  })
  .catch((err) => {
    console.log("error in saving playlist data");
    res.send(400);
  });
});

app.get('/playlist', (req, res) => {
  controllers.getPlaylistTracks()
  .then((response) => {
    res.status(200).send(response);
  })
  .catch((err) => {
    console.log("error in fetching playlist data");
    res.send(400);
  });
});

app.delete('/playlist/:id', (req, res) => {
  controllers.deletePlaylistTrack(req.params.id)
  .then((response) => {
    res.status(200).send(response);
  })
  .catch((err) => {
    console.log("error in deleting playlist data");
    res.send(400);
  });
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);