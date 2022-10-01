const { check } = require("express-validator");
const { thereIsRol } = require("../validators/db-validators");

const validatorId = [check("id").custom(thereIsRol)];

const validatorBody = [
  check("NAME")
    .exists()
    .withMessage("El 'NAME' es un campo requerido")
    .notEmpty()
    .withMessage("El 'NAME' no puede estar vacío"),
  check("TOKEN")
    .exists()
    .withMessage("El 'TOKEN' es un campo requerido")
    .notEmpty()
    .withMessage("El 'TOKEN' no puede estar vacío"),
];

module.exports = { validatorBody, validatorId };
