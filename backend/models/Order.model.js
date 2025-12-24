const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.Schema.ObjectId,
            ref: 'User',
            required: true,
            unique: true,
        },

        orderItems: [
            {
                product: {
                    type: mongoose.Types.Schema.ObjectId,
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

        totalPrice: {
            type: Number,
            required: true,
        },

        paymentMethod: {
            type: String,
            required: true,
            enum: ["Card", "Cash", "UPI"],
            default: "UPI"
        },

        paymentResult: {
            transactionId: {
                type: String
            },
            status: {
                type: "String",
                enum: ["Pending", "Success"],
                required: true
            },
            updateTime: {
                type: Date
            }
        },

        orderStaus: {
            type: String, 
            requied: true,
            enum: ["Pending", "Preparing", "Ready", "Complete"]
        },

        orderNumber: {
            type: String,
            required: true,
        },

        orderDate: {
            type: Date, 
            required: true
        }

    },
    {
        timestamps: true
    }
)

// TODO : Add order number logic : Order number should be reset to 1 daily

const Order = mongoose.model("Order", orderSchema);

module.exports = Order