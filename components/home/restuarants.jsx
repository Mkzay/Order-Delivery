const Restaurant = () => {
  const categories = [
    {
      name: "Pizzas",
      image: "images/pizza.png",
    },
    {
      name: "Burgers & Fast Food",
      image: "images/burger.png",
    },
    {
      name: "Salads",
      image: "images/salad.png",
    },
    {
      name: "Soups",
      image: "images/soup.png",
    },
    {
      name: "Breakfast",
      image: "images/breakfast.png",
    },
    {
      name: "Pasta & Casuals",
      image: "images/pasta.png",
    },
  ];

  return (
    <section className="flex flex-col gap-2">
      <h1 className="font-bold text-base text-black">
        Order.Uk’s Popular Categories
      </h1>
      <div className="flex items-center justify-evenly flex-wrap rounded-xl gap-2 w-full lg:flex-nowrap lg:justify-start lg:items-center lg:overflow-x-auto lg:whitespace-nowrap lg:scrollbar-hide">
        {categories.map((category) => (
          <div className="w-[189px] h-[211px] bg-accent lg:flex-shrink-0 rounded-xl lg:w-96 lg:h-72">
            <img src={category.image} alt={category.name} />
            <p className="font-bold text-orange text-xs p-2">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
