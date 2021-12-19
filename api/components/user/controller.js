const { nanoid } = require('nanoid');
const auth = require('../auth');
const TABLE = 'user';

module.exports = function(injectedStore){
    let store = injectedStore;

    if (!store){
        store = require('./../../../store/dummy');
    }

    function list() {
        return store.list(TABLE);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    async function upsert(data) {
        const user = {
            name: data.name,
            username: data.username
        }

        user.id = data.id ? data.id : nanoid();

        // Si hay contraseña o nombre de usuario -> estamos creando
        if (data.password || data.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: data.password
            })
        }
        
        // Si hay usuario y contraseña -> estamos modificando la contraseña del usuario
        return store.upsert(TABLE, user);
    }

    function remove(id){
        return store.remove(TABLE, user);
    }

    return {
        list,
        get,
        upsert,
        remove
    }
};