const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const models = require('./models');
const schema = require('./schema/schema');

const app = express();

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

app.use(webpackMiddleware(webpack(webpackConfig)));

if (process.env.NODE_ENV !== 'production') {
  require('../keys');
}

const MONGODB_ATLAS_CONNECTION_STRING = process.env.MONGODB_ATLAS_CONNECTION_STRING;

if (!MONGODB_ATLAS_CONNECTION_STRING) {
  throw new Error('You must provide a MongoDB Atlas connection string.');
}

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_ATLAS_CONNECTION_STRING, { useMongoClient: true });
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

module.exports = app;
