const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function(next) {
    if (!this.isModified(this.password)) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User

