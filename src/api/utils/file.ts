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
    if (filePath)
      try {
        fs.unlinkSync(path.join(process.cwd(), filePath));
      } catch (error) {
        console.error(error);
      }
  });
};

export const removeFolders = (...filePaths: (string | undefined)[]) => {
  filePaths.forEach((filePath) => {
    if (filePath)
      try {
        fs.rmdirSync(path.join(process.cwd(), filePath));
      } catch (error) {
        console.error(error);
      }
  });
};

export const createMediaFolders = () => {
  const folderPaths = [
    path.join(process.cwd(), "media"),
    path.join(process.cwd(), "media/images"),
    path.join(process.cwd(), "media/images/profiles"),
    path.join(process.cwd(), "media/images/products"),
    path.join(process.cwd(), "media/images/categories"),
  ];

  for (const folder of folderPaths) {
    if (!fs.existsSync(folder)) fs.mkdirSync(folder);
  }
};

export const createProductFolder = (slug: string) => {
  const filePath = path.join(process.cwd(), `media/images/products/${slug}`);
  if (!fs.existsSync(filePath)) fs.mkdirSync(filePath);
};
