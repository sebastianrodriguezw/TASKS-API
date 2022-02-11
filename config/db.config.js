//get the client
const mysql = require('mysql2');

  pool = mysql.createPool({
    host: '207.244.244.208',
    user: 'admin_todo',
    password: 'smeXhuMzew8923AkEV2Uj',
    database: 'admin_todo',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }) 

  pool.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Database connected successfully');
    connection.release();
  });
  
module.exports = pool;

