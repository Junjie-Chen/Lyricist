const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const mongoose = require('mongoose');
const Lyric = mongoose.model('lyric');

const LyricType = new GraphQLObjectType({
  name:  'LyricType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require('./song_type'),
      resolve(parentValue, args) {
        return Lyric.findSong(parentValue.id);
      }
    }
  })
});

module.exports = LyricType;
