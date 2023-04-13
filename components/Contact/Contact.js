import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleDay from "./SingleDay";
import ContactForm from "./ContactForm";
import useWindowSize from "../hooks/windowSize";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
let ani = 1;

const Contact = () => {
  const screenWidth = useWindowSize();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const style = {
    wrapper: `bg-green-700 flex items-center justify-center ${
      screenWidth.width > 1024 ? "h-[90vh]" : "h-[130vh] "
    }`,
    contentContainer:
      "h-[90%] md:h-[80%] lg:h-[75%] w-[90%] md:w-[95%] lg:w-[70%] flex flex-col md:flex-row items-center justify-around gap-4 md:gap-8 px-8 md:px-4",
    heading:
      " md:my-2 lg:my-2 w-[95%] md:w-[85%] lg:w-[90%] text-xl sm:text-xl md:text-xl lg:text-2xl text-green-800 text-center text-center mx-auto",
    smallHeading:
      "my-2 md:my-4 w-[95%] md:w-[60%] mx-auto  text-2xl sm:text-2xl md:text-2xl lg:text-2xl text-green-700 text-center font-bold",
    side1: "w-[100%] md:w-[75%] lg:w-[55%]",
    card: "bg-white px-3 md:px-8 py-4 md:py-8 lg:py-12",
    cardContent:
      "border-4 border-double border-green-700 py-3 md:py-5 lg:py-12",
    side2:
      "w-[100%] md:w-[45%] lg:w-[45%] border-4  border-double border-green-700 px-2 md:px-8 py-4 md:py-4 lg:py-8",
    bookingHeading:
      "text-sm md:text-lg text-center text-green-700 my-4 font-semibold",
    dayContainer: "md:my-3 lg:my-12",
    phone:'bg-green-700 text-white px-4 py-2 md:px-5 md:py-1 rounded text-xl'
  };
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
    if (!inView && ani == 1) {
      ani = 0;
      animation.start({ opacity: 0, y: -200, transition: { duration: 0.5 } });
    }
  }, [inView]);

  return (
    <div
      className={style.wrapper}
      // style={{
      //   background:
      //     "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(/contact.webp)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundAttachment: "auto",
      // }}
    >
      <motion.div
        className={style.contentContainer}
        ref={ref}
        animate={animation}
      >
        <div className={style.side1}>
          <div className={style.card}>
            <div className={style.cardContent}>
              <h2
                className={style.smallHeading}
                style={{ fontFamily: "Poppins, cursive" }}
              >
                Openingstijden
              </h2>

              <div
                className={style.dayContainer}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {/* the days components */}
                <SingleDay day="Maandag" time="Gesloten" />
                <SingleDay day="Dinsdag t/m vrijdag" time="13:00-20:00" />
                <SingleDay day="Zaterdag en zondag" time="15:00-20:00" />
              </div>
              <h2
                className={style.smallHeading}
                style={{ fontFamily: "Poppins, cursive" }}
              >
                Bel ons nu
              </h2>
              <div className={style.heading}>
                <a
                  style={{ fontFamily: "Yeseva One, cursive" }}
                  href="tel:070-3920033"
                  className={style.phone}
                >
                  070-3920033
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={style.side2}>
          <h2
            style={{ fontFamily: "Poppins, sans-serif" }}
            className={style.bookingHeading}
          >
            Contact Us
          </h2>
          <ContactForm />
        </div> */}
      </motion.div>
    </div>
  );
};

export default Contact;
