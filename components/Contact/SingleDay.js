import React from "react";

const style = {
  wrapper:
    "flex border-b-2 border-gray-400 border-dotted my-3 mx-2 md:mx-8 my-6 lg:my-2",
  day: "text-gray-900 flex-1 text-sm my-1",
  time: "text-gray-900 text-sm my-1",
};
const SingleDay = ({ day, time }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.day}>{day}</h2>
      <h2 className={style.time}>{time}</h2>
    </div>
  );
};

export default SingleDay;
