//get the client
const mysql = require('mysql2');

  connection = mysql.createConnection({
    host: '207.244.244.208',
    user: 'admin_todo',
    password: 'smeXhuMzew8923AkEV2Uj',
    database: 'admin_todo'
  }) 

  connection.connect(function(error){
    if (error) throw error;
    console.log("Data base connected")
  })

module.exports = connection;

