function CategoryItem({ image, label }) {
  return (
    <button
      className="
        flex flex-col items-center gap-2
        w-[100px]
        h-64
        focus:outline-none
      "
    >
      <div
        className="
          w-36
          hover:scale-105 transition
          overflow-hidden
          scrollbar-hide
        "
      >
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>

    </button>
  );
}

export default CategoryItem;
