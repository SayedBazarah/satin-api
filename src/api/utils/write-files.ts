import fs from "fs";
import path from "path";

export function storeBase64File(
  base64String: string,
  directory: string,
  filename: string
): void {
  // Remove the data prefix from the base64 string
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");

  // Create a buffer from the base64 string
  const buffer = Buffer.from(base64Data, "base64");
  console.log("buffer");
  console.log(buffer);
  // Write the buffer to a file in the specified directory
  const filePath = path.join(directory, filename);

  fs.writeFile(filePath, buffer, (err) => {
    if (err) {
      console.error("Error saving file:", err);
    } else {
      console.log("File saved successfully:", filePath);
    }
  });
}
