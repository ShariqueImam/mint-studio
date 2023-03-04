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
  para: "tracking-normal text-white text-md md:text-md my-3 md:my-8 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white   text-gray-900 w-[80%] md:w-[30%] lg:w-[20%] px-4",
  mainContent:
    "w-[100%] md:w-[65%] h-[80%] flex flex-col items-start justify-center  mx-auto font1 my-12   md:my-24",
  input:
    "mb-3 md:mb-4 border-b-2 border-stone-500 w-[100%] ring-none outline-none",
  label: "mt-3 md:mt-4",
};

const Home = (props) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${(width < 500 && "/homebg.jpg") ||
      (width > 500 && width < 1000 && "/homebg.jpg") ||
      (width > 1000 && "/homebg.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: ${width < 550 ? "150vh" : "110vh"};
    width: 100vw;
  `;
  const onScroll = (val) => {
    // props.onScroll(val);
  };
  const sendEmail = (e) => {
    e.preventDefault();
  };
  return (
    <Animator className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <FeaturedBackground1 className="flex flex-col items-center">
        <Navbar onScroll={onScroll} />
        <div className="flex items-center justify-center w-[95%] md:w-[80%] flex-col md:flex-row py-24 md:py-16 lg:py-12 md:py-4">
          <div className={style.mainContent}>
            <h2 className={style.heading}>
              be proud, be you - <span className="text-white">Mintstudio</span>
            </h2>
            <p className={style.para}>
              Mariam is gespecialiseerd in semi permanente make-up,
              huidverbetering en beauty behandelingen, Kathleen is
              gespecialiseerd in (medische )pedicure, voetreflexologie en
              facials .Sinds een paar maanden zijn we verhuisd naar ons nieuw
              pand, waar we ons beiden zeer gelukkig voelen. We besteden veel
              aandacht en zorg aan onze klanten tot het perfect is voor ons.
            </p>
            <div
              className={style.btnContainer}
              onClick={() => onScroll("investments")}
            >
              <button className={style.btn}>BEGIN</button>
              <AiOutlineArrowRight className={style.arrow} />
            </div>
          </div>
          {/* adding the form */}
          <div className="w-[95%] md:w-[55%] lg:w-[40%] bg-white rounded-md px-4 md:px-8 py-12 md:py-6 lg:py-12 flex flex-col ">
            <h2 className="font1 font-semibold text-center text-2xl md:text-2xl">
              Ontvang snel een offerte
              <span className="text-pink-700"> Vandaag </span>{" "}
            </h2>
            <p className="text-gray-500 text-xs my-3 md:my-3 text-center">
              Mint Studio is een gezellig salon waar we beide onze passie in
              hebben gevonden. Door een gelukkig toeval zijn we samengebracht,
              en met wij bedoelen we Mariam en Kathleen
            </p>
            <HomeForm />
          </div>
        </div>
      </FeaturedBackground1>
    </Animator>
  );
};
export default Home;
