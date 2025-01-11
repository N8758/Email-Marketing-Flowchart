const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api', emailRoutes);

module.exports = app;
