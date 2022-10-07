const mysql = require('mysql2');  

require('dotenv').config();

const { 
  EDEKEE_DB_USER, 
  EDEKEE_DB_PASS, 
  EDEKEE_DB_HOST,
  EDEKEE_DB_DEV_DB_NAME,
  EDEKEE_DB_TEST_DB_NAME,
  NODE_ENV
} = process.env;

const dbName = NODE_ENV === "development" 
  ? EDEKEE_DB_DEV_DB_NAME 
  : EDEKEE_DB_TEST_DB_NAME

const connection = mysql.createConnection({  
  host: EDEKEE_DB_HOST,  
  user: EDEKEE_DB_USER,  
  password: EDEKEE_DB_PASS  
});  

connection.connect((err) => {
  if (err) throw err;
  connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
    
    if (err && err.code === "ER_DB_CREATE_EXISTS") {
      console.log('Db already created');
      process.exit(0);
    } 
    
    if (err) {
      throw err;
    }

    console.log('Created db');
    process.exit(0);
  })
})