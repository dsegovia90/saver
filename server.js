import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import apiEndpoint from './api/graph/savings';

const app = express();
const port = 8080;

const mongoDB = 'mongodb://127.0.0.1/saver';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

app.use('/api', apiEndpoint);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
