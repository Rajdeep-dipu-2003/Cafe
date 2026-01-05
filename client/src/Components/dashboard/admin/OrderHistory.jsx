import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import OrderItem from "./OrderItem";

function OrderHistory() {
    // const dummyOrders = [
    //     {
    //         user: "65a1f0c2a9e4f23b1c123001",
    //         orderItems: [],
    //         totalPrice: 650,
    //         paymentMethod: "UPI",
    //         paymentResult: {
    //             transactionId: "TXN123456789",
    //             status: "Success",
    //             updateTime: new Date("2026-01-01T12:30:00Z"),
    //         },
    //         orderStatus: "Preparing",
    //         orderNumber: "ORD-1001",
    //         orderDate: new Date("2026-01-01T12:25:00Z"),
    //     },
    //     {
    //         user: "65a1f0c2a9e4f23b1c123002",
    //         orderItems: [],
    //         totalPrice: 360,
    //         paymentMethod: "Card",
    //         paymentResult: {
    //             transactionId: "TXN987654321",
    //             status: "Success",
    //             updateTime: new Date("2026-01-02T18:45:00Z"),
    //         },
    //         orderStatus: "Ready",
    //         orderNumber: "ORD-1002",
    //         orderDate: new Date("2026-01-02T18:40:00Z"),
    //     },
    //     {
    //         user: "65a1f0c2a9e4f23b1c123003",
    //         orderItems: [],
    //         totalPrice: 210,
    //         paymentMethod: "Cash",
    //         paymentResult: {
    //             transactionId: null,
    //             status: "Pending",
    //             updateTime: null,
    //         },
    //         orderStatus: "Pending",
    //         orderNumber: "ORD-1003",
    //         orderDate: new Date("2026-01-03T14:10:00Z"),
    //     },
    //     {
    //         user: "65a1f0c2a9e4f23b1c123004",
    //         orderItems: [],
    //         totalPrice: 360,
    //         paymentMethod: "UPI",
    //         paymentResult: {
    //             transactionId: "TXN555666777",
    //             status: "Success",
    //             updateTime: new Date("2026-01-04T20:05:00Z"),
    //         },
    //         orderStatus: "Complete",
    //         orderNumber: "ORD-1004",
    //         orderDate: new Date("2026-01-04T19:55:00Z"),
    //     },
    // ];

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/v1/admin/get-all-order",
                );

                setOrders(response.data.orders);
            }
            catch (e) {
                console.error(e);
                setError("Failed to fetch orders");
            }
            finally {
                setLoading(false);
            }
        }

        fetchOrders();
        
    }, []);


    if (loading) {
        return <p>Loading orders...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ marginBottom: "20px" }}>Orders History</h2>

            {orders.map((order) => (
                <OrderItem key={uuidv4()} order={order} />
            ))}
        </div>
    );
}

export default OrderHistory;
