const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")
const User = require("../models/User.model");


dotenv.config();

async function createAdmin() {

    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);

    const adminExists = await User.findOne({ role: "admin" });

    if (adminExists) {
        console.log("Admin Exists.");
        return;
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);

    await User.create({
        "name": "Rajdeep",
        "email": process.env.ADMIN_EMAIL,
        "password": hashedPassword,
        "phoneNumber": process.env.ADMIN_PHONE_NUMBER,
        "role": "admin"
    })

    console.log("Admin Created Successfully")
}

createAdmin();