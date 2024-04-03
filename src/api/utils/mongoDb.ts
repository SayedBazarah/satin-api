import mongoose from "mongoose";
export async function OpenMongoDBConnection() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_URL as string, {})
    .then(() => {
      console.log("Connected to MonogoDb");
    })
    .catch((err: Error) => {
      console.log(err);
      throw new Error("Error while connect to Atlas MongoDB");
    });
}
