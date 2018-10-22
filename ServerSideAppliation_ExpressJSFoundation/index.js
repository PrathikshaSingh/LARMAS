//Language Resource Management Server side Application
//Created by: Prathikhas Singh
//As part of EEE4022S
//Code scripted after having enrolled and completed the "Code with Mosh" Node.js Course found at https://codewithmosh.com/courses

//Packages and routers required for server to function
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const langauges = require('./routes/languages');
const prompts = require('./routes/prompts');
const users = require('./routes/users');
const langauges = require('./routes/translations');
const prompts = require('./routes/annotations');
const users = require('./routes/recordings');

//use of the MongoDB package manager "mongoose" to connect to mongoDB database
mongoose.connect('mongodb://localhost/LRM')
  .then(() => console.log('Connected to database...'))
  .catch(err => console.error('Could not connect to database...'));

  //API endpoint linked to routers
app.use(express.json());
app.use('/api/languages', langauges);
app.use('/api/prompts', prompts);
app.use('/api/users', users);
app.use('/api/translations', translations);
app.use('/api/annotations', annotations);
app.use('/api/recordings', recordings);

//Generation of Node.js Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));