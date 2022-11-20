// const { mSqlclient } = require('./connect');
const { Client } = require('pg');
const  {SQL_USER, SQL_PASSWORD, SQL_HOST, SQL_PORT, SQL_DB} = require('./config.js');
const { insertInto } = require("./utils");

const addNewUser = (userInfo,res) => { 
    let mSqlclient = new Client(`postgres://${SQL_USER}:${SQL_PASSWORD}@${SQL_HOST}:${SQL_PORT}/${SQL_DB}`);
    mSqlclient.connect();
    let columns = ["username","email","passwd","userstatus"];
    let values = [];
    let dbRes = {}
    values.push(`'${userInfo["username"]}'`);
    values.push(`'${userInfo["email"]}'`);
    values.push(`'${userInfo["password"]}'`);
    values.push(`false`);
    queryStr = insertInto("User",columns,values);
    mSqlclient.query(queryStr).then( dbres =>{
        console.log(dbres);
        res.send({
            status: 200,
            msg:dbres
        })
    }
    )
    .catch( err =>{
        res.send({
            status: 402,
            msg:err
        })

    }

    ).finally(()=>
    mSqlclient.end()
    );
    

}




module.exports = {
    addNewUser:addNewUser,

}