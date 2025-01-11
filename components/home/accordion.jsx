import Image from "next/image";

const Accordion = () => {
  return (
    <section className="p-2 flex flex-col gap-12">
      <div className="flex items-center justify-center flex-col gap-4">
        <div>
          <h1 className="font-bold text-2xl">Know more about us!</h1>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:bg-accent lg:rounded-xl">
        <ul className=" lg:p-10 flex flex-col items-center justify-center gap-3 b-accent lg:border-r lg:border-white/90 lg:gap-8 lg:text-white">
          <li>What payment methods are accepted?</li>
          <li>What payment methods are accepted?</li>
          <li>What payment methods are accepted?</li>
          <li>What payment methods are accepted?</li>
          <li>What payment methods are accepted?</li>
        </ul>

        <div className="flex-1 flex flex-col items-center justify-center bg-accent rounded-xl p-10">
          <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
            <div className="bg-[#D9D9D9] rounded-xl flex flex-col gap-3 items-center justify-center p-10 text-center w-10/12 lg:w-[238px] lg:h-[285px]">
              <h2>Place an Order!</h2>
              <Image
                src="images/food.svg"
                alt="order"
                height={130}
                width={130}
              />
              <p>Place order through our website or Mobile app</p>
            </div>

            <div className="bg-[#D9D9D9] rounded-xl flex flex-col gap-3 items-center justify-center p-10 text-center w-10/12 lg:w-[238px] lg:h-[285px]">
              <h2>Track Progress</h2>
              <Image
                src="images/track.svg"
                alt="track"
                height={130}
                width={130}
              />
              <p>Your can track your order status with delivery time</p>
            </div>

            <div className="bg-[#D9D9D9] rounded-xl flex flex-col gap-3 items-center justify-center p-10 text-center w-10/12 lg:w-[238px] lg:h-[285px]">
              <h2>Get your Order!</h2>
              <Image src="images/see.svg" alt="see" height={130} width={130} />
              <p>Receive your order at a lighting fast speed!</p>
            </div>
          </div>
          <p className="text-center text-white pt-5 lg:w-9/12">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 bg-orange rounded-xl p-10 w-full">
        <ul className="flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-between lg:w-full">
          <li className="text-white text-center text-6xl font-light border-b border-white pb-7 flex flex-col lg:pb-0 lg:pr-7 lg lg:border-b-0 lg:border-r lg:text-4xl">
            546 +<br />
            <span className="font-bold text-2xl lg:text-xl">
              Registered Riders
            </span>
          </li>

          <li className="text-white text-center text-6xl font-light border-b border-white pb-7 flex flex-col lg:pb-0 lg:pr-7 lg:border-b-0 lg:border-r lg:text-4xl">
            789,900 +<br />
            <span className="font-bold text-2xl lg:text-xl">
              Orders Delivered
            </span>
          </li>

          <li className="text-white text-center text-6xl font-light border-b border-white pb-7 flex flex-col lg:pb-0 lg:pr-7 lg:border-b-0 lg:border-r lg:text-4xl">
            690 +<br />
            <span className="font-bold text-2xl lg:text-xl">
              Restuarants Partnered
            </span>
          </li>

          <li className="text-white text-center text-6xl font-light flex flex-col lg:text-4xl">
            17,457 +<br />
            <span className="font-bold text-2xl lg:text-xl">Food items</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Accordion;
