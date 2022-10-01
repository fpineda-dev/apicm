const { check } = require("express-validator");
const { thereIsCategory } = require("../validators/db-validators");

const validatorId = [check("id").custom(thereIsCategory)];

const validatorBody = [
  check("DESCRIPTION")
    .exists()
    .withMessage("La 'DESCRIPTION' es un campo requerido")
    .notEmpty()
    .withMessage("La 'DESCRIPTION' no puede estar vacío"),
];

module.exports = { validatorId, validatorBody };
