const mongoose = require("mongoose")

const productModel = new mongoose.Schema(
    {   
        name: {
            type: String,
            required: true,
            unique: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        imageUrl: {
            type: String, 
            required: true
        },
        description: {
            type: String,
            requied: true,
            maxlength: [5000, "Description cannot exceed 500 characters."]
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productModel);

module.exports = Product