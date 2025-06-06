const Category = require('../../models/Category');

const categoriesController = {
    allCategories: async (req, res, next) => {
        try {
            const allCategories = await Category.findAll()

              if (!allCategories) {
                return res.status(404).json({
                    success: false,
                    msg: "Categorías no encontradas"
                });
            }

            res.status(200).json({
                success: true,
                msg: "Todas las categorias fueron envidas",
                data: allCategories
            })
        } catch (error) {
            console.log(error.message)
            next(error);
        }
    },
    getCategoryById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await Category.findByPk(id);

            if (!category) {
                return res.status(404).json({
                    success: false,
                    msg: "Categoría no encontrada"
                });
            }

            res.status(200).json({
                success: true,
                msg: "Categoría encontrada",
                data: category
            });
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    createCategory: async (req, res, next) => {
        try {
            const { name, img } = req.body;
            const newCategory = await Category.create({ name, img });

            res.status(200).json({
                success: true,
                msg: "Categoría creada con éxito",
                data: newCategory
            });
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    updateCategory: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, img } = req.body;

            const category = await Category.findByPk(id);
            if (!category) {
                return res.status(404).json({
                    success: false,
                    msg: "Categoría no encontrada"
                });
            }

            await category.update({ name, img });

            res.status(200).json({
                success: true,
                msg: "Categoría actualizada correctamente",
                data: category
            });
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    deleteCategory: async (req, res, next) => {
        try {
            const { id } = req.params;

            const category = await Category.findByPk(id);
            if (!category) {
                return res.status(404).json({
                    success: false,
                    msg: "Categoría no encontrada"
                });
            }

            await category.destroy();

            res.status(200).json({
                success: true,
                msg: "Categoría eliminada con éxito"
            });
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    }  
}

module.exports = categoriesController;

