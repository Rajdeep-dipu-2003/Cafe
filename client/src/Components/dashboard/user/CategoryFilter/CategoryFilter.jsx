import biryaniImg from "../../../../assets/biryani.avif"
import pizzaImg from "../../../../assets/pizza.avif"
import wrapsImg from "../../../../assets/wraps.avif"
import burgerImg from "../../../../assets/burger.avif"
import desertImg from "../../../../assets/desert.avif"

import CategoryItem from "./CategoryItem";

function CategoryFilter() {
  const categories = [
    { label: "Biryani", image: biryaniImg },
    { label: "Pizzas", image: pizzaImg },
    { label: "Wraps", image: wrapsImg },
    { label: "Burger", image: burgerImg },
    { label: "Dessert", image: desertImg },
  ];

  return (
    <section className="w-full px-6 py-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Popular Cuisines
      </h2>

      <div
        className="
          flex gap-10
          overflow-x-auto
          scrollbar-hide
          justify-center
        "
      >
        {categories.map((item) => (
          <CategoryItem
            key={item.label}
            image={item.image}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;
