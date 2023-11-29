import mysql  from "mysql2";


const pool = mysql.createPool({
   host: 'localhost',
  user: 'root',
  password: 'Amma@1982',
  database: 'railwaydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
try{
   pool.connect;
   console.log('connected')
}catch(err){
   console.log(err)
}

try{
   pool.query("CREATE TABLE user2(UserName VARCHAR(255),password VARCHAR(255))");
}catch(err){
   console.log(err)
}
  export default pool;