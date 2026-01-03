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
            lowercase: true,
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
)

categorySchema.pre("save", async function () {
    if (this.isModified('name')) {
        this.slug = this.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
});

categorySchema.virtual("productCount", {
    ref: "Product",
    localField: '_id',
    foreignField: 'category',
    count: true
})

categorySchema.index({ name: "text" });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category