import React from "react";
import Image from "next/image";

const style = {
  wrapper:
    "md:my-8 lg:my-12 flex flex-col md:flex-row items-center justify-center mx-auto w-[75%] md:w-[70%] mx-auto",
  address: "md:w-[35%] my-6",
  center: "md:w-[25%] flex flex-col items-center justify-center my-6",
  contact: "md:w-[35%] my-6",
  ourAddress: "text-stone-100 text-sm md:text-md text-center",
  contactContent: "text-stone-100 text-sm md:text-md text-center",
  info: "text-stone-100 text-sm md:text-md text-center mt-5",
  heading: "text-white font-bold text-md md:text-lg text-center my-6",
};

const MainFooter = () => {
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.address}>
        <h2 className={style.heading}>Ons adres</h2>
        <h2 className={style.ourAddress}>
          Anna Paulownastraat 17,2518 BA Den Haag
        </h2>
      </div>
      <div className={style.center}>
        {/* logo */}
        <Image src="/logo.png" height="50" width="140" alt="logo" />
        <h2 className={style.info}>
          "Isaku-iki"betekent "dit is wat ik kan" in het Javaans en dat is
          precies wat je kunt verwachten bij Isaku-iki. Huub verwelkomt je
          persoonlijk in de zaak, terwijl Maria al haar culinaire vaardigheden
          gebruikt om de meest heerlijke gerechten te bereiden.
        </h2>
      </div>
      <div className={style.contact}>
        <h2 className={style.heading}>Contact</h2>
        <h2 className={style.contactContent}>Email : sharique@gmail.com</h2>
        <h2 className={style.contactContent}>Phone : 070-3920033</h2>
      </div>
    </div>
  );
};

export default MainFooter;
