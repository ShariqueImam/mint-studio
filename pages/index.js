import Head from "next/head";
import React, { useState } from "react";
import Home from "../components/Home/Home";
import Treatment from "../components/Treatment/Treatment";
import Explain from "../components/Explain/Explain";
import Footer from "../components/Footer/Footer";
import Animator from "../components/UI/Animator";
import { scroller } from "react-scroll";
import About from "../components/About/About";
import styled from "styled-components";
const style = {
  wrapper: "",
};
export default function Main() {
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      // browser code
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${(width < 500 && "/homebg.jpeg") ||
      (width > 500 && width < 1000 && "/homebg.jpeg") ||
      (width > 1000 && "/homebg.jpeg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 100vh;
    width: 100vw;
  `;
  return (
    <Animator>
      <div className={style.container}>
        <Head>
          <title> Mintstudio - Your Makeup Partner</title>
          <meta name="description" content="Mintstudio - Your Makeup Partner" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <FeaturedBackground1 className="contact">
          <Home />
        </FeaturedBackground1>
      </div>
    </Animator>
  );
}

