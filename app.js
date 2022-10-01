require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const { router } = require("./routers");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
// Here put routers
app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Listenin in http:localhost: ${port}`);
});
