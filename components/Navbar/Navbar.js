import React, { useState } from "react";
import useWindowSize from "../hooks/windowSize";
import DropDownMenu from "./DropDownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { on } from "events";
const Navbar = (props) => {
  const screenWidth = useWindowSize();
  const style = {
    wrapper: "absolute md:relative text-white w-[100%] lg:w-[75%] mx-auto",
    list: "cursor-pointer  block my-4 py-2 pr-4 pl-3 text-white  hover:bg-gray-50 md:hover:bg-transparent md:border-0 font-bold md:p-0 text-white  hover:text-white hover:bg-transparent border-gray-700 transition duration-[300ms] border-move-animation",
    listHome:
      "cursor-pointer block my-4 py-2 pr-4 pl-3 text-white  hover:bg-gray-50 md:hover:bg-transparent font-bold md:p-0 hover:text-white hover:bg-transparent border-gray-700 transition duration-[300ms]",
    reservation: `px-2 md:px-6 py-2 md:py-2 font-bold hover:bg-gray-50 border-gray-50 border-2 hover:border-transparent hover:text-gray-900 transition duration-[300ms] cursor-pointer ${
      screenWidth.width < 1024
        ? "bg-green-700 text-[#F2ECDE]"
        : "bg-transparent text-white"
    }`,
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSmallMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };
  const onScroll = (val) => {
    props.onScroll(val);
  };
  return (
    <div className={style.wrapper}>
      <nav className="border-green-700 px-2 sm:px-4 py-2.5 rounded bg-gray-50 md:bg-transparent border-b-[0.1px] ">
        <div className="container flex  justify-between items-center mx-auto flex-wrap">
          <a href="/" className="flex items-center scale-[1.1]">
            <img
              src={`${screenWidth.width > 1024 ? "/logo.png" : "/logomob.png"}`}
              className="h-12 md:h-20"
              alt="Flowbite Logo"
            />
          </a>
          <div className=" flex items-center md:order-2">
            <a
              className={style.reservation}
              // onClick={() => {
              //   onScroll("booking");
              // }}
              href="/contact"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact
            </a>
            {/* the hamburger button */}
            <button
              aria-label="Button to toggle mobile menu"
              onClick={handleSmallMenu}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className=" inline-flex items-center p-2 ml-1 text-xl text-gray-900  rounded-lg md:hidden hover:bg-gray-100 transtion duration-[300ms]"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <ImCross className={`${isMenuOpen && "flex"} text-green-700`} />
              ) : (
                <GiHamburgerMenu
                  className={`${isMenuOpen && "hidden"} text-green-700`}
                />
              )}
            </button>
          </div>
          {/* content for small screens menu open */}
          <div
            className={`w-full ${
              isMenuOpen ? "flex" : "hidden"
            } items-center justify-center`}
          >
            <DropDownMenu onScroll={onScroll} />
          </div>
          <div
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-md md:text-md tracking-wider ">
              <li>
                <a
                  aria-label="link of the navbar"
                  // onClick={() => {
                  //   onScroll("home");
                  // }}
                  href="/"
                  className={style.listHome}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  aria-label="link of the navbar"
                  // onClick={() => {
                  //   onScroll("about");
                  // }}
                  href="/"
                  className={style.list}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  aria-label="link of the navbar"
                  // onClick={() => {
                  //   onScroll("menu");
                  // }}
                  href="/menu"
                  className={style.list}
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
