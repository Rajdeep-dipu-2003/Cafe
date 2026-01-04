const ProductDTO = require("../dto/Product.dto.js");
const CategoryDto = require("../dto/Category.dto.js");
const HttpException = require("../models/http-exception.js");

const Product = require("../models/Product.model.js");
const Category = require("../models/Category.model.js")
const productService = require("../services/product.service.js");

class AdminController {
    async addProduct(req, res) {
        try {
            const productDto = ProductDTO.fromRequest(req.body);
            const newProduct = await productService.createNewProduct(productDto);

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
            const productDto = ProductDTO.fromRequest(req.body);
            // should we delete by id or name is ok ?
            Product.deleteOne({ name: productDto.name })
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
            const { category } = req.params;
            const products = Product.find({ category: category });
            
            return products;
        }
        catch(e) {
            throw new HttpException(500, "Failed To fetch products of the given category.")
        }
    }

    async createNewCategory(req, res) {
        try {
            const categoryDto = CategoryDto.fromRequest(req.body);

            const categoryAlreadyExists = await Category.findOne({ name: categoryDto.name });

            if (categoryAlreadyExists) {
                throw new HttpException(409, "The category already exists.");
            }

            await Category.create(categoryDto);

            return;
        }
        catch(e) {

            // TODO : add centrilized error middleware

            const status = e?.errorCode || 500;
            const errorMessage = e?.message || "Inernal Server Error";

            throw new HttpException(status, errorMessage);
        }
    }
}

module.exports = AdminController