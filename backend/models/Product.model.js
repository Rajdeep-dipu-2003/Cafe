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
            required: true,
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
        }
    },
    {
        timestamps: true
    }
)

// create a slug for the name before saving
productModel.pre("save", async function(next) {
    if (this.isModified("name")) {
        this.slug = this.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)/g, '');
    }
    next();
})

productModel.index({ name: 'text', description: 'text', tags: 'text'})

productModel.index({ category : 1})

const Product = mongoose.model("Product", productModel);

module.exports = Product