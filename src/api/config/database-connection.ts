import mongoose from "mongoose";

export const dbConnection = (URI: string) => {
  return mongoose
    .connect(URI)
    .then((conn) => {
      console.log(`database connected in : ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Error while connect to Atlas MongoDB");
    });
};
