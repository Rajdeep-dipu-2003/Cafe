const express = require("express");
const adminRouter = express.Router();

const authorizeAdmin = require("../middlewares/authorizeAdmin.js")

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

adminRouter.use(authorizeAdmin);

adminRouter.post("/add-prouduct", async(req, res) => {
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

adminRouter.get("/get-all-products/:category", async (req, res) => {
    try {        
        const allProductsOfCategory = await adminController.getAllProductsOfCategory(req, res);
        
        // TODO : Add pageing
        return res.status(200).json({ products : allProductsOfCategory});
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

        return res.status(200).json({ message: "New category created successfully."})
    }
    catch(e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Inernal Server Error" })
    }
})

