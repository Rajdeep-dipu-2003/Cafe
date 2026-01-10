const categoryService = require("../services/category.service.js")
const productService = require("../services/product.service.js")

const HttpException = require("../models/http-exception.js")

class SharedController {
    async getAllCategories(req, res) {
        try {
            const allCategories = await categoryService.getAllCategories();

            res.status(200).json({
                message: "Successfully fetched all categories.",
                categories: allCategories
            })
        }
        catch (e) {
            const status = e?.errorCode || 500;
            const errorMessage = e?.message || "Inernal Server Error";

            throw new HttpException(status, errorMessage);
        }
    }

    async getAllProductsOfCategory(req, res) {
        try {
            const { categoryName } = req.query;
            const allProductsOfCategory = await productService.getAllProductsOfCategory(categoryName);

            return res.status(200).json({ products: allProductsOfCategory });
        }
        catch (e) {
            const status = e?.errorCode || 500;
            const errorMessage = e?.message || "Failed to fetch products of the given category.";

            throw new HttpException(status, errorMessage);
        }
    }

    async getPopularProducts(req, res) {
        try {
            const popularProducts = await productService.getPopularProducts();

            return res.status(200).json({ popularProducts : popularProducts });
        }
        catch (e) {
            const status = e?.errorCode || 500;
            const errorMessage = e?.message || "Failed to fetch products of the given category.";

            throw new HttpException(status, errorMessage);
        }
    }
};

module.exports = SharedController