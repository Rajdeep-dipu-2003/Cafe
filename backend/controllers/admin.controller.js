const ProductDTO = require("../dto/Product.dto.js");
const productService = require();

class AdminController {
    async addProduct(req, res) {
        try {
            const productDto = ProductDTO.fromRequest(req.body);
            const newProduct = await productService.createNewProduct(productDto);

            return res.status(201).json({
                success: true,
                data: product,
            });
        }
        catch (e) {
            res
                .status(e?.errorCode || 500)
                .json({ error: e?.message || "Internal Server Error" })
        }

    }
}

module.exports = AdminController