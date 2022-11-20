

const insertInto = (tablename,columns,values) => {
    return `INSERT INTO "${tablename}"
            (${columns})
            VALUES (${values})
    `
}

module.exports = {
    insertInto:insertInto,
}