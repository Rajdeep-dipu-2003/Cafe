const express = require("express");
const adminRouter = express.Router();

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

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

