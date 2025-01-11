import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="container mx-auto px-4 py-8 lg:flex lg:justify-between lg:px-10">
        {/* Left Section */}
        <div className="mb-8 lg:mb-0 lg:w-1/4">
          <h2 className="text-2xl font-bold">
            Order<span className="font-light">UK</span>
          </h2>
          <div className="flex gap-2">
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
          <p className="mt-4 text-sm font-normal">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>

        {/* Center Section */}
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h3 className="text-lg font-medium mb-2">
            Get Exclusive Deals in your Inbox
          </h3>
          <form className="flex flex-col lg:flex-row items-center">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="w-full lg:w-2/3 p-2 border rounded mb-4 lg:mb-0 lg:mr-2"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-sm">
            We won’t spam, read our{" "}
            <a href="#" className="text-blue-500">
              email policy
            </a>
            .
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-snapchat"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 lg:flex lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h4 className="text-lg font-medium mb-2">Legal Pages</h4>
            <ul className="text-sm font-normal">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Modern Slavery Statement
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2">Important Links</h4>
            <ul className="text-sm font-normal">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Get help
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Add your restaurant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Sign up to deliver
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Create a business account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-accent font-normal text-sm text-white py-2 text-center flex items-center justify-center lg:justify-between lg:px-10">
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className="hidden lg:block">
          <a href="#" className="text-gray-400 text-sm mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 text-sm mx-2">
            Terms
          </a>
          <a href="#" className="text-gray-400 text-sm mx-2">
            Pricing
          </a>
          <a href="#" className="text-gray-400 text-sm mx-2">
            Do not sell or share my personal information
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
