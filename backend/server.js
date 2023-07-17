import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import morgan from "morgan";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import xlsx from "xlsx";
import { existsSync } from "fs";
import Product from "./models/productModel.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const __dirname = path.resolve();
const fileName = __dirname + "/backend/excel.xlsx";

app.get("/", (req, res) => {
  res.send("API is on running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is on running in ${process.env.NODE_ENV} on port ${PORT}`.yellow
      .bold
  )
);
