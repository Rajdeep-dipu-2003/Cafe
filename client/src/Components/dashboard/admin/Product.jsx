function Product() {
  // DUMMY PRODUCT DATA (UI ONLY)
  const product = {
    name: "Chicken Biryani",
    slug: "chicken-biryani",
    tags: ["spicy", "rice", "chicken"],
    category: {
      name: "Biryani",
      id: "65a1f1a9b8d4e12a9c111001",
    },
    imageUrl: "https://via.placeholder.com/500",
    description:
      "Aromatic basmati rice cooked with tender chicken pieces, traditional spices, and herbs. Served hot and fresh.",
    price: 250,
    orderCount: 124,
    createdAt: "2025-12-01T10:30:00Z",
    updatedAt: "2025-12-15T14:10:00Z",
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-6">
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Product Details</h1>
        <p className="text-sm text-gray-600">
          View and manage product information
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* PRODUCT IMAGE */}
        <div className="lg:col-span-1">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-72 object-cover rounded border"
          />
        </div>

        {/* PRODUCT INFO */}
        <div className="lg:col-span-2 bg-white border rounded p-5">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">
              Slug: {product.slug}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Category</p>
              <p className="font-medium">{product.category.name}</p>
            </div>

            <div>
              <p className="text-gray-500">Price</p>
              <p className="font-medium">₹{product.price}</p>
            </div>

            <div>
              <p className="text-gray-500">Order Count</p>
              <p className="font-medium">{product.orderCount}</p>
            </div>

            <div>
              <p className="text-gray-500">Tags</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-5">
            <p className="text-gray-500 text-sm mb-1">Description</p>
            <p className="text-sm leading-relaxed text-gray-700">
              {product.description}
            </p>
          </div>

          {/* TIMESTAMPS */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-500">
            <p>Created At: {new Date(product.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(product.updatedAt).toLocaleString()}</p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 text-sm border rounded hover:bg-gray-100">
              Update
            </button>

            <button className="px-4 py-2 text-sm border border-red-500 text-red-600 rounded hover:bg-red-50">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
