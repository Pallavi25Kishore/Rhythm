let Artist = require('./db.js').Artist;
let TrackList = require('./db.js').TrackList;
let PlaylistTrack = require('./db.js').PlaylistTrack;
let PlaylistName = require('./db.js').PlaylistName;

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

module.exports.deletePlaylistTrack = (id) => {
  return PlaylistTrack.findOneAndDelete({track_id: id});
};

module.exports.addPlaylistName = (data) => {
  return new PlaylistName(data).save();
 };

 module.exports.getPlaylistNames = () => {
   return PlaylistName.find({}).exec();
 };

 module.exports.deletePlaylistName = (name) => {
   return PlaylistName.findOneAndDelete({playlist_name: name})
 };

 module.exports.deletePlaylistTrackforDeletedPlaylist = (name) => {
  return PlaylistTrack.findOneAndDelete({track_playlist: name});
};

