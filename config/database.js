import mysql from "mysql2";

const pool = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "temam",
  password: "temam",
  database: "loan",
  connectionLimit: 10,
});

export default pool;
