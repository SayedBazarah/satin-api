import mongoose from "mongoose";
import { env } from "../config/env";
export async function OpenMongoDBConnection() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(env.mongoDb.url as string, {})
    .then(() => {
      console.log("Connected to MonogoDb");
    })
    .catch((err: Error) => {
      console.log(err);
      throw new Error("Error while connect to Atlas MongoDB");
    });
}
