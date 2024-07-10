let Artist = require('./db.js').Artist;
let TrackList = require('./db.js').TrackList;
let PlaylistTrack = require('./db.js').PlaylistTrack;

module.exports.getArtists = () => {
  return Artist.find({}).exec();
};

module.exports.getTracks = (id) => {
  return TrackList.find({'tracks.artists.id': id});
};

module.exports.addPlaylistTrack = (data) => {
 return new PlaylistTrack(data).save();
};

module.exports.getPlaylistTracks = () => {
  return PlaylistTrack.find({}).exec();
};