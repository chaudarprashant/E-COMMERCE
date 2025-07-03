import multer from "multer";

const storage = multer.memoryStorage(); // for storing photo in MongoDB as buffer
const upload = multer({ storage });

export default upload;
