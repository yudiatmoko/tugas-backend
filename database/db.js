import mysql2 from "mysql2/promise";

import dotenv from "dotenv";
dotenv.config();

const db = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function testConnection() {
  try {
    await db.getConnection();
    console.log("Database connection success");
  } catch (error) {
    console.log("Database connection failed", error);
  }
}

async function query(command, values) {
  try {
    const [rows] = await db.query(command, values ?? []);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export { testConnection, query };
