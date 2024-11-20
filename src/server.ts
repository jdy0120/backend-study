import { configDotenv } from "./configs/dotenv.config";
import pool from "./configs/postgres";
configDotenv();

const runServer = async () => {
  const app = (await import("./configs/express.config")).default;

  // Start Server
  const PORT = process.env.PORT;
  app.listen(PORT, async () => {
    await pool.connect();
    console.log("PostgreSQL에 성공적으로 연결되었습니다!");

    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

runServer();
