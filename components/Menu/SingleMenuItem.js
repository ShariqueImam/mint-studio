import React from "react";

const style = {
  wrapper:
    "flex items-start border-b-2 border-dotted border-gray-400 w-[100%] md:w-[45%]",
  side1: "flex flex-col flex-1 mb-6 mt-3",
  side2: "flex",
  name: "text-white font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl tracking-wide",
  detail: "text-green-50 my-1 text-md md:text-xl",
};
const SingleMenuItem = ({ item }) => {
  return (
    <div className={style.wrapper}>
      {/* side 1 */}
      <div
        className={style.side1}
        style={{ fontFamily: "Yeseva One, sans-serif" }}
      >
        <h2 className={style.name}>{item.name}</h2>
        {item.items &&
          item.items.map((i) => {
            let parts = i.split("%");
            return (
              <section className="mr-3 md:mr-8">
                <p
                  className={style.detail}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {parts[0]}
                </p>
                <p
                  className="text-gray-200 text-xs"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {parts[1]}
                </p>
              </section>
            );
          })}
      </div>
      {/* <div className={style.side2}>
        <h2 className={style.price} style={{ fontFamily: "Kristi, cursive" }}>
          Rs{price}
        </h2>
      </div> */}
    </div>
  );
};

export default SingleMenuItem;
