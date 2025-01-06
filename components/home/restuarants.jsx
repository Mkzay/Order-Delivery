const Restaurant = () => {
  const categories = [
    {
      key: 1,
      name: "Pizzas",
      image: "images/pizza.png",
    },
    {
      key: 2,
      name: "Burgers & Fast Food",
      image: "images/burger.png",
    },
    {
      key: 3,
      name: "Salads",
      image: "images/salad.png",
    },
    {
      key: 4,
      name: "Soups",
      image: "images/soup.png",
    },
    {
      key: 5,
      name: "Breakfast",
      image: "images/breakfast.png",
    },
    {
      key: 6,
      name: "Pasta & Casuals",
      image: "images/pasta.png",
    },
  ];

  return (
    <section className="flex flex-col gap-2">
      <h1 className="font-bold text-base text-black">
        Order.Uk’s Popular Categories
      </h1>
      <div className="lg:hidden flex items-center justify-center flex-wrap rounded-xl gap-2 w-full lg:flex-nowrap lg:justify-start lg:items-center lg:overflow-x-auto lg:whitespace-nowrap lg:scrollbar-hide">
        {categories.map((category) => (
          <div key={category.key} className="w-[189px] h-[211px] bg-accent lg:flex-shrink-0 rounded-xl lg:w-96 lg:h-72">
            <img src={category.image} alt={category.name} />
            <p className="font-bold text-orange text-xs p-2">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
