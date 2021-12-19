const jwt = require('jsonwebtoken');

function sign(data) {
    return jwt.sign(data, 'SECRET');
}

module.exports = {
    sign,
}