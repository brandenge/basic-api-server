'use strict';

const express = require('express');

const { IngredientsModel } = require('../models');

const router = express.Router();

router.post('/ingredients', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const newIngredient = await IngredientsModel.create(req.body);
  res.status(200).send(newIngredient);
});

module.exports = router;
