const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a category name"], 
            trim: true,
            maxlength: [50, "Category name cannot exceed 50 characters"]
        },
        slug: {
            type: String,
            required: true,
            lowercase: true,
        },
        image: {
            type: String, 
            required: true
        }
    },
    {
        timestamps: true
    }
)

categorySchema.pre("save", async function(next) {
    if (this.isModified('name')) {
        this.slug = this.name  
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)/g, '')
    }
    next()
})

categorySchema.virtual("productCount", {
    ref: "Product",
    localField: '_id',
    foreignField: 'category',
    count: true
})

const Category = mongoose.model("Category", categorySchema);

module.exports = Category