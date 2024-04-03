import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import api from "./api/routes";

import * as middlewares from "./api/middleware";
import path from "path";
import { checkEnvVariables } from "./api/config/env";
import {
  createFolderIfNotExists,
  profileImagePath,
  productImagePath,
} from "./api/utils/multer";

require("dotenv").config();

checkEnvVariables();
const app = express();

createFolderIfNotExists(profileImagePath);
createFolderIfNotExists(productImagePath);

app.use(
  cors({
    origin: "http://localhost:8083", // Replace with your allowed origin
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use("/media", express.static(path.join(process.cwd(), "media")));

app.use("/healthcheck", (req, res) =>
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  })
);

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.globalErrorHandlingMiddleware);

export default app;
