// import biryaniImg from "../../../../assets/biryani.avif";
// import pizzaImg from "../../../../assets/pizza.avif";
// import wrapsImg from "../../../../assets/wraps.avif";
// import burgerImg from "../../../../assets/burger.avif";
// import desertImg from "../../../../assets/desert.avif";

import api from "@lib/axios"
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import PopularItem from "./PopularItem";

function PopularItemsFilter() {
  // const popularItems = [
  //   { label: "Biryani", image: biryaniImg },
  //   { label: "Pizzas", image: pizzaImg },
  //   { label: "Wraps", image: wrapsImg },
  //   { label: "Burger", image: burgerImg },
  //   { label: "Dessert", image: desertImg },
  //   { label: "Shakes", image: pizzaImg }, // placeholder for 6th item
  // ];

  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const getPopularItems = async () => {
      try {
        const response = await api.get("/shared/get-popular-products");
        // console.log(response.data);
        setPopularItems(response.data.popularProducts);
      }
      catch (e) {
        // console.error("Error while fetching popular items: ", e);
        toast.error("Failed to get category.\nPlease try again later");
      }
    }

    getPopularItems()
  }, [])

  return (
    <section className="w-full px-6 py-8">
      <Toaster/>
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
        {popularItems  && popularItems.map((item) => (
          <PopularItem
            key={item._id}
            image={item.imageUrl}
            label={item.name}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularItemsFilter;
