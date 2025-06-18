"use client";
import React from "react";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const content = [
  {
    id: "1",
    title: "RESTAURANT",
    text: "Cuisine d'ici et d'ailleurs",
    imgSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/l0ekp54asdehj5bpbgpg",
  },
  {
    id: "2",
    title: "DINING",
    text: "Savor exquisite flavors in a luxurious setting, perfect for intimate dinners and celebrations",
    imgSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/dokdf9zslixvlabjkfu3",
  },
  {
    id: "4",
    title: "CLUB",
    text: "Dance the night away with electrifying DJ shows, bringing vibrant energy to your evenings at Le Palace",
    imgSrc:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/lesnfxobfrjphllm8gom",
  },
];

const Slides = () => {
  return (
    <div id="slides" className="relative w-full h-full">
      <div className="w-full h-full flex justify-center items-start">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          freeMode={true}
          modules={[FreeMode, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className=""
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item.imgSrc}
                width={800}
                height={800}
                loading="lazy"
                className="object-cover w-full h-[50vh] rounded-md"
                alt={`le palace ${index}`}
              />
              <div className="absolute  bottom-12 text-background w-full flex justify-start items-start gap-2 px-5">
                <div className="w-full flex flex-col justify-center items-start">
                  <span className="font-light">{item.title}</span>
                  <span className="text-[14px] leading-[20px]">
                    {item.text}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev-ex1 grid place-content-center left-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowBackIos size={28} />
          </button>
          <button className="swiper-button-next-ex1 grid place-content-center right-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
            <MdOutlineArrowForwardIos size={28} />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default Slides;
