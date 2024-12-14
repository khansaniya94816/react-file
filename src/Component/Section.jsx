import React from "react";
import img from "../assest/Group 33.png";
import logo from "../assest/Group 32.png";
import mmk from "../assest/Group 35.png";
import image from "../assest/Group 36.png";

function Section() {
  return (
    <main className="text-white bg-black p-8">
      <div className="flex flex-col md:flex-row md:justify-end items-center md:items-start text-center md:text-left">
        <div className="w-full md:w-[474px] p-4">
          <h1 className="text-3xl md:text-5xl mt-4">We Listen and Learn</h1>
          <p className="text-[14px] md:text-[16px] mt-4">
            Once you fly with us, we’ll meticulously document your preferences, including aircraft size and type, as well as any food allergies your family may have for catering.
          </p>
          <p className="mt-6 text-[14px] md:text-[16px]">
            This personalized approach ensures that each subsequent booking is seamless and effortlessly tailored to your needs.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-4 mt-8 p-8 md:p-0">
        <img src={img} alt="Service 1" className="w-[150px] md:w-[200px] h-auto" />
        <img src={logo} alt="Service 2" className="w-[150px] md:w-[200px] h-auto" />
        <img src={mmk} alt="Service 3" className="w-[150px] md:w-[200px] h-auto" />
        <img src={image} alt="Service 4" className="w-[150px] md:w-[200px] h-auto" />
      </div>
    </main>
  );
}

export default Section;
