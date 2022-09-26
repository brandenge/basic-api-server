'use strict';

const express = require('express');
const { clothesValidator } = require('../middleware/validator');
const { ClothesModel } = require('../models');

const router = express.Router();

router.post('/clothes', clothesValidator, async (req, res, next) => {
  try {
    const newClothing = await ClothesModel.create(req.body);
    res.status(201).send(newClothing);
  } catch (error) {
    next(error);
  }
});

router.get('/clothes', async (req, res, next) => {
  try {
    const allClothing = await ClothesModel.findAll();
    res.status(200).send(allClothing);
  } catch (error) {
    next(error);
  }
});

router.get('/clothes/:id', async (req, res, next) => {
  try {
    const oneClothing = await ClothesModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(oneClothing);
  } catch (error) {
    next(error);
  }
});

router.put('/clothes/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await ClothesModel.update(req.body, { where: { id } });
    const updatedClothing = await ClothesModel.findOne({ where: { id } });
    res.status(201).send(updatedClothing);
  } catch (error) {
    next(error);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {
    await ClothesModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send('Success! Clothing deleted.');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
