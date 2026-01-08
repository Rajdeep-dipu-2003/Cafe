const cloudinary = require('cloudinary').v2;
const HttpException = require("../models/http-exception")

function configureCloudinary() {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET
        });

        console.log("Cloudinary configured Successfully");
    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Failed to configure cloudinary";
        throw new HttpException(status, message);
    }
}


async function uploadToCloudinary(file) {
    try {
        const uploadResult = await cloudinary.uploader.upload(
            `data:${file.mimetype};base64,${file.buffer.toString("base64")}`
        );

        return uploadResult.secure_url;
    }
    catch (e) {
        const status = e?.errorCode || 500;
        const message = e?.message || "Error while uploading to cloudinary.";
        throw new HttpException(status, message);
    }
}

module.exports = {
    uploadToCloudinary,
    configureCloudinary
}