import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import Animator from "../../components/UI/Animator";
import Link from "next/link";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col",
  heading:
    "text-3xl md:text-4xl lg:text-4xl text-white  my-2 md:my-3 w-[100%] md:w-[80%] text-center md:text-center font-semibold",
  para: "tracking-normal text-white text-md md:text-md my-3 md:my-8 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-pink-700  text-white px-4 rounded-md",
  mainContent:
    "w-[100%] md:w-[65%] h-[80%] flex flex-col items-center justify-center  mx-auto font1 my-12 md:my-24",
  input:
    "mb-3 md:mb-4 border-b-2 border-stone-500 w-[100%] ring-none outline-none",
  label: "mt-3 md:mt-4",
};

const index = (props) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(width < 500 && "/homebg.jpeg") ||
      (width > 500 && width < 1000 && "/homebg.jpeg") ||
      (width > 1000 && "/homebg.jpeg")});
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
              Bedankt voor het invullen van de gegevens
            </h2>
            <section className="flex items-center justify-between w-[70%] flex-col my-5 md:my-8">
              {/* <p className="text-white my-4">Wil je een afspraak boeken</p> */}
              <Link
                href="https://mintstudio.vercel.app"
                className={style.btnContainer}
              >
                <button className={style.btn}>Ga terug</button>
              </Link>
            </section>
          </div>
        </div>
      </FeaturedBackground1>
    </Animator>
  );
};
export default index;
