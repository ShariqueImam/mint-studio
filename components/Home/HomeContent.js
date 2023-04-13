import React from "react";
const style = {
  wrapper:
    "h-[90%] flex items-center justify-around w-[95%] md:w-[80%] m-auto ",
  content:
    "h-[80%] sm:h-[60%] md:h-[70%] lg:h-[70%]  flex flex-col w-full items-center justify-around mt-24 md:mt-0",
  heading:
    " text-5xl sm:text-7xl md:text-7xl lg:text-6xl text-amber-50 text-center",
  smallHeading:
    "my-1 sm:my-6 my:my-2 text-center text-2xl sm:text-2xl md:text-3xl lg:text-3xl text-amber-50",
  buttonContainer:
    "flex flex-col md:flex-row w-[50%] md:w-[6`0%] mx-auto justify-around",
  menu: "my-4 px-5 md:px-6 lg:px-12 py-2 md:py-2 lg:py-4 bg-green-700 hover:bg-transparent border-transparent border-2 hover:border-green-700 text-[#F2ECDE] font-bold tracking-wide hover:bg-opacity-[0.95] cursor-pointer transition duration-[300ms] box-border text-lg w-[100%] md:w-[40%]",
  table:
    "my-4 px-5 md:px-6 lg:px-12 py-2 md:py-2 lg:py-4 border-2 border-gray-50 hover:bg-[#F2ECDE] hover:text-gray-800  transition duration-[300ms] cursor-pointer box-border text-[#F2ECDE] font-bold tracking-wide text-lg w-[100%] md:w-[40%]",
};
const HomeContent = (props) => {
  const onScroll = (val) => {
    props.onScroll(val);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {/* heading */}
        <h2
          className={style.heading}
          style={{ fontFamily: "Yeseva One, cursive" }}
        >
          Het aanbieden van de beste smaakervaring
        </h2>
        <h3
          className={style.smallHeading}
          style={{ fontFamily: "Poppins, cursive" }}
        >
          Verse Ingrediënten, Lekkere Maaltijden en Creatieve Chefs
        </h3>
        <div className={style.buttonContainer}>
          <button
            aria-label="Button to view menu"
            className={style.menu}
            onClick={() => {
              onScroll("menu");
            }}
          >
            Menu bekijken
          </button>
          <button
            aria-label="Button to book table"
            className={style.table}
            onClick={() => {
              onScroll("booking");
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
