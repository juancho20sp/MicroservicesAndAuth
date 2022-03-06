const jwt = require('jsonwebtoken');
const config = require('../config');

// const SECRET = 'SECRET';
const SECRET = config.jwt.secret;

function sign(data) {
    return jwt.sign(data, SECRET);
}

function verify(token) {
    return jwt.verify(token, SECRET);
}

const check = {
    own: function(req, owner) {
        // Decodificar el token
        const decoded = decodeHeader(req);

        console.log(decoded);

        if (decoded.id !== owner) {
            throw new Error('No puedes hacer esto');
        }
    }
}

function getToken(authHeader) {
    // authHeader -> Bearer adasdasdasd

    if (!authHeader) {
        throw new Error('No hay token');
    }

    if (authHeader.indexOf('Bearer ') === -1){
        throw new Error('Formato inválido');
    }

    const token = authHeader.replace('Bearer ', '');
    
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check
}