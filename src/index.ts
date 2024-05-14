import webpush from "web-push";
import { dbConnection } from "./api/config/database-connection";
import { env } from "./api/config/env";
import { createMediaFolders } from "./api/utils/file";
import app from "./app";
import { createServer } from "http";
import { OpenMongoDBConnection } from "./api/utils/mongoDb";
import { CreateAdmin } from "./api/controllers/employees/create-admin";

const httpServer = createServer(app);

webpush.setVapidDetails(
  "mailto:sayed@multisystem-eg.com",
  env.vapidPublicKey,
  env.vapidPrivateKey
);

OpenMongoDBConnection();
CreateAdmin();
const port = env.port || 3000;
httpServer.listen(port, () => {
  createMediaFolders();
  console.log(`Listening: http://localhost:${port}`);
});
