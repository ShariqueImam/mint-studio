import React from "react";

const style = {
  para: "text-stone-300 flex text-sm sm:text-sm md:text-sm h-[50%] md:h-[70%] m-auto my-7 md:my-4 indent-0 tracking-wide w-[80%] sm:w-[100%] leading-3 font-extralight",
};
const InfrastructureContent = () => {
  return (
    <div className="flex w-full h-full flex-col mx-auto font">
      <section
        className="h-[30%] flex mx-auto"
        style={{ fontFamily: "Montserrat,serif" }}
      >
        <h1 className=" my-auto text-white flex text-4xl sm:text-3xl md:text-4xl text-center font-semibold">
          What we offer?
        </h1>
      </section>
      <h1 className="my-6 md:my-6 text-white flex text-3xl sm:text-2xl md:text-3xl text-center font-semibold">
        Ombre Powder Brows
      </h1>
      <p style={{ fontFamily: "Poppins,serif" }} className={style.para}>
        Before the procedure, the client should have a consultation with a
        licensed and experienced permanent makeup artist. During the
        consultation, the artist should discuss the client's desired look, skin
        tone, and any medical conditions that may affect the procedure.
      </p>
      <p style={{ fontFamily: "Poppins,serif" }} className={style.para}>
        Preparation: The client's skin should be cleaned and sterilized before
        the procedure. The artist should also apply a numbing cream to the area
        to minimize any discomfort.
      </p>
      <p style={{ fontFamily: "Poppins,serif" }} className={style.para}>
        Aftercare: The artist should provide the client with detailed aftercare
        instructions, which may include applying ointment to the treated area
        and avoiding exposure to the sun
      </p>
      <p style={{ fontFamily: "Poppins,serif" }} className={style.para}>
        Follow-up: The client should schedule a follow-up appointment with the
        artist to ensure that the pigmentation has healed properly and that the
        client is happy with the results.
      </p>
      <section className="flex items-center mt-8">
        <h2 className="text-xl text-white ">Price : </h2>
        <h2 className="text-2xl text-white mx-5 flex items-center">
          395 €
          <span className="text-sm mx-4">
            ( inclusif after treatment and intake )
          </span>
        </h2>
      </section>
    </div>
  );
};

export default InfrastructureContent;
