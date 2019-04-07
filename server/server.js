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

// Replace '' with your MongoDB Atlas connection string
const MONGO_URI = '';

if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useMongoClient: true });
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

module.exports = app;
