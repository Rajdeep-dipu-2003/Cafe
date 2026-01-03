const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
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
                type: String,
                enum: ["Pending", "Success"],
                required: true
            },
            updateTime: {
                type: Date
            }
        },

        orderStatus: {
            type: String, 
            required: true,
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

// TODO : Total price should also be saved as a derieved feild
orderSchema.pre("save", function () {
    this.orderItems.forEach(item => {
        item.subtotal = item.quantity * item.price;
    });

    this.totalPrice = this.orderItems.reduce(
        (sum, item) => sum + item.subtotal,
        0
    );
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order