/* eslint-disable import/no-unresolved */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const passport = require('passport');
const bodyParser = require('body-parser');
const swaggerSpec = require('./config/swagger');
const { router } = require('./routers');
require('./utils/sendmail');

const app = express();
app.use(cors());
app.use(express.json({ limit: '100mb' }));
// Passport middleware
app.use(passport.initialize());
// Passport Config
require('./config/passport')(passport);
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
// Here put routers
app.use('/api', router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Listenin in http:localhost: ${port}`);
});
