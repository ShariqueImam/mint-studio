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
import useWindowSize from "../hooks/useWindowSize";
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
  const { width } = useWindowSize();
  const mystyle = {
    background:
      'radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("/homebg.jpeg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "auto",
  };
  return (
    <Animator>
      <div className={style.container}>
        <Head>
          <title> Mintstudio - Your Makeup Partner</title>
          <meta name="description" content="Mintstudio - Your Makeup Partner" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div
          className="contact flex items-center flex-col min-h-[100vh]"
          style={mystyle}
        >
          <Home />
        </div>
      </div>
    </Animator>
  );
}
