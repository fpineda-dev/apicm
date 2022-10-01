const { check } = require("express-validator");
const {
  thereIsUser,
  thereIsRol,
  thereIsEmail,
} = require("../validators/db-validators");

const validatorId = [check("id").custom(thereIsUser)];

const validatorBody = [
  check("ID_ROLES")
    .exists()
    .withMessage("El 'ID_ROLES' es un campo requerido")
    .notEmpty()
    .withMessage("El campo 'ID_ROLES' no puede estar vacío")
    .custom(thereIsRol),
  check("NAME")
    .exists()
    .withMessage("El 'NAME' es un campo requerido")
    .notEmpty()
    .withMessage("El campo 'NAME' no puede estar vacío"),
  check("LAST_NAME")
    .exists()
    .withMessage("El 'LAST_NAME' es un campo requerido")
    .notEmpty()
    .withMessage("El campo 'LAST_NAME' no puede estar vacío"),
  check("DNI")
    .exists()
    .withMessage("El 'DNI' es un campo requerido")
    .notEmpty()
    .withMessage("El campo 'DNI' no puede estar vacío"),
  check("USER")
    .exists()
    .withMessage("El 'USER' es un campo requerido")
    .notEmpty()
    .withMessage("El campo 'USER' no puede estar vacío"),
  check("EMAIL")
    .exists()
    .withMessage("El 'EMAIL' es un campo requerido")
    .notEmpty()
    .withMessage("El campo 'EMAIL' no puede estar vacío")
    .isEmail()
    .withMessage("El campo 'EMAIL' debe ser válido")
    .custom(thereIsEmail),
  check("PASSWORD")
    .exists()
    .withMessage("El 'PASSWORD' es un campo requerido")
    .notEmpty()
    .withMessage("El campo 'PASSWORD' no puede estar vacío"),
];

module.exports = { validatorBody, validatorId };
