const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const User = require("../models/User.model");
const HttpException = require("../models/http-exception");

const authRouter = express.Router();

authRouter.post("/signin", async (req, res) => {
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
            .status(200)
            .cookie("auth_token", token, {
                httpOnly: true,     
                secure: false,     
                sameSite: "none", // Change this to lax after deployment
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            .json({
                success: true,
                message: "Logged in successfully",
                role: user.role
            });

    } catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({ error: e?.message || "Internal Server Error" })
    }
})

authRouter.post("/signup", async (req, res) => {
    try {
        const {name, email, password, phoneNumber} = req.body;

        if (!name || !email || !password || !phoneNumber) {
            throw new HttpException(401, "Invaid of Incomplete Feilds");
        }

        if (phoneNumber.length != 10) {
            throw new HttpException(401, "Invalid Phone Number");
        }

        const existingUser = await User.findOne({
            $or: [
                { email },
                { phoneNumber }
            ]
        });

        if (existingUser) {
            throw new HttpException(409, "User with the email or phoneNumber already exists!!")
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name: name, 
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPassword
        });

        const token = jwt.sign(
                                {
                                    userId: newUser._id,
                                    role: newUser.role
                                }, 
                                process.env.JWT_SECRET,
                                { expiresIn: "7d" }
                            );

        res
            .status(200)
            .cookie("auth_token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "none",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            .json({ message: "User Signedin successfully!!"})

    }
    catch (e) {
        res
            .status(e?.errorCode || 500)
            .json({error: e?.message || "Internal Server Error."})
    }
})

module.exports = authRouter