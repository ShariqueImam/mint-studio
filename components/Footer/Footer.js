import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Signature from "./Signature";
import FooterModal from "../Modal/FooterModal";

import emailjs from "@emailjs/browser";
const style = {
  wrapper: "ml-0 bg-stone-900 font1",
  footerNav: "flex flex-col md:flex-row mt-2 md:mt-8 w-[100%] pt-12 md:py-24 ",
  btnContainer: "flex md:flex-row mb-7 mt-7 justify-around",
  left: "flex flex-col items-center md:items-start justify-between md:w-[50%] mx-3 md:mx-12",
  right:
    "flex flex-col md:flex-row md:w-[50%] md:items-start md:justify-center",
  col1: "md:w-[50%] flex flex-col items-start justify-start mx-8 md:mx-0",
  col2: "md:w-[50%] flex flex-col items-start justify-start mx-8 md:mx-0",
  list: "text-white decoration-none list-none my-2 cursor-pointer border-move-animation1 hover:opacity-[0.85]",
  list1:
    "text-white decoration-none list-none my-2 cursor-pointer border-move-animation1  hover:opacity-[0.85]",
};
const Footer = (props) => {
  const [Open, setOpen] = useState(false);
  const form = useRef();
  const formSubmitHanlder = (e) => {
    e.preventDefault();
    // console.log(form.current);
    emailjs
      .sendForm(
        "service_fg9bwck",
        "template_63bmji5",
        form.current,
        "QDxMsey5tbPkQMA8M"
      )
      .then(
        (result) => {
          setTimeout(() => {
            setOpen(false);
          }, 2000);
          setOpen(true);
          // setName("");
          // setAddress("");
          // setPhone("");
          // setEmail("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={style.wrapper}>
      <div className={style.footerNav}>
        <div className={style.left}>
          <Image width={190} height={190} src="/logo.png" />
          <div className={style.btnContainer}></div>
        </div>
        <div className={style.right}>
          <div className={style.col1}>
            <li
              className={style.list}
              onClick={() => props.onScroll("contact")}
            >
              HOME
            </li>
            <li className={style.list} onClick={() => props.onScroll("about")}>
              ABOUT US
            </li>
            <li
              className={style.list}
              onClick={() => props.onScroll("services")}
            >
              SERVICES
            </li>
          </div>
          <div className={style.col2}>
            <li
              className={style.list1}
              onClick={() => props.onScroll("investments")}
            >
              INVESTMENTS
            </li>
            <div>
              <li
                className={style.list1}
                onClick={() => props.onScroll("contact")}
              >
                CONTACT
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center justify-center font1 my-12 md:my-0">
        {Open && (
          <div className="bg-green-500 text-sm text-center px-4 md:px-5 py-1 md:py-1 text-white rounded">
            Your email sent successfully
          </div>
        )}
        <p className="font1 text-white my-2 text-xl md:text-xl">
          Sign up for newsletter
        </p>
        <form
          className="flex flex-col md:flex-row items-center justify-center mb-7"
          onSubmit={formSubmitHanlder}
          ref={form}
        >
          <input
            type="email"
            className="px-4 md:px-6 py-2 md:py-2 w-[80vw] md:w-[15vw] outline-none my-3 rounded"
            placeholder="Email..."
            name="from_email"
          />
          <button
            type="submit"
            className="bg-amber-400 text-black px-4 md:px-6 py-2 md:py-2 mx-3 my-2 w-[100%] md:w-auto hover:opacity-[0.85] rounded"
          >
            SEND
          </button>
          {/* <FooterModal opens={Open}/> */}
        </form>
      </div>
      <Signature />
    </div>
  );
};

export default Footer;
