import React from "react";
import Slides from "./Slides";
import BookingForm from "./BookingForm";

const Container = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-6 pt-0 pb-20 lg:pb-0">
      <div className="w-full lg:w-[65%]">
        <Slides />
      </div>
      <div className="w-full lg:w-[35%] h-full">
        <BookingForm />
      </div>
    </div>
  );
};

export default Container;
