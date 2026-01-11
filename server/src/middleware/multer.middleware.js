import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure upload directories exist
const ensureDirExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadDir;
    if (file.mimetype.startsWith("image")) {
      uploadDir = path.join(process.cwd(), "uploads", "images");
    } else if (file.mimetype === "application/pdf") {
      uploadDir = path.join(process.cwd(), "uploads", "pdfs");
    } else {
      return cb(new Error("Unsupported file type"), null);
    }
    ensureDirExists(uploadDir);
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

// File filter for images
const fileFilterImage = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed for this upload"), false);
  }
};

// File filter for PDFs
const fileFilterPdf = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed for this upload"), false);
  }
};

// Multer instance for images (under 100KB)
export const uploadImage = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 // 100KB
  },
  fileFilter: fileFilterImage
});

// Multer instance for PDFs (under 100MB)
export const uploadPdf = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024 // 100MB
  },
  fileFilter: fileFilterPdf
});
