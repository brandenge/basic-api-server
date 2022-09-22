'use strict';

const express = require('express');
const clothesRouter = require('./routes/clothes');
const ingredientsRouter = require('./routes/ingredients');

const app = express();
app.use(express.json());
app.use(clothesRouter);
app.use(ingredientsRouter);

const PORT = process.env.PORT || 3002;

function start() {
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}

module.exports = { app, start };
