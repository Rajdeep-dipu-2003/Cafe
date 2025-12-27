import biryaniImg from "../../../../assets/biryani.avif";
import pizzaImg from "../../../../assets/pizza.avif";
import wrapsImg from "../../../../assets/wraps.avif";
import burgerImg from "../../../../assets/burger.avif";
import desertImg from "../../../../assets/desert.avif";

import PopularItem from "./PopularItem";

function PopularItemsFilter() {
  const popularItems = [
    { label: "Biryani", image: biryaniImg },
    { label: "Pizzas", image: pizzaImg },
    { label: "Wraps", image: wrapsImg },
    { label: "Burger", image: burgerImg },
    { label: "Dessert", image: desertImg },
    { label: "Shakes", image: pizzaImg }, // placeholder for 6th item
  ];

  return (
    <section className="w-full px-6 py-8">
      <h2 className="text-xl font-semibold mb-6 text-center">
        All Time Favourites
      </h2>

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-6
          gap-6
        "
      >
        {popularItems.map((item) => (
          <PopularItem
            key={item.label}
            image={item.image}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularItemsFilter;
