import React from "react";
import SingleMenuItem from "./SingleMenuItem";
import { motion } from "framer-motion";

const style = {
  wrapper:
    "my-8 px-2 md:px-6 py-2 md:py-2 w-[100%] md:w-[90%] lg:w-[75%] mx-auto flex justify-around flex-col md:flex-row",
  left: "bg-green-700 my-4 flex flex-wrap border-double border-[3px] border-green-700 px-6 md:px-12 py-6 md:py-12",
};
const variantsContainer = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: -10,
    transition: {
      delay: 0.2,
      when: "beforeChildren", // make this animation to end before children animation occurs
    },
  },
};
const LunchMenu = ({ MenuItems }) => {
  return (
    <motion.div
      className={style.wrapper}
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
    >
      {/* left */}
      <div className={style.left}>
        {MenuItems.map((item) => {
          return <SingleMenuItem item={item} />;
        })}
      </div>
    </motion.div>
  );
};

export default LunchMenu;
