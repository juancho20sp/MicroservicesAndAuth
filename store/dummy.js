const db = {
    'user': [
        {
            id: 1,
            name: 'Juan'
        }
    ]
};

async function list(table) {
    return db[table] || [];
}

async function get(table, id) {
    const collection = await list(table);

    return collection.filter(item => item.id === Number(id))[0] || null;
}

async function upsert(table, data) {
    if (!db[table]) {
        db[table] = [];
    }

    db[table].push(data);

    console.log(db);
}

async function remove(table, id) {
    return true;
}

async function query(table, data) {
    const registers = await list(table);

    const keys = Object.keys(data);
    const key = keys[0]

    return registers.filter(register => register[key] === data[key])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
};