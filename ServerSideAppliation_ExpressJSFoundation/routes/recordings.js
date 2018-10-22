const {Customer, validate} = require('../models/recordings'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//each router defines basic CRUD opeartions to be executed
router.get('/', async (req, res) => {
  const recordingds = await recordings.find().sort('name');
  res.send(recordings);
});

router.get('/:id', async (req, res) => {
  const recording = await recording.findById(req.params.id);

  if (!recording) return res.status(404).send('The recording with the given ID was not found.');

  res.send(recording);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let recording = new recording({ 
    name: req.body.name
  });
  recording = await recording.save();
  
  res.send(recording);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const recording = await recording.findByIdAndUpdate(req.params.id,
    { 
      name: req.body.name
    }, { new: true });

  if (!recording) return res.status(404).send('The recording with the given ID was not found.');
  
  res.send(recording);
});




module.exports = router; 