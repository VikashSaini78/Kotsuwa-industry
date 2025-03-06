const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: String,
    pattern: String,
    country: String,
    style: String,
    size: String,
    material: String,
    minOrderQty: String,
    color: String,
    brand: String, 
    category: String, // Add category field
    file: String, // Store file path
});

const Product = model("Product", productSchema);

module.exports = Product;
