import express from 'express';
const app = express();
const port = 8080;

import mongoose from 'mongoose';

import bodyParser from 'body-parser';

const router = express.Router();
import apiEndpoint from  './api/routes/savings';

const mongoDB = 'mongodb://127.0.0.1/saver';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json());

app.use('/api', apiEndpoint);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
