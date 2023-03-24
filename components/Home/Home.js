import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import Animator from "../UI/Animator";
import HomeForm from "./HomeForm";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col",
  heading:
    "text-4xl md:text-5xl lg:text-6xl text-white  my-2 md:my-3 w-[100%] md:w-[80%] text-center md:text-left font-semibold",
  para: "tracking-normal text-white text-md md:text-md my-3 md:my-6 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  para1:
    "tracking-normal text-white text-md md:text-md my-2 md:my-1 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white   text-gray-900  px-4",
  mainContent:
    "w-[100%] md:w-[65%] h-[80%] flex flex-col items-start justify-center  mx-auto font1 my-16 md:my-7",
  input:
    "mb-3 md:mb-4 border-b-2 border-stone-500 w-[100%] ring-none outline-none",
  label: "mt-3 md:mt-4",
};

const Home = (props) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${(width < 500 && "/homebg.jpeg") ||
      (width > 500 && width < 1000 && "/homebg.jpeg") ||
      (width > 1000 && "/homebg.jpeg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: ${width < 550 ? "190vh" : "100vh"};
    width: 100vw;
  `;
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <Animator className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <FeaturedBackground1 className="flex flex-col items-center">
        <Navbar />
        <div className="flex items-center sm:items-start justify-center w-[95%] md:w-[80%] flex-col md:flex-row py-32 md:py-4 lg:py-4">
          {/* <div className={style.mainContent}>
            <h2 className={style.heading}>
              be proud, be you - <span className="text-white">Mintstudio</span>
            </h2>
            <p className={style.para}>
              Met vijf jaar ervaring op zak is Mariam een deskundige op het
              gebied van semi-permanente make-up, huidverbetering en beauty
              behandelingen. Ze heeft in deze vakgebieden veel kennis en
              expertise opgebouwd, waardoor ze haar cliënten met vertrouwen en
              professionaliteit kan behandelen.
            </p>
            <p className={style.para1}>
              Ombré powder brows is de meest recente trend op het gebied van
              permanente make up voor wenkbrauwen. Bij Ombré powder brows wordt
              de aanzet van de wenkbrauwen lichter in geschaduwd met naar de
              punten toe donkerder waardoor het een mooie overloop heeft maar
              ook heel zacht en natuurlijk oogt.
            </p>
          </div> */}
          {/* adding the form */}
          <div className="w-[95%] md:w-[60%] lg:w-[45 %] bg-white rounded-md px-4 md:px-8 py-12 md:py-6 lg:py-12 flex flex-col ">
            <h2 className="font1 font-semibold text-center text-2xl md:text-2xl">
              Ontdek de beste versie van uzelf. Wij bellen u
              <span className="text-pink-700"> terug! </span>{" "}
            </h2>
            <p className="text-gray-500 text-xs my-3 md:my-3 text-center">
              Laat ons u helpen om de eerste stap te zetten naar de beste versie
              van uzelf. Vul ons terugbelformulier in en ontdek hoe we u kunnen
              ondersteunen op uw reis naar persoonlijke groei en welzijn.
            </p>
            {/* {<HomeForm />} */}
            <input type="text" name="" id="" />
          </div>
        </div>
      </FeaturedBackground1>
    </Animator>
  );
};
export default Home;
