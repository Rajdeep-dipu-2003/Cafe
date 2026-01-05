function OrderItem({ order }) {
  const {
    orderNumber,
    orderDate,
    totalPrice,
    paymentMethod,
    paymentResult,
    orderStatus,
  } = order;

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ margin: 0 }}>Order #{orderNumber}</h3>
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "999px",
            fontSize: "12px",
            backgroundColor:
              orderStatus === "Complete"
                ? "#dcfce7"
                : orderStatus === "Preparing"
                ? "#fef3c7"
                : orderStatus === "Ready"
                ? "#dbeafe"
                : "#fee2e2",
          }}
        >
          {orderStatus}
        </span>
      </div>

      {/* Meta */}
      <p style={{ margin: "8px 0", color: "#6b7280", fontSize: "14px" }}>
        Ordered on: {orderDate.toLocaleString()}
      </p>

      <hr style={{ margin: "12px 0" }} />

      {/* Payment Info */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p><strong>Total:</strong> ₹{totalPrice}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
        </div>

        <div>
          <p>
            <strong>Status:</strong>{" "}
            {paymentResult.status}
          </p>
          {paymentResult.transactionId && (
            <p style={{ fontSize: "13px", color: "#6b7280" }}>
              Txn ID: {paymentResult.transactionId}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
