const express = require('express');

const config = require('./../config');
const user = require('./components/user/network')

const app = express();

// EXTRAS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log(`API escuchando en el puerto ${config.api.port}`);
});
