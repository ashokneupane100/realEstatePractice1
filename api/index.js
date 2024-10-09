import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000 !");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
