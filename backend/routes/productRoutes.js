import express from 'express';
import {
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct,
    createProductReview,
    getTopProducts
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id')
    .get(getProduct)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)
router.route('/:id/reviews').post(protect, createProductReview)

export default router;