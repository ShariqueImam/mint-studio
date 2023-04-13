import React from "react";
import Image from "next/image";
const style = {
  about: "w-[95%] md:w-[90%] mx-auto flex flex-col items-center justify-center",
  side1: "w-full md:w-[60%]  mx-auto",
  side2:
    "w-full md:w-[30%] md:scale-[1.3] flex items-center justify-center mx-auto hidden md:flex",
  details: "text-primary py-3 text-sm px-2 md:px-8",
  divider: "border-b-[1px] border-gray-200 p-2",
};
const About = (props) => {
  return (
    <div className={style.about} style={{ fontFamily: "Poppins,serif" }}>
      <div className="flex my-12 mx-auto">
        <div className={style.side1}>
          <p
            className={style.details}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Ontdek de echte smaken van Indonesië bij Isaku-iki, een klein
            familierestaurant en cateringbedrijf dat in 1998 werd opgericht door
            Huub en Maria. Het begon allemaal als een hobby - koken voor
            vrienden en familie - maar al snel groeide het uit tot een geweldig
            restaurant waar gasten uit alle hoeken van het land komen om te
            genieten van authentieke Indonesische gerechten.
          </p>
          <p
            className={style.details}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <strong>"Isaku-iki"</strong>
            betekent "dit is wat ik kan" in het Javaans en dat is precies wat je
            kunt verwachten bij Isaku-iki. Huub verwelkomt je persoonlijk in de
            zaak, terwijl Maria al haar culinaire vaardigheden gebruikt om de
            meest heerlijke gerechten te bereiden. De zaak is simpel, maar het
            eten is de ster van de show. Het menu is zorgvuldig samengesteld en
            omvat gerechten die vooral afkomstig zijn uit Midden-Java, de
            geboorteplaats van Maria (Semarang), zoals de beroemde Nasi Gudeg en
            Lontong Cap Gomeh.
            <br></br>
            <p className={style.details}></p>
            Maar ook andere delen van Indonesië worden vertegenwoordigd, zoals
            de smaakvolle Saté Manado uit Noord Sulawesi en de pittige Rendang
            uit Sumatra. En natuurlijk mag je de specialiteiten van Isaku-iki
            niet missen: Mie Ayam Bakso en Ayam Goreng Sukabumi, twee gerechten
            die je zeker moet proberen als je op zoek bent naar een
            onvergetelijke culinaire ervaring.
          </p>
        </div>
        <div className={style.side2}>
          <img
            src="/food.jpeg"
            alt=""
            className={style.img}
            style={{ clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 90%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
