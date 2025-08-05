const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  price: { type: Number, required: true, min: 0 },
  category: String,
  availability: {
    type: String,
    enum: ["In Stock", "Out of Stock"],
    default: "In Stock",
  },
});

module.exports = mongoose.model("Product", productSchema);
