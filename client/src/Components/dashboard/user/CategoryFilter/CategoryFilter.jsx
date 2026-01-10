import biryaniImg from "../../../../assets/biryani.avif"
import pizzaImg from "../../../../assets/pizza.avif"
import wrapsImg from "../../../../assets/wraps.avif"
import burgerImg from "../../../../assets/burger.avif"
import desertImg from "../../../../assets/desert.avif"

import api from "@lib/axios.js"

import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

function CategoryFilter() {
  // const categories = [
  //   { label: "Biryani", image: biryaniImg },
  //   { label: "Pizzas", image: pizzaImg },
  //   { label: "Wraps", image: wrapsImg },
  //   { label: "Burger", image: burgerImg },
  //   { label: "Dessert", image: desertImg },
  // ];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await api.get("/shared/get-all-categories");
        console.log(response.data)
        setCategories(response.data.categories);
      }
      catch (e) {
        console.error("Error while fetching category details: ", e);
        toast.error("Failed to get category.\nPlease try again later");
      }
    };

    getAllCategories();
  }, [])

  return (
    <section className="w-full px-6 py-6">
      <Toaster/>
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
            key={item.name}
            image={item.imageUrl}
            label={item.name}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryFilter;
