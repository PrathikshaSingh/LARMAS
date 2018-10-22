//packages and models required
const {annotations, validate} = require('../models/annotations');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//each router defines basic CRUD opeartions to be executed
router.get('/', async (req, res) => {
  const annotations = await annotation.find().sort('name');
  res.send(annotations);
});

router.get('/:id', async (req, res) => {
  const annotation = await annotation.findById(req.params.id);

  if (!annotation) return res.status(404).send('The annotation with the given ID was not found.');

  res.send(annotation);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let annotation = new annotation({ content: req.body.name });
  annotation = await annotation.save();
  
  res.send(annotation);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const annotation = await annotation.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!annotation) return res.status(404).send('The annotation with the given ID was not found.');
  
  res.send(annotation);
});

router.delete('/:id', async (req, res) => {
  const annotation = await annotation.findByIdAndRemove(req.params.id);

  if (!annotation) return res.status(404).send('The annotation with the given ID was not found.');

  res.send(annotation);
});



module.exports = router;