const {Genre, validate} = require('../models/translations');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const translations = await translation.find().sort('name');
  res.send(translations);
});

router.get('/:id', async (req, res) => {
  const translation = await translation.findById(req.params.id);

  if (!translation) return res.status(404).send('The translation with the given ID was not found.');

  res.send(translation);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let translation = new translation({ content: req.body.name });
  translation = await translation.save();
  
  res.send(translation);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const translation = await translation.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!translation) return res.status(404).send('The translation with the given ID was not found.');
  
  res.send(translation);
});

router.delete('/:id', async (req, res) => {
  const translation = await translation.findByIdAndRemove(req.params.id);

  if (!translation) return res.status(404).send('The translation with the given ID was not found.');

  res.send(translation);
});



module.exports = router;