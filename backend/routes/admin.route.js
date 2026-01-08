const express = require("express");
const adminRouter = express.Router();

const authorizeAdmin = require("../middlewares/authorization.middleware")
const authenticateUser = require("../middlewares/authentication.middleware")

const AdminController = require("../controllers/admin.controller");
const Order = require("../models/Order.model");
const adminController = new AdminController();

// adminRouter.use(authenticateUser)
// adminRouter.use(authorizeAdmin);

adminRouter.post("/add-product", async (req, res) => {
    try {
        await adminController.addProduct(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Internal Server Error" })
    }
});

adminRouter.post("/delete-product", async (req, res) => {
    try {
        await adminController.deleteProduct(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: "Inernal Server Error" })
    }
});

// To get all products of a specific category
adminRouter.get("/get-all-products", async (req, res) => {
    try {
        await adminController.getAllProductsOfCategory(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
});

adminRouter.post("/create-new-category", async (req, res) => {
    try {
        await adminController.createNewCategory(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
})

adminRouter.get("/get-all-order", async (req, res) => {
    try {
        await adminController.getAllOrder(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
})

// adminRouter.post("/create-order", async (req, res) => {
//     try {
//         await Order.create({
//             user: req.body.user,
//             orderItems: [],
//             totalPrice: req.body.totalPrice,
//             paymentMethod: req.body.paymentMethod,
//             paymentResult: {
//                 transactionId: req.body.paymentResult.transactionId,
//                 status: req.body.paymentResult.status,
//                 updateTime: new Date(req.body.paymentResult.updateTime),
//             },
//             orderStatus: req.body.orderStatus,
//             orderNumber: req.body.orderNumber,
//             orderDate: new Date(req.body.orderDate),
//         })

//         res
//             .status(200)
//             .json({ message: "Orders created successfully !" })
//     }
//     catch (e) {
//         res
//             .status(e?.errorCode || 500)
//             .json({ error: e?.message || "Inernal Server Error" })
//     }
// });

module.exports = adminRouter;

