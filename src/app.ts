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
<<<<<<< HEAD
      "http://localhost:8083",
      "http://localhost:8080",
      "http://localhost:8081",
      "https://ecommerce-demo-client.vercel.app",
      "https://ecommerce-demo-beta.vercel.app",
=======
      "https://satinstore.shop",
      "https://dashboard.satinstore.shop",
>>>>>>> 9d34dd7 (Update creating admin in first lunch)
    ],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
  })
);

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json({ limit: "1mb" }));

app.use("/media", express.static(path.join(process.cwd(), "media")));

app.get("media/:imageName", (req, res, next) => {
  return res.sendFile(`${__dirname}/images/${req.params.imageName}`);
});

app.use("/healthcheck", (req, res) =>
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  })
);

// Identify customer lang
app.use((req, res, next) => {
  const lang = req.headers["accept-language"];
  console.log("lang");
  console.log(lang);
  res.locals = { lang };
  next();
});

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.globalErrorHandlingMiddleware);

export default app;
