"use client";

import Menu from "@/components/home/menu";
import Image from "next/image";
import { motion } from "framer-motion";
import Restaurant from "@/components/home/restuarants";
import Locations from "@/components/home/locations";
import LowerSection from "@/components/home/section"

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-white lg:px-10">
      <div className="w-full p-2 flex items-center justify-center lg:justify-between lg:bg-[url('/images/woman.svg')] lg:bg-contain lg:bg-center lg:bg-no-repeat z-10 relative">
        <div className="flex flex-col gap-5 text-center items-center justify-center text-white w-full bg-accent rounded-xl p-10 lg:bg-white lg:w-auto lg:text-accent lg:text-left lg:items-start lg:p-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs font-normal lg:text-base"
          >
            Order Restaurant food, takeaway and groceries.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold lg:text-[54px]/[66px]"
          >
            Feast Your Senses,
            <br />
            <span className="text-orange">Fast and Fresh</span>{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-xs font-normal text-[13px]"
          >
            Enter a postcode to see what we deliver
          </motion.p>
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            placeholder="e.g. EC4R 3TE"
            className="w-full h-[57px] rounded-full p-5 px-10 outline-none text-accent text-sm placeholder:text-sm placeholder:text-black/80 placeholder:font-normal lg:w-96 lg:border lg:border-black/40 lg:px-7"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block"
        >
          <Image
            src="images/orange.svg"
            alt="orange"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
      <Menu />
      <Restaurant />
      <Locations />
      <LowerSection />
    </section>
  );
};

export default Page;
