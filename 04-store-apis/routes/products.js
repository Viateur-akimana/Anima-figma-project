const express = require("express");
const router = express.Router();
const {getAllProducts,createProduct,getAllProductsStatic} =require("../controllers/products");


router.get("/",getAllProducts);
router.get("/static",getAllProductsStatic);
router.post("/",createProduct);

module.exports = router;