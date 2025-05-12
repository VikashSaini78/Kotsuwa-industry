// const express = require("express");
// const apiRoutes = require("./routes/Api");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const fs = require("fs");
// require("dotenv").config();

// const server = express();

// // Create uploads folder if it doesn't exist
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/kotsuwa_industary", {})
//     .then(() => console.log("✅ Database successfully connected"))
//     .catch((error) => console.error("❌ Database connection error:", error.message));

// // Middleware
// server.use(cors());
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

// // Serve uploaded files statically
// server.use("/uploads", express.static(uploadDir));

// // Import and use routes

// server.use("/api", apiRoutes);

// const PORT = process.env.PORT || 5003;
// server.listen(PORT, () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });
const express = require("express");
const apiRoutes = require("./routes/Api");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const server = express();

// Import Product model (replace with your actual model file)
const Product = require("./Models/Product");

// Create uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/kotsuwa_industary", {})
    .then(() => console.log("✅ Database successfully connected"))
    .catch((error) => console.error("❌ Database connection error:", error.message));

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
server.use("/uploads", express.static(uploadDir));

// Handle DELETE request for product deletion
server.delete('/api/products/:id', (req, res) => {
    const { id } = req.params; // Get the ID from the URL
    Product.findByIdAndDelete(id)
        .then(() => {
            res.json({ success: true });
        })
        .catch((err) => {
            console.error("Error deleting product:", err);
            res.status(500).json({ success: false, message: 'Error deleting the product' });
        });
});

// Import and use routes
server.use("/api", apiRoutes);

const PORT = process.env.PORT || 5003;
server.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
