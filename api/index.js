
import express from "express"
import productRoutes from "./routes/product.js";
import cors from "cors"
import multer from "multer"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/product",productRoutes)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "../Client/public/uploads");
     cb(null, "../Client/src/Images");
  },
  
  filename: function (req, file, cb) {
    // cb(null, Date.now() + file.originalname);
    cb(null, Date.now() + file.originalname);
  },
});



const upload = multer({ storage });

app.post("/api/imageUpload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.post("/api/imageUploadTwo", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.post("/api/imageUploadThree", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.post("/api/imageUploadFour", upload.single("file"), function (req, res) {
  const file= req.file;
  res.status(200).json(file.filename);
});

app.post("/api/pdfUpload", upload.single("file"), function (req, res) {
  const file= req.file;
  res.status(200).json(file.filename);
});

app.listen(6000, () => {
    console.log("Connected!");
  });