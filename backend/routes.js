const express = require("express")
const v1_router = express.Router();
const adminRouter = require("./routes/admin.route")
const sharedRouter = require("./routes/shared.routes")
const authRouter = require("./routes/auth.routes")
const userRouter = require("./routes/user.route")

// v1_router.use("/user", );
v1_router.use("/admin", adminRouter);
v1_router.use("/shared", sharedRouter);
v1_router.use("/auth", authRouter);
v1_router.use("/user", userRouter);

module.exports = v1_router

