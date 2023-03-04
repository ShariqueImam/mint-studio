import React from "react";
import SingleCounter from "./SingleCounter";

const style = {
  wrapper: "h-[40%]  flex justify-around my-6 flex-wrap font1",
  singleCounter: "flex flex-col items-center justify-center w-[45%] p-1",
  details: "text-primary text-sm sm:text-lg md:text-md",
};
const Counter = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.singleCounter}>
        <SingleCounter start={0} end={15} duration={0.5} />
        <p className={style.details}>Clients</p>
      </div>

      <div className={style.singleCounter}>
        <SingleCounter start={0} end={50} duration={1} />
        <p className={style.details}>Treatments Done</p>
      </div>
    </div>
  );
};

export default Counter;
