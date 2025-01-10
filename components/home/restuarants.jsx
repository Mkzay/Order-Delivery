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
    <section className="flex p-2 flex-col gap-2 lg:gap-10 w-full bg-[#D9D9D980]/50 py-10 lg:bg-white relative">
      <h1 className="font-bold text-base lg:text-[32px] text-black pl-2">
        Order.Uk’s Popular Categories
      </h1>
      <div className="flex items-center justify-center flex-wrap rounded-xl gap-2 w-full lg:flex-nowrap lg:items-center lg:justify-start lg:rounded-xl lg:overflow-x-auto lg:whitespace-nowrap lg:gap-2 lg:w-full lg:scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category.key}
            className="w-[160px] sm:w-[189px] h-[211px] bg-white/10 border rounded-2xl border-[#0000001A] lg:flex-shrink-0 lg:w-60 lg:h-[266px]"
          >
            <img className="lg:w-96 lg:h-52" src={category.image} alt={category.name} />
            <p className="font-bold text-orange text-xs p-2">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
