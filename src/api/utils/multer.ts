import multer from "multer";
import path from "path";
import fs from "fs";
// ---------------------------------------------------

// Function to create folder if it doesn't exist
export const createFolderIfNotExists = (folder: string) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

// ---------------------------------------------------

export const profileImagePath = path.join(process.cwd(), "media/employee");
export const productImagePath = path.join(process.cwd(), "media/products");

// ---------------------------------------------------
const employeeStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "media/employee");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const productStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    createFolderIfNotExists(productImagePath);
    cb(null, "media/products");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const uploadEmployeeResourses = multer({ storage: employeeStorage });
export const uploadProductsResourses = multer({ storage: productStorage });
