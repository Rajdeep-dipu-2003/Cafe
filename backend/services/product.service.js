const Category = require("../models/Category.model");
const HttpException = require("../models/http-exception");
const Product = require("../models/Product.model")

async function createNewProduct(productDto) {

    try {
        const prouduct = await Product.findOne({ name: productDto.name });

        if (prouduct) {
            throw new HttpException(400, "Product with the same name already exists");
        }

        const category = await Category.findOne({ _id: productDto.categoryId });

        if (!category) {
            throw new HttpException(400, "No relevant category found.");
        }

        return Product.create({
            name: productDto.name,
            price: productDto.price,
            category: category._id,
            imageUrl: productDto.imageUrl,
            description: productDto.description,
            tags: productDto.tags
        });

    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Error while product creation.";
        throw new HttpException(status, message);
    }
}

// TODO : Replace category name with mongoose document id instead since name might change but category wont
async function getAllProductsOfCategory(categoryName) {
    try {
        const category = await Category.findOne({ name: categoryName });

        if (!category) {
            throw new HttpException(400, "No relevant category found.");
        }

        const products = await Product.find({ category: category._id });

        return products;
    } catch (e) {
        const status = e?.errorCode || 500;
        const errorMessage = e?.message || "Failed to fetch products of the given category.";

        throw new HttpException(status, errorMessage);
    }
}

async function deleteProduct(productId) {
    try {
        if (productId === null || productId === undefined) {
            throw new HttpException(400, "Invalid product Id.") 
        }

        const result = await Product.deleteOne({ _id : productId});
        
        if (result.deletedCount === 0) {
            throw new HttpException(400, "Give Product might be already deleted.")
        }
    }
    catch (e) {
        const status = e?.errorCode || 500;
        const errorMessage = e?.message || "Failed to fetch products of the given category.";

        throw new HttpException(status, errorMessage);
    }
}

module.exports = {
    createNewProduct,
    getAllProductsOfCategory,
    deleteProduct
}