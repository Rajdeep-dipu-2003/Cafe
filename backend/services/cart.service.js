const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model");
const HttpException = require("../models/http-exception");

async function addToCart(productId, userId) {
    try {

        const productExists = await Product.findOne({ _id: productId });

        if (!productExists) {
            throw new HttpException(404, "Product not found.");
        }

        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            const cart = {
                user: userId,
                items: [
                    {
                        productId,
                        quantity: 1
                    }
                ]
            };

            await Cart.create(cart);
        }
        else {
            const product = cart.items?.find(item => item.productId.toString() === productId);

            if (product) {
                product.quantity += 1;
            }
            else {
                cart.items.push({ productId })
            }

            await cart.save();
        }
    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Error while adding product to cart.";
        throw new HttpException(status, message);
    }
}

async function removeFromCart(productId, userId) {
    try {
        const productExists = await Product.findOne({ _id: productId });

        if (!productExists) {
            throw new HttpException(404, "Product not found.");
        }

        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            throw new HttpException(404, "Cart is empty.")
        }
        else {
            const product = cart.items?.find(item => item.productId.toString() === productId);

            if (product) {
                product.quantity -= 1;
            }
            else {
                throw new HttpException(404, "Given Product is already removed!")
            }

            if (product.quantity === 0) {
                cart.items = cart.items.filter(item => 
                    item._id.toString() != product._id
                )
            }

            await cart.save();
        }
    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Error while deleting product from cart.";
        throw new HttpException(status, message);
    }
}

module.exports = {
    addToCart
}