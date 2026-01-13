// TODO : add authentication middleware

const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/user.controller")
const userController = new UserController();

userRouter.post("/add-to-cart", async (req, res) => {
    try {
        await userController.addToCart(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Internal Server Error" })
    }
})

module.exports = userRouter

// routes 
// - get all categories
// - get top 10 popular products
// - get all products of a specific category: 

// getRoutes.get("/get-all-categories", async (req, res) => {
//     try {
//         await 
//     }
//     catch(e) {
//         res
//             .status(e?.errorCode || 500)
//             .json({ error: e?.message || "Internal server error"})
//     }
// })

// getRoutes.get("/get-popular-products", async (req, res) => {

// })

// getRoutes.get("/get-all-products/:category", async (req, res) => {

// })
