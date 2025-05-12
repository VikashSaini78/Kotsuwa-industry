const Product = require("../Models/Product");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save files in uploads/ directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

// Multer upload middleware
const upload = multer({ storage: storage }).single("file");

exports.productController = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "File upload error", error: err.message });
    }

    try {
      const { name, pattern, country, style, size, material, minOrderQty, color, brand,category,newprice,oldprice } = req.body;
      const filePath = req.file ? `/uploads/${req.file.filename}` : null; // Store relative path

      // Create a new product with file path
      const newProduct = new Product({
        name,
        pattern,
        country,
        style,
        size,
        material,
        minOrderQty,
        color,
        brand,
        category, // Save category
        oldprice,
        newprice,
        file: filePath,
      });

      // Save to database
      await newProduct.save();

      res.status(201).json({ message: "Product saved successfully!", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: "Error saving product", error: error.message });
    }
  });
};


// get data

exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find(); // Fetch all products from MongoDB
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error: error.message });
    }
  };