import React, { useEffect } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OfferDetails from "./OfferDetails";
let ani = 1;
const style = {
  wrapper: "my-8 flex flex-col mx-auto",
  smallHeading:
    " w-[95%] md:w-[60%] mx-auto my-2 text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-green-700 text-center",
  heading:
    " w-[95%] md:w-[60%] lg:w-[40%] mx-auto my-2 text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-900 opacity-[0.95] text-center",
  cardContainer:
    "flex items-center gap-1 flex-col justify-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto",
  story:
    "text-gray-900 text-md md:text-md  w-[80%] md:w-[40%] mx-auto text-center my-8 font-bold",
  storyPara: "text-gray-900 text-md md:text-md",
};

const Offer = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
    if (!inView && ani == 1) {
      ani = 0;
      animation.start({ opacity: 0, y: 200, transition: { duration: 0.8 } });
    }
  }, [inView]);
  return (
    <motion.div className={style.wrapper} ref={ref} animate={animation}>
      <h2
        style={{ fontFamily: "Poppins, cursive" }}
        className={style.smallHeading}
      >
        {" "}
        Ons Verhaal
      </h2>
      <GiForkKnifeSpoon className="text-4xl mx-auto text-green-700 my-2" />
      {/* offers card */}
      <div className={style.cardContainer}>
        <OfferDetails />
      </div>
      {/* story */}
      <h2 className={style.story}>
        Bij Isaku-iki draait alles om de smaak van Indonesië. Kom langs en proef
        het zelf!
      </h2>
    </motion.div>
  );
};

export default Offer;
