'use strict';

const express = require('express');

const { IngredientsModel } = require('../models');

const router = express.Router();

router.post('/ingredients', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const newIngredient = await IngredientsModel.create(req.body);
  res.status(200).send(newIngredient);
});

router.get('/ingredients', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const allIngredients = await IngredientsModel.findAll();
  res.status(200).send(allIngredients);
});

router.get('/ingredients/:id', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const oneIngredient = await IngredientsModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(oneIngredient);
});

router.put('/ingredients/:id', async (req, res, next) => {
  console.log('Request Body:', req.body);
  await IngredientsModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  const updatedIngredients = await IngredientsModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(201).send(updatedIngredients);
});

router.delete('/ingredients/:id', async (req, res, next) => {
  console.log('Request Body:', req.body);
  await IngredientsModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(204).send('Success!');
});

module.exports = router;
