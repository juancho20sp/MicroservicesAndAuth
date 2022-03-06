const auth = require('../../../auth');

const UPDATE = 'update'

function checkAuth(action) {
    function middleware(req, res, next) {
        switch(action) {
            case UPDATE:
                // El usuario que quiere modificar
                const owner = req.body.id;

                // Verificar permisos -> el usuario que generó el token es el mismo que queremos comprobar
                auth.check.own(req, owner);

                next();
                break;
            default:
                next();

        }
    }

    return middleware;
}

module.exports = {
    checkAuth
}