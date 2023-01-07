

const insertInto = (tablename,columns,values) => {
    return `INSERT INTO "${tablename}"
            (${columns})
            VALUES (${values})
    `
}
const updateRow = (tablename,columns,values,condition) => {
    let queryStr =  `UPDATE "${tablename}"`
     for(var i = 0; i< columns.length; i++){
      if(i == 0)
        queryStr += `\n SET ${columns} = ${values}\n`;
      else
      queryStr += `\n${columns} = ${values}\n`;

     }
      queryStr += ` \nWHERE ${condition} `;
    return queryStr;
}

module.exports = {
    insertInto:insertInto,
    updateRow:updateRow,
}