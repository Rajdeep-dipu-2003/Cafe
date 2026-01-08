const ProductDTO = require("../dto/Product.dto.js");
const CategoryDto = require("../dto/Category.dto.js");
const HttpException = require("../models/http-exception.js");

const Product = require("../models/Product.model.js");
const Category = require("../models/Category.model.js")
const productService = require("../services/product.service.js");
const categoryService = require("../services/category.service.js")
const orderService = require("../services/order.service.js")
const cloudinaryService = require("../services/cloudinary.service.js")

class AdminController {
    async addProduct(req, res) {
        try {
            const productDto = ProductDTO.fromRequest(req.body);
            await productService.createNewProduct(productDto);

            return res.status(201).json({
                success: true,
                message: "New Product Created Successfully!"
            });
        }
        catch (e) {
            res
                .status(e?.errorCode || 500)
                .json({ error: e?.message || "Internal Server Error" })
        }
    }

    async deleteProduct(req, res) {
        try {
            const { productId } = req.body;
            await productService.deleteProduct(productId);

            return res.status(201).json({
                success: true,
                message: "Product Deleted Successfully!"
            });
        }
        catch (e) {
            // should we use res or throw ? 
            res
                .status(e?.errorCode || 500)
                .json({ error: e?.message || "Internal Server Error" })
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

    async createNewCategory(req, res) {
        try {
            const categoryDto = CategoryDto.fromRequest(req.body);


            if (!req.file) {
                return res.status(400).json({ message: "Category image is required" });
            }

            const imageUrl = await cloudinaryService.uploadToCloudinary(req.file);

            await categoryService.createNewCategory({...categoryDto, imageUrl});

            return res.status(200).json({ message: "New category created successfully." })
        }
        catch (e) {

            // TODO : add centrilized error middleware

            const status = e?.errorCode || 500;
            const errorMessage = e?.message || "Inernal Server Error";

            throw new HttpException(status, errorMessage);
        }
    }

    async getAllOrder(req, res) {
        try {
            const allOrders = await orderService.getAllOrder();

            res.status(200).json({
                message: "Successfully fetched all orders.",
                orders: allOrders
            })
        }
        catch (e) {
            const status = e?.errorCode || 500;
            const errorMessage = e?.message || "Inernal Server Error";

            throw new HttpException(status, errorMessage);
        }
    }

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
}

module.exports = AdminController