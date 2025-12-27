const HttpException = require("../models/http-exception");
const Product = require("../models/Product.model")

async function createNewProduct(newProduct) {

    try {
        const prouduct = await Product.find({ name: newProduct.name });

        if (prouduct) {
            throw new HttpException(400, "Product with the same name already exists");
        }

        const newProductCreated = await Product.create(newProduct)

        return newProductCreated;

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