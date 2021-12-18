const db = {
    'user': [
        {
            id: 1,
            name: 'Juan'
        }
    ]
};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    const collection = await list(table);

    return collection.filter(item => item.id === Number(id))[0] || null;
}

async function upsert(table, data) {
    db[table].push(data);
}

async function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
};