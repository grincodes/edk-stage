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
  : EDEKEE_DB_TEST_DB_NAME;

const connection = mysql.createConnection({  
  host: EDEKEE_DB_HOST,  
  user: EDEKEE_DB_USER,  
  password: EDEKEE_DB_PASS 
});  

connection.connect((err) => {
  if (err) throw err;
  connection.query(`DROP SCHEMA ${dbName}`, (err, result) => {
    if (err && err.code === "ER_DB_DROP_EXISTS") {
      console.log("Already deleted");
      process.exit(0);
    }

    if (err) throw err;

    console.log('Deleted db');
    process.exit(0);
  })
})