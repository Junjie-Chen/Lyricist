const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;
const mongoose = require('mongoose');
const Song = mongoose.model('song');
const LyricType = require('./lyric_type');

const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue, args) {
        return Song.findLyrics(parentValue.id);
      }
    }
  })
});

module.exports = SongType;
