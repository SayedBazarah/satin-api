import fs from "fs";
import path from "path";

export const saveFiles = (
  folder: string,
  ...files: (Express.Multer.File | undefined)[]
) => {
  files.forEach((file) => {
    if (file)
      fs.writeFileSync(
        path.resolve(process.cwd(), `media/${folder}/${file.filename}`),
        file.buffer
      );
  });
};

export const removeFiles = (...filePaths: (string | undefined)[]) => {
  filePaths.forEach((filePath) => {
    if (filePath) fs.unlinkSync(path.join(process.cwd(), filePath));
  });
};

export const createMediaFolders = () => {
  const folderPaths = [
    path.join(process.cwd(), "media"),
    path.join(process.cwd(), "media/images"),
    path.join(process.cwd(), "media/images/profiles"),
    path.join(process.cwd(), "media/images/products"),
  ];

  for (const folder of folderPaths) {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder);
  }
};
