import express from "express";
import * as routes from "./routes";
import pool from "./configs/postgres";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes.v1.test);

// Start Server
const PORT = 3000;
app.listen(PORT, async () => {
  await pool.connect();
  console.log("PostgreSQL에 성공적으로 연결되었습니다!");

  console.log(`Server is running on http://localhost:${PORT}`);
});
