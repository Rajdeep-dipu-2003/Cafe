const Order = require("../models/Order.model");

async function getAllOrder() {
    try {
        const allOrders = await Order.find({});
        return allOrders;
    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Error while category creation.";
        throw new HttpException(status, message);
    }
}
module.exports = {
    getAllOrder
}