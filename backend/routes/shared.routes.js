const express = require("express");
const sharedRouter = express.Router();
const SharedController = require("../controllers/shared.controller")
const sharedController = new SharedController();

const authenticateUser = require("../middlewares/authentication.middleware")

sharedRouter.get("/get-all-categories", async (req, res) => {
    try {
        await sharedController.getAllCategories(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
})

// To get all products of a specific category
sharedRouter.get("/get-all-products", async (req, res) => {
    try {
        await sharedController.getAllProductsOfCategory(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
});

sharedRouter.get("/get-popular-products", async (req, res) => {
    try {
        await sharedController.getPopularProducts(req, res);
    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
})

module.exports = sharedRouter;