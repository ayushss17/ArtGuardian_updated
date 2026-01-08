import express from "express";
import defaultData from "../default.js";
import wallconnec from "../wallconnec.js";
import { getProducts } from "../controller/prod_control.js";
import changeAdd from "../changeAdd.js";
import { getSelected } from "../getSelected.js";
import { validateArtwork, validateWallet, validateProductQuery, sanitizeRequest } from "../middleware/validation.js";

const router = express.Router();

// Apply sanitization to all routes
router.use(sanitizeRequest);

// Artwork listing endpoint with validation
router.post('/insert', validateArtwork, defaultData);

// Get products with validation
router.post('/products', validateProductQuery, getProducts);

// Wallet connection endpoint with validation
router.post('/wallet', validateWallet, wallconnec);

// Buy artwork endpoint with validation
router.post('/buy', validateWallet, changeAdd);

// Get user products with validation
router.post('/getUserProd', validateWallet, getSelected);

export default router;  
