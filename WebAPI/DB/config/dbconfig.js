const  config = {
    user:  'username', // sql user
    password:  'password', //sql user password
    server:  'localhost', 
    database:  'CovidDeclarationDB', //database name
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  55892
  }
  
  module.exports = config;