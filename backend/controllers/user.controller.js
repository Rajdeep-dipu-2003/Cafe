const HttpException = require("../models/http-exception");
const cartService = require("../services/cart.service")

class UserController {
    async addToCart(req, res) {
        try {
            const { productId, userId } = req.body;

            if (!productId) {
                throw new HttpException(400, "Invalid Product Id.")
            }

            if (!userId) {
                throw new HttpException(403, "Invalid User Id.")
            }


            await cartService.addToCart(productId, userId);

            return res.status(201).json({
                status: "Success"
            })

        }
        catch (e) {
            res
                .status(e?.errorCode || 500)
                .json({ error: e?.message || "Internal Server Error" })
        }
    }
}

module.exports = UserController