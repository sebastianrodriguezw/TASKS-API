

async function main() {
  //get the client
const mysql = require('mysql2/promise');

  connection = await mysql.createConnection({
    host: '207.244.244.208',
    user: 'admin_todo',
    password: 'smeXhuMzew8923AkEV2Uj',
    database: 'admin_todo'
  }) 

  connection.connect(function(error){
    if (error) throw error;
    console.log("Data base connected")
  })

  const xd = await connection.execute('SELECT * FROM tasks');

  console.log(xd[0])
 }

 main();

