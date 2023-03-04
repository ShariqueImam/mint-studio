import React from "react";
import Image from "next/image";
const Explain = () => {
  return (
    <div className="h-full w-full sm:w-[95%] md:w-[80%] h-[80%] flex mx-auto flex-col px-12 py-8 md:pb-24">
      <section className="m-auto h-[20%] flex py-7 md:py-12 items-center justify-center flex-col">
        <h2 className="text-3xl sm:text-5xl md:text-5xl text-gray-900 m-auto font-semibold my-8 font">
          RENTALS
        </h2>
        <p className="border-b-[6px] border-stone-400 w-[12vw] md:w-[4vw] "></p>
      </section>
      <div className="flex items-center justify-between flex-col md:flex-row flex-col-reverse ">
        <section className="flex w-[100%] sm:w-[50%] mx-auto md:h-[45vh] sm:h-[90%] my-6 sm:my-0 items-center justify-center">
          <Image src={"/svg1.jpg"} height={500} width={500} />
        </section>
        <section className="flex w-[100%] sm:w-[50%] flex-col">
          <section className="flex">
            <HeadingAndContent
              heading={"QUALITY RENTALS"}
              paragraph={
                "We enhance quality of living of our clients by providing them with fully furnished homes where they can live and prosper. We have  managers that will keep you informed and you can act with certainty. Also all of our rentals are fully insured so you can live without any kind of extra hussle."
              }
            />
          </section>
        </section>
      </div>
    </div>
  );
};

const HeadingAndContent = (props) => {
  return (
    <div className="flex flex-col h-full w-full font1 ">
      <h2 className="text-gray-900 text-2xl sm:text-xl md:text-4xl my-8 sm:my-8 md:my-12 text-center sm:text-left ">
        {props.heading}
      </h2>
      <p className="flex text-md sm:text-md md:text-lg leading-[1.5rem] text-gray-800">
        {props.paragraph}
      </p>
    </div>
  );
};
export default Explain;
