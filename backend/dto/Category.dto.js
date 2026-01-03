const { z } = require("zod");
const HttpException = require("../models/http-exception.js")

const categorySchema = z.object({
    name: z.string().min(1),
    imageUrl: z.string().min(1)
});

class CategoryDto {
    constructor(data) {
        Object.assign(this, data);
    }

    static fromRequest(body) {
        try {
            const parsed = categorySchema.parse(body);
            return new CategoryDto(parsed);
        }
        catch(e) {
            throw new HttpException(400, "Invalid or incomplete category feild.");
        }
    }
}

module.exports = CategoryDto