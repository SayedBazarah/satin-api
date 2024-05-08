import { config } from "dotenv";

config({ path: ".env" });

export const env = {
  port: +(process.env.DEV_PORT || 3000) as number,
  environment: process.env.NODE_ENV?.trim() || "development",
  vapidPublicKey: process.env.VAPID_PUBLICKEY as string,
  vapidPrivateKey: process.env.VAPID_PRIVATEKEY as string,
  frontUrl: process.env.FRONT_URL as string,
  dashboardUrl: process.env.DASHBOARD_URL as string,
  apiUrl: process.env.API_URL as string,
  mongoDb: {
    url: process.env.MONGO_URI as string,
  },
  bcrypt: {
    salt: +(process.env.BCRYPT_SALT || 1) as number,
    paper: process.env.BCRYPT_PAPER,
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
  },
  mail: {
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    port: +(process.env.MAIL_PORT || 1) as number,
    driver: process.env.MAIL_DRIVER as string,
    user: process.env.MAIL_USER as string,
    pass: process.env.MAIL_PASS as string,
  },
  redis: {
    url: process.env.REDIS_URI as string,
  },
  session: {
    allowUseStorage: process.env.ALLOW_USE_SESSION_STORAGE === "true",
  },
};

export const checkEnvVariables = () => {
  if (!env.mongoDb.url) throw new Error("env:MONGO_URI must be defined");
  if (!env.bcrypt.salt) throw new Error("env:BCRYPT_SALT must be defined");
  if (!Number.isInteger(env.bcrypt.salt))
    throw new Error("env:BCRYPT_SALT must be integer");
  if (!env.jwt.secret) throw new Error("env:JWT_SECRET must be defined");
  if (!env.mail.port) throw new Error("env:MAIL_PORT must be defined");
  if (!Number.isInteger(env.mail.port))
    throw new Error("env:MAIL_PORT must be integer");
  if (!env.mail.driver) throw new Error("env:MAIL_DRIVER must be defined");
  if (!env.mail.user) throw new Error("env:MAIL_USER must be defined");
  if (!env.mail.pass) throw new Error("env:MAIL_PASS must be defined");
  if (!env.frontUrl) throw new Error("env:FRONT_URL must be defined");
  if (!env.apiUrl) throw new Error("env:API_URL must be defined");
  if (env.session.allowUseStorage && !env.redis.url)
    throw new Error("env:REDIS_URI must be defined");
};
