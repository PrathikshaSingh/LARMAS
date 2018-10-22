const {Movie, validate} = require('../models/users'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await user.find().sort('name');
  res.send(users);
});
router.get('/:id', async (req, res) => {
  const user = await user.findById(req.params.id);

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = new user({ 
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    language: req.body.language
  });
  user = await user.save();
  
  res.send(user);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);


  const user = await user.findByIdAndUpdate(req.params.id,
    { 
      username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    language: req.body.language
    }, { new: true });

  if (!user) return res.status(404).send('The user with the given ID was not found.');
  
  res.send(movie);
});

router.delete('/:id', async (req, res) => {
  const user = await user.findByIdAndRemove(req.params.id);

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
});


module.exports = router; 