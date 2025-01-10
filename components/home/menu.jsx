"use client";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { motion } from "framer-motion";

const Menu = () => {
  const [menuItem, setMenuItem] = React.useState("Pizza & Fast Food");

  const handleChange = (event) => {
    setMenuItem(event.target.value);
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full flex flex-col p-2"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-base text-black">
          Up to -40% Discount 🎊{" "}
        </h2>
        <FormControl className="rounded-full" sx={{ m: 1, minWidth: 100 }}>
          <Select value={menuItem} onChange={handleChange} displayEmpty>
            <MenuItem value="Pizza & Fast Food">Pizza & Fast Food</MenuItem>
            <MenuItem value="Vegan">Vegan</MenuItem>
            <MenuItem value="Sushi">Sushi</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex items-center justify-start rounded-xl overflow-x-auto whitespace-nowrap gap-2 w-full scrollbar-hide">
        <div className="w-40 h-40 bg-slate-400 flex-shrink-0 rounded-xl lg:w-96 lg:h-72"></div>
        <div className="w-40 h-40 bg-slate-400 flex-shrink-0 rounded-xl lg:w-96 lg:h-72"></div>
        <div className="w-40 h-40 bg-slate-400 flex-shrink-0 rounded-xl lg:w-96 lg:h-72"></div>
        <div className="w-40 h-40 bg-slate-400 flex-shrink-0 rounded-xl lg:w-96 lg:h-72"></div>
        <div className="w-40 h-40 bg-slate-400 flex-shrink-0 rounded-xl lg:w-96 lg:h-72"></div>
        <div className="w-40 h-40 bg-slate-400 flex-shrink-0 rounded-xl lg:w-96 lg:h-72"></div>
        <div className="w-40 h-40 bg-slate-400 flex-shrink-0 rounded-xl lg:w-96 lg:h-72"></div>
      </div>
    </motion.section>
  );
};

export default Menu;
