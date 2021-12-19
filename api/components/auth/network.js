const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// ROUTES
router.post('/login', login);


// INTERNAL FUNCTIONS
function login(req, res) {
    Controller.login(req.body.username, req.body.password)
    .then(token => {
        response.success(req, res, token, 200);
    })
    .catch(err => {
        response.error(req, res, 'Información Inválida', 400);
    })
}

module.exports = router;
