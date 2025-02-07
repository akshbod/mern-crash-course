import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";
const router = express.Router();

// Get Products
router.get('/', getProducts)

// Add Product
router.post('/', createProduct);

// Update product
router.put('/:id', updateProduct)

// Delete product
router.delete('/:id', deleteProduct);

export default router;