const { Client } = require('pg');
const  {SQL_USER, SQL_PASSWORD, SQL_HOST, SQL_PORT, SQL_DB} = require('./config.js');
const { updateRow } = require("./utils");
const verifyUser = (username) => { 
    let mSqlclient = new Client(`postgres://${SQL_USER}:${SQL_PASSWORD}@${SQL_HOST}:${SQL_PORT}/${SQL_DB}`);
    mSqlclient.connect();
    queryStr = updateRow('User',['userstatus'],["'t'"],`username = '${username}'`)
    mSqlclient.query(queryStr).then(res => console.log(res));
}
module.exports ={
    verifyUser:verifyUser,
}