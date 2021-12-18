const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// ROUTES
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);


// INTERNAL FUNCTIONS
const list = (req, res) => {
    Controller.list()
    .then(list => {
        response.success(req, res, list, 200);
    })
    .catch(err => {
        response.error(req, res, err.message, 500);
    })
}

const get = (req, res) => {
    Controller.get(req.params.id)
    .then(user => {
        response.success(req, res, user, 200);
    })
    .catch(err => {
        response.error(req, res, err.message, 500);
    })
}

const upsert = (req, res) => {
    Controller.upsert(req.body)
    .then(user => {
        response.success(req, res, user, 201);
    })
    .catch(err => {
        response.error(req, res, err.message, 500);
    })
}

module.exports = router;
