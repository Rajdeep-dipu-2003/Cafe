const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "User"
        },
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
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        orders: [
            {
                order: {
                    type: mongoose.Schema.Types.ObjectId
                    ,
                    ref: 'Order',
                },
                
                orderItems: [
                    {
                        product: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "Product",
                            required: true,
                        },
                        quantity: {
                            type: Number,
                            min: [1, "Atleast add one product"],
                            required: true
                        },
                        price: {
                            type: Number,
                            required: true,
                            min: [0, "Price cannot be negative"]
                        },
                        image: {
                            type: String,
                            required: true
                        },
                        subtotal: {
                            type: Number,
                            required: true
                        }
                    }
                ],

                date: {
                    type: Date,
                    required: true
                }

            }
        ]
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function() {
    if (this.isModified(this.password)) {
        this.password = await bcrypt.hash(this.password, 10);
    }

})

const User = mongoose.model("User", userSchema);

module.exports = User

