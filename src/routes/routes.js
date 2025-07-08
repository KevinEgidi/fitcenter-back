const { Router } = require("express");
const { allCategories, getCategoryById, updateCategory, createCategory, deleteCategory } = require("../controllers/categories/categories.controllers");
const router = Router();

router.get('/categories', allCategories);
router.get('/category/:id', getCategoryById);
router.put('/category', updateCategory);
router.post('/categoryPROBANDO', createCategory);
router.delete('/category', deleteCategory);

module.exports = router;