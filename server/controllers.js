let Artist = require('./db.js').Artist;
let TrackList = require('./db.js').TrackList;

module.exports.getArtists = () => {
  return Artist.find({}).exec();
};