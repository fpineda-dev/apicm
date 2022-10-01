const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "Hermes API - OpenAPI 3.0",
    description: `This project is an initiative of "Programación en Español"`,
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local environment",
    },
    {
      url: "https://hermes-development.up.railway.app/docs/",
      description: "Dev environment",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yml"],
};

module.exports = swaggerJSDoc(options);
