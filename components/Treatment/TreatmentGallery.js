import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const style = {
  wrapper: "",
};
const ImageGalleryComponent = () => {
  return (
    <div className="flex">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image src={"/1.jpg"} height={100} width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/2.jpg"} height={100} width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/3.jpg"} height={100} width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/4.jpg"} height={100} width={400} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageGalleryComponent;
