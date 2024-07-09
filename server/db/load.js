require("dotenv").config();
let data1 = require('./example-artist-data.js').data1;
let data2 = require('./example-top-tracks-data.js').data2;
let Artist = require('../db.js').Artist;
let TrackList = require('../db.js').TrackList;
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`)

  .then(() => {
    console.log('Connection to the database established successfully');

    let saveArtist = (data) => {
      return Artist.create(data1);
      };

    let saveTrackList = (data) => {
      return TrackList.create(data);
    };

    saveArtist(data1)
    .then((response) => {
      console.log("artists data saved");
          saveTrackList(data2)
                .then((response) => {
                  console.log("tracks data saved");
                  mongoose.disconnect()
                  .then(() => {
                    console.log('Database connection closed successfully');
                  })
                  .catch(err => {
                    console.error('Error closing the database connection', err);
                  });
                })
                .catch((err) => {
                  console.log("error in saving tracks data", err);
                });
    })
    .catch((err) => {
      console.log("error in saving artists data", err);
    });

  })
  .catch(err => {
    console.error('Error connecting to the database', err);
  });

/*
commented out mongoose.connect from db.js and then ran node server/db/load.js from terminal and got the following response -
Database connection established
Connection to the database established successfully
artists data saved
tracks data saved
Database connection closed successfully*/














