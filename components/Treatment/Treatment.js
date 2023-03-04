import React from "react";
import TreatmentContent from "./TreatmentContent";
import styled from "styled-components";
import CityGallery from "./TreatmentGallery";
// skew-x-[-45deg]
const Infrastructure = () => {
  const InfrastructureBackground = styled.div`
    background: radial-gradient(#9d174d, #9d174d);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
  `;
  const style={
    gallery: "w-[90%] md:w-[50%] mx-auto py-8 md:py-0",


  }
  return (
    <InfrastructureBackground className="flex w-full flex-col-reverse sm:flex-row px-4 md:px-16 py-16 md:py-24">
      {/* left side of the section for img */}
      {/* <section className="flex w-[100%] sm:w-[50%] h-[50%] sm:h-[100%]  scale-[0.9] md:scale-[1] mx-8"> */}
      <section className={style.gallery }>
        {/* <img src={cityimg} width={500} height={500} /> */}
        <CityGallery />
      </section>
      {/* right side for the content */}
      <section className="flex w-[100%] sm:w-[40%] h-[80%] sm:h-[100%]">
        <TreatmentContent />
      </section>
    </InfrastructureBackground>
  );
};

export default Infrastructure;
