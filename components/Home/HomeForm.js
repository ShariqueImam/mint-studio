import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const HomeForm = () => {
  const style = {
    wrapper: "h-[100vh] w-[100vw] flex flex-col",
    heading:
      "text-4xl md:text-5xl lg:text-6xl text-white  my-2 md:my-3 w-[100%] md:w-[80%] text-center md:text-left font-semibold",
    para: "tracking-normal text-white text-md md:text-md my-3 md:my-8 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
    btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
    arrow: `text-xl`,
    btnContainer:
      "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white   text-gray-900 w-[80%] md:w-[30%] lg:w-[20%] px-4",
    mainContent:
      "w-[100%] md:w-[65%] h-[80%] flex flex-col items-start justify-center  mx-auto font1 my-12   md:my-24",
    input:
      "mb-3 md:mb-4 border-b-2 border-stone-500 w-[100%] ring-none outline-none",
    label: "mt-3 md:mt-4",
  };

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [isAllFilled, setisAllFilled] = useState(true);
  const router = useRouter();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const tokenWithWriteAccess =
    "skmhtHPLjRsHi6wvZALxgdAGzGX90jKTWTegYSBRnEEPXsfojk255N8f69hhqkRpw8yjoCtgkgscwu88n8LXaP60Fum8gspkNBONEN0FCRRc2qdwTkI6OugZX8v9HE9fIbx3QDdz3UUga56uf1rFZflWBMQeeu7vmmgLx0K9HlMimZHQ9CHn";
  const sendData = async () => {
    if (Name == "" || Email == "" || Phone == "") {
      setisAllFilled(false);
      return;
    }
    setisAllFilled(true);
    const { data } = await axios.post(
      `https://qhb9gr5x.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
      {
        mutations: [
          {
            create: {
              _type: "contact",
              createdAt: new Date().toISOString(),
              name: Name,
              email: Email,
              phone: Phone,
            },
          },
        ],
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${tokenWithWriteAccess}`,
        },
      }
    );
    router.push("/thank-you");
  };
  return (
    <section className="flex flex-col items-start">
      <label htmlFor="2" className={style.label}>
        Naam
      </label>
      <input
        type="text"
        className={style.input}
        // onChange={nameChangeHandler}
        // value={Name}
        // key="2"
      />
      <label htmlFor="3" className={style.label}>
        Email
      </label>

      <input
        type="text"
        className={style.input}
        // onChange={emailChangeHandler}
        // value={Email}
      />
      <label htmlFor="4" className={style.label}>
        Telefoon
      </label>
      <input
        type="text"
        className={style.input}
        // onChange={phoneChangeHandler}
        // value={Phone}
        // key="4"
      />
      {!isAllFilled && (
        <p className="text-red-500 text-sm my-3">
          * Please fill all the details above
        </p>
      )}
      <p className="text-xs font1">
        Ik ga ermee akkoord dat er contact met mij wordt opgenomen op de
        hierboven verstrekte gegevens
      </p>
      <button
        onClick={sendData}
        className="px-4 md:px-8 py-3 md:py-4 mt-6 md:mt-8 text-white bg-pink-700 hover:bg-opacity-[0.9] transition duration-[100ms] cursor-pointer mx-auto "
      >
        Ontvang mijn offerte
      </button>
    </section>
  );
};

export default HomeForm;
