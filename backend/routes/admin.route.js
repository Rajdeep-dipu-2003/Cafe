const express = require("express");
const adminRouter = express.Router();

const authorizeAdmin = require("../middlewares/authorizeAdmin.js")

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

// adminRouter.use(authorizeAdmin);

adminRouter.post("/add-product", async(req, res) => {
    try {
        await adminController.addProduct(req, res);
    }
    catch(e) {
        res
        .status(e?.errorCode || 500) 
        .json({ error: e?.message || "Internal Server Error"})
    }
});

adminRouter.post("/delete-product", async(req, res) => {
    try {
        await adminController.deleteProduct(req, res);
    }
    catch(e) {
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
    catch(e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
}); 

adminRouter.post("/create-new-category", async (req, res) => {
    try {
        await adminController.createNewCategory(req, res);
    }
    catch(e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
})

module.exports = adminRouter;

