const Cart = require("Cart");

async function addToCart(productId, userId) {
    try {
        const cart = await Cart.findOne({user : userId});
        
        const product = cart.items.find(item => item.productId.toString() === productId);

        if (product) {
            product.quantity += 1;
        }
        else {
            cart.items.push({ productId })
        }

        await cart.save();
0    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Error while category creation.";
        throw new HttpException(status, message);
    }
}

module.exports = {
    addToCart
}