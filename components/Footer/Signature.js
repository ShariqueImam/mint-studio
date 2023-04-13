import React from "react";

const style = {
  wrapper:
    "bg-green-800 flex flex-col mx-auto items-center justify-center py-1 md:py-4",
  list: "block my-4 py-2 px-2 md:px-4 font-sm md:text-md text-gray-100 font-bold hover:text-[#EFC262]  transition duration-[300ms] hover:mx-4 transition-all duration-[300ms]",
  signatureContent: "text-stone-100 text-xs md:text-sm text-gray-400 py-2",
};
const Signature = () => {
  return (
    <div className={style.wrapper}>
      <ul
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="py-0 md:py-0 flex text-xs md:text-md tracking-wider "
      >
        <li>
          <a
            aria-label="Home"
            href="#"
            className={style.list}
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a aria-label="Pricing" href="/menu" className={style.list}>
            Menu
          </a>
        </li>
        <li>
          <a aria-label="Contact" href="/contact" className={style.list}>
            Contact
          </a>
        </li>
      </ul>

      {/* <div className={style.signatureContent} style={{ fontFamily: 'Poppins, sans-serif' }}>&#169; Ducky, Designed by <span className='text-[#EBB43D]'>Sharique </span></div> */}
      <div
        className={style.signatureContent}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        &#169;2023 Isaku-iki
      </div>
    </div>
  );
};

export default Signature;
