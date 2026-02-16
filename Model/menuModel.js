const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  description: String,
  imgName: String,
  imageId: String,
  inStock: Number,
  isVeg: Number,
  rating: String,
  ratingCount: String,
  ratingCountV2: String,
  defaultPrice: Number,
  variants: Object
});


const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
