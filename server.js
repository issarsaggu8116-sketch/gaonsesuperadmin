import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import masterRoutes from "./routes/masterRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1/master", masterRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Master Server running on port ${process.env.PORT}`);
});