require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./routers");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
// Here put routers
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listenin in http:localhost: ${port}`);
});
