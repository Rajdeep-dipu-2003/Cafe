const mongoose = require("mongoose")

const productModel = new mongoose.Schema(
    {   
        name: {
            type: String,
            required: true,
            unique: true
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true
        },
        tags: [ 
            {
                type: String,
                trim: true
            }
        ],
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
        },
        price: {
            type: Number,
            required: true,
            min: [0, "Price cannot be negative"]
        }, 
        orderCount: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

// create a slug for the name before saving
productModel.pre("save", function() {
    if (this.isModified("name")) {
        this.slug = this.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)/g, '');
    }
})

productModel.index({ name: 'text', description: 'text', tags: 'text'})

productModel.index({ category : 1})

const Product = mongoose.model("Product", productModel);

module.exports = Product