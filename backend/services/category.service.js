const Category = require("../models/Category.model");
const HttpException = require("../models/http-exception");

async function createNewCategory(categoryDto) {

    try {
        const categoryAlreadyExists = await Category.findOne({ name: categoryDto.name });

        if (categoryAlreadyExists) {
            throw new HttpException(409, "The category already exists.");
        }

        await Category.create(categoryDto);

        return;
    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Error while category creation.";
        throw new HttpException(status, message);
    }
}

module.exports = {
    createNewCategory
}