const express = require("express")
const v1_router = express.Router();
const adminRouter = require("./routes/admin.route")

// v1_router.use("/user", );
v1_router.use("/admin", adminRouter);

module.exports = v1_router

