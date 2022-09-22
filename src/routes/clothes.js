'use strict';

const express = require('express');

const { ClothesModel } = require('../models');

const router = express.Router();

router.post('/clothes', async (req, res, next) => {
  console.log('Request Body:', req.body);
  const newClothing = await ClothesModel.create(req.body);
  res.status(200).send(newClothing);
});

module.exports = router;
