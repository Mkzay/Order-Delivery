import Image from "next/image";
import Link from "next/link";

const LowerSection = () => {
  return (
    <section className="p-2 w-full flex flex-col gap-5">
      <div className="flex flex-col gap-4 bg-[#D9D9D980]/50 w-full rounded-xl pt-20 px-5 lg:gap-0 lg:pt-12 lg:items-center lg:justify-center lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-3xl text-[#03081F] lg:text-6xl">
            Ordering is more
          </h1>
          <h2 className="font-medium text-2xl text-black">
            <span className="text-orange underline">Personalised </span>&
            Instant
          </h2>
          <p className="font-normal text-base text-black lg:text-2xl">
            Download the Order.uk app for faster ordering
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link className="bg-black py-2 px-4 rounded-lg" href="">
              <Image
                src="images/appstore.svg"
                alt="appstore"
                width={100}
                height={100}
              />
            </Link>
            <Link className="bg-black py-2 px-4 rounded-lg" href="">
              <Image
                src="images/appstore.svg"
                alt="appstore"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="lg:hidden"
            src="images/laugh.svg"
            alt="laugh"
            height={250}
            width={250}
          />
          <Image
            className="hidden lg:block"
            src="images/laugh-desktop.svg"
            alt="laugh"
            height={800}
            width={700}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center w-full lg:flex-row">
        <div className="flex flex-col bg-blue-900 justify-end items-start gap-2 relative p-10 w-full rounded-md">
          <p className="text-base font-medium text-orange">
            Signup as a business
          </p>
          <h2 className="font-bold text-2xl text-white">Partner with us</h2>
          <button className="bg-orange py-2 px-4 rounded-xl text-white">
            Get Started
          </button>
        </div>
        <div className="flex flex-col bg-green-900 justify-end items-start gap-2 relative p-10 w-full rounded-md">
          <p className="text-base font-medium text-orange">
          Signup as a rider
          </p>
          <h2 className="font-bold text-2xl text-white">Ride with us</h2>
          <button className="bg-orange py-2 px-4 rounded-xl text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default LowerSection;
