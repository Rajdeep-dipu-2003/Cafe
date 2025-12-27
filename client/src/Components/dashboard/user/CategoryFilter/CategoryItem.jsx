function CategoryItem({ image, label }) {
  return (
    <button
      className="
        flex flex-col items-center gap-2
        min-w-[80px]
        hover:scale-105 transition
        focus:outline-none
      "
    >
      <div
        className="
          w-36
          overflow-hidden
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
