import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: ratingSchema,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
