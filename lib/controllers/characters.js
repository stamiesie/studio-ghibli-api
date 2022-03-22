const { Router } = require('express');

const Character = require('../models/Character');

module.exports = Router()

  .get('/', (req, res, next) => {
    Character.getAllCharacters()
      .then((char) => res.send(char))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Character.getCharacterById(req.params.id)
      .then((char) => res.send(char))
      .catch(next);
  });
