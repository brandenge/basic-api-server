'use strict';

const express = require('express');

const { ClothesModel } = require('../models');

const router = express.Router();

router.post('/clothes', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const newClothing = await ClothesModel.create(req.body);
  res.status(201).send(newClothing);
});

router.get('/clothes', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const allClothing = await ClothesModel.findAll();
  res.status(200).send(allClothing);
});

router.get('/clothes/:id', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const oneClothing = await ClothesModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(oneClothing);
});

router.put('/clothes/:id', async (req, res, next) => {
  console.log('Request Body:', req.body);
  await ClothesModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  const updatedClothing = await ClothesModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(201).send(updatedClothing);
});

router.delete('/clothes/:id', async (req, res, next) => {
  console.log('Request Body:', req.body);
  await ClothesModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(204).send('Success!');
});

module.exports = router;
