import { Router } from "express";

import {
  createProduct,
  getAllProducts,
  getProductsByCategory,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../controllers/ProductController.js";

import {
  requireAuth,
  checkUser,
  checkAdmin,
} from "../middlewares/authMiddleware.js";

const productRouter = Router();

productRouter.get("/products", checkAdmin, getAllProducts);

productRouter.get("/products/category/:category", getProductsByCategory);

productRouter.post("/products", checkAdmin, createProduct);

productRouter.get("/products/:id", getProductById);

productRouter.put("/products/:id", checkAdmin, updateProductById);

productRouter.delete("/products/:id", checkAdmin, deleteProductById);

export default productRouter;
