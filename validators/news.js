const { check } = require('express-validator');
const { thereIsNews, thereIsCategory } = require('./db-validators');

const validatorId = [check('id').custom(thereIsNews)];

const validatorBody = [
  check('ID_CATEGORY')
    .if(check('ID_CATEGORY').notEmpty())
    .custom(thereIsCategory),
  check('TITLE')
    .exists()
    .withMessage('El \'TITLE\' es un campo requerido')
    .notEmpty()
    .withMessage('El \'TITLE\' no puede estar vacío'),
  check('IMAGE')
    .isBase64()
    .withMessage('La \'IMAGE\' debe estar codificada en base 64'),
  check('VIDEO')
    .if(check('VIDEO').notEmpty())
    .isURL()
    .withMessage('El \'VIDEO\' debe ser una url válida'),
  check('ID_CATEGORY')
    .exists()
    .withMessage('EL \'ID_CATEGORY\' es un campo requerido')
    .notEmpty()
    .withMessage('EL \'ID_CATEGORY\' no puede estar vacío'),
];

module.exports = { validatorBody, validatorId };
