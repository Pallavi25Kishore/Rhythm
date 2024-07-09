require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`)
.then(() => console.log('Database connection established'))
.catch(err => console.error('Database connection error:', err));


const Schema = mongoose.Schema;

let ArtistSchema = new Schema({
    external_urls: {
      spotify: { type: String }
    },
    genres: { type: [String] },
    href: { type: String },
    id: { type: String },
    images: [
      {
        height: { type: Number },
        url: { type: String },
        width: { type: Number }
      }
    ],
    name: { type: String },
    popularity: { type: Number },
    type: { type: String },
    uri: { type: String }
  });

let TrackSchema = new Schema({
    album: {
      id: String,
      images: [
      {
        height: { type: Number },
        url: { type: String },
        width: { type: Number }
      }
    ]},
    artists: [{
      id: String,
      name: String,
      images: [
        {
          height: { type: Number },
          url: { type: String },
          width: { type: Number }
        }
      ]
    }],
    href: String,
    id: String,
    linked_from: Schema.Types.Mixed,
    name: String,
    popularity: Number,
    preview_url: String,
    track_number: Number,
    uri: String
  });

  const TrackListSchema = new Schema({
    tracks: [TrackSchema]
  });


  const Artist = mongoose.model('Artist', ArtistSchema);
  const TrackList = mongoose.model('TrackList', TrackListSchema);

module.exports.Artist = Artist;
module.exports.TrackList = TrackList;

