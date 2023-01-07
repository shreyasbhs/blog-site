const { Client } = require('pg');
const  {SQL_USER, SQL_PASSWORD, SQL_HOST, SQL_PORT, SQL_DB} = require('./config.js');

const verifyUser = (userInfo,res) => { 
    let mSqlclient = new Client(`postgres://${SQL_USER}:${SQL_PASSWORD}@${SQL_HOST}:${SQL_PORT}/${SQL_DB}`);
    mSqlclient.connect();
    const username = userInfo["username"];
    queryStr = `SELECT username from "User" where username = '${username}'`
    mSqlclient.query(queryStr).then(res => console.log(res));
}
module.exports ={
    verifyUser:verifyUser,
}