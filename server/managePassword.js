const bcrypt = require('bcrypt');
const SALT_VALUE = 7;


async function hashPassword(passwordText){
     let hashedPassword = await bcrypt.hash(passwordText,SALT_VALUE);
      console.log(hashedPassword);
      return hashedPassword;
 }

async function comparePassword(passwordText,passwordHash){
    let compareRes= await bcrypt.compare(passwordText,passwordHash);
    return compareRes;
}

module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword
}

