var  config = require('../config/dbconfig');
const  sql = require('mssql');

async  function  addUser(Declaration) {
    try {
      let  pool = await  sql.connect(config);
      let  objInsertUser= await  pool.request()
      //.input('UserId', sql.Int, Declaration.UserId)
      .input('Name', sql.NVarChar, Declaration.Name)
      .input('Tempature', sql.Int, Declaration.Tempature)
      .input('ContactedAnyone', sql.NVarChar, Declaration.ContactedAnyone)
      .input('Symptoms', sql.NVarChar, Declaration.Symptoms)
      .execute('InsertUsers');
      return  objInsertUser.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  
module.exports = {
    addUser:  addUser
  }
