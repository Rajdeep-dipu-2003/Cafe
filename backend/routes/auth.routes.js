const express = require("express");
const jwt = require('jsonwebtoken');
const User = require("../models/User.model");
const HttpException = require("../models/http-exception")


const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = User.findOne({ email: email });

        if (!user) {
            throw new HttpException(400, "No user with the given email found.")
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new HttpException(401, "Invalid Credentials")
        }

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res
            .cookie("auth_token", token, {
                httpOnly: true,     // JS cannot access it
                secure: true,       // HTTPS only
                sameSite: "strict", // CSRF protection
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            .json({
                role: user.role
            });


        res.json({ message: "Logged in successfully" });

    } catch (e) {

    }


})