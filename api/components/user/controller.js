const nanoid = require('nanoid');
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

    function upsert(data) {
        const user = {
            name: data.name
        }

        user.id = data.id ? data.id : nanoid();

        return store.upsert(TABLE, data);
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