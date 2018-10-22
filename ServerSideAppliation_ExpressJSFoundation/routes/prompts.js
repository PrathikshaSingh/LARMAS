const {Genre, validate} = require('../models/prompts');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const prompts = await prompt.find().sort('name');
  res.send(prompts);
});

router.get('/:id', async (req, res) => {
  const prompt = await prompt.findById(req.params.id);

  if (!prompt) return res.status(404).send('The prompt with the given ID was not found.');

  res.send(prompt);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let prompt = new prompt({ content: req.body.name });
  prompt = await prompt.save();
  
  res.send(prompt);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const prompt = await prompt.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
    new: true
  });

  if (!prompt) return res.status(404).send('The prompt with the given ID was not found.');
  
  res.send(prompt);
});

router.delete('/:id', async (req, res) => {
  const prompt = await prompt.findByIdAndRemove(req.params.id);

  if (!prompt) return res.status(404).send('The prompt with the given ID was not found.');

  res.send(prompt);
});



module.exports = router;