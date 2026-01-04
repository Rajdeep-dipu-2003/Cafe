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

module.exports = {
    createNewProduct,
}