function ViewProducts() {
  // HARD-CODED DATA (UI ONLY)
  const categories = [
    { id: "cat-1", name: "Biryani" },
    { id: "cat-2", name: "Pizza" },
    { id: "cat-3", name: "Burgers" },
    { id: "cat-4", name: "Desserts" },
    { id: "cat-5", name: "Beverages" },
    { id: "cat-6", name: "Snacks" },
  ];

  const products = [
    {
      id: "prod-1",
      name: "Chicken Biryani",
      price: 250,
      stock: 20,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "prod-2",
      name: "Veg Biryani",
      price: 200,
      stock: 15,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "prod-3",
      name: "Special Biryani",
      price: 320,
      stock: 8,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-6">
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">View Products</h1>
        <p className="text-sm text-gray-600">
          Select a category to view available products
        </p>
      </div>

      {/* ===================== */}
      {/* CATEGORY DROPDOWN */}
      {/* ===================== */}
      <div className="bg-white p-4 rounded-md shadow-sm mb-6 max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>

        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">-- Select Category --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* ===================== */}
      {/* PRODUCTS TABLE GRID */}
      {/* ===================== */}
      <div>
        <h2 className="text-lg font-medium mb-3">
          Products in Biryani
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-md p-3 flex gap-3 items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-14 w-14 rounded object-cover"
              />

              <div className="flex-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-gray-500">
                  ₹{product.price} · Stock: {product.stock}
                </p>
              </div>

              <button className="text-xs px-3 py-1 border rounded hover:bg-gray-100">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewProducts;
