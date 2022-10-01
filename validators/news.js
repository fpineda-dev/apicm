const { check } = require("express-validator");
const { thereIsNews, thereIsCategory } = require("../validators/db-validators");

const validatorId = [check("id").custom(thereIsNews)];

const validatorBody = [
  check("ID_CATEGORY")
    .if(check("ID_CATEGORY").notEmpty())
    .custom(thereIsCategory),
  check("TITLE")
    .exists()
    .withMessage("El 'TITLE' es un campo requerido")
    .notEmpty()
    .withMessage("El 'TITLE' no puede estar vacío"),
  check("IMAGE")
    .isBase64()
    .withMessage("La 'IMAGE' debe estar codificada en base 64"),
  check("VIDEO")
    .if(check("VIDEO").notEmpty())
    .isURL()
    .withMessage("El 'VIDEO' debe ser una url válida"),
];

module.exports = { validatorBody, validatorId };
