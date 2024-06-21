import multer from "multer";

const storage = multer.memoryStorage(); // storing file in memory as Buffer objects
const upload = multer({ storage });

export default upload;
