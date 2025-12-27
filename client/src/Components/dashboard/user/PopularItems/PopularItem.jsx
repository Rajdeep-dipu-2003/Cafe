function PopularItem({ image, label }) {
  return (
    <article
      className="
        flex flex-col items-center gap-3
        p-4
        rounded-xl
        hover:shadow-md
        transition
        cursor-pointer
      "
    >
      <div className="w-28">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
}

export default PopularItem;
