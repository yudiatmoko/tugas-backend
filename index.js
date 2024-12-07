import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./database/db.js";
import bodyParser from "body-parser";
import notes from "./routes/noteRoute.js";

dotenv.config();
const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", notes);

app.listen(port, async () => {
  await testConnection();
  console.log(`Running at ${port}`);
});
