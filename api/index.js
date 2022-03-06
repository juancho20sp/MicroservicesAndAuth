const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const config = require('./../config');
const user = require('./components/user/network')
const auth = require('./components/auth/network');
const errors = require('../network/errors');

const app = express();

// EXTRAS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
    console.log(`API escuchando en el puerto ${config.api.port}`);
});
