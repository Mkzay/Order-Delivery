const Locations = () => {
  const categories = [
    {
      key: 1,
      name: "Mcdonald's London",
      image: "images/mcdonalds.png",
    },
    {
      key: 2,
      name: "Papa Johns",
      image: "images/papajohns.png",
    },
    {
      key: 3,
      name: "KFC West London",
      image: "images/kfc.png",
    },
    {
      key: 4,
      name: "Texas Chicken",
      image: "images/texas.png",
    },
    {
      key: 5,
      name: "Burger King",
      image: "images/burgerking.png",
    },
    {
      key: 6,
      name: "Shaurma 1",
      image: "images/shaurma.png",
    },
  ];

  return (
    <section className="flex flex-col gap-2 lg:gap-10 w-full p-2">
      <h1 className="font-bold text-base lg:text-[32px] text-black">
        Popular Restaurants
      </h1>
      <div className="flex items-center justify-start rounded-xl overflow-x-auto whitespace-nowrap gap-2 w-full scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.key}
            className="w-[122px] h-[156px] bg-orange border rounded-2xl flex-shrink-0 lg:w-60 lg:h-[266px]"
          >
            <img
              className="lg:w-96 lg:h-52"
              src={category.image}
              alt={category.name}
            />
            <p className="font-bold text-white text-center text-xs p-2 pt-4">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
