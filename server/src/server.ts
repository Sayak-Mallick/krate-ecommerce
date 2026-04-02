import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
