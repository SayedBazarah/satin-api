import { dbConnection } from "./api/config/database-connection";
import { env } from "./api/config/env";
import { createMediaFolders } from "./api/utils/file";
import app from "./app";
import { createServer } from "http";

const httpServer = createServer(app);

dbConnection(env.mongoDb.url);

const port = env.port || 3000;
httpServer.listen(port, () => {
  createMediaFolders();
  console.log(`Listening: http://localhost:${port}`);
});
