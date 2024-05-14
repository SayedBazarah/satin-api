import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import api from "./api/routes";

import * as middlewares from "./api/middleware";
import path from "path";
import { checkEnvVariables } from "./api/config/env";

require("dotenv").config();

checkEnvVariables();

const app = express();

app.use(
  cors({
    origin: [
      "https://satinstore.shop",
      "https://dashboard.satinstore.shop",
    ],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json({ limit: "1mb" }));

app.use("/media", express.static(path.join(process.cwd(), "media")));

app.get("media/:imageName", (req, res, next) => {
  res.set("Cross-Origin-Resource-Policy", "same-origin");
  return res.sendFile(`${__dirname}/images/${req.params.imageName}`);
});

app.use("/healthcheck", (req, res) =>
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  })
);

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.globalErrorHandlingMiddleware);

export default app;
