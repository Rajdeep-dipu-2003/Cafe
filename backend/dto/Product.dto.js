const HttpException = require("../models/http-exception")
const { z } = require("zod");

const productSchema = z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    category: z.string().min(1),
    imageUrl: z.string().min(1),
    description: z.string().min(1).max(500),
    tags: z.array(z.string()).optional()
});

class ProductDTO {
    constructor(data) {
        Object.assign(this, data);
    }

    static fromRequest(body) {
        try {
            const parsed = productSchema.parse(body);
            return ProductDTO(parsed)
        }
        catch(e) {
            throw new HttpException(400, "Incomplete or Invalid Products feilds")
        }
        
    }
};

module.exports = ProductDTO