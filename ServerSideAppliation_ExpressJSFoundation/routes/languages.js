const {Customer, validate} = require('../models/languages'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const languages = await language.find().sort('name');
  res.send(languages);
});

router.get('/:id', async (req, res) => {
  const language = await language.findById(req.params.id);

  if (!language) return res.status(404).send('The language with the given ID was not found.');

  res.send(language);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let language = new language({ 
    name: req.body.name
  });
  language = await language.save();
  
  res.send(language);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const language = await language.findByIdAndUpdate(req.params.id,
    { 
      name: req.body.name
    }, { new: true });

  if (!language) return res.status(404).send('The language with the given ID was not found.');
  
  res.send(language);
});




module.exports = router; 