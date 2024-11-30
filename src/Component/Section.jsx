import React from "react";
import img from "../assest/Group 33.png";
import logo from "../assest/Group 32.png";
import mmk from "../assest/Group 35.png";
import image from "../assest/Group 36.png";

function Section() {
  return (
    <main className="text-white bg-black p-8">
        <div className=" text-white bg-black flex justify-end">
      <div className="w-[474px] p-4">
        <h1 className="w-[400px] text-5xl mt-4">We Listen and Learn</h1>
        <p className="text-[16px] mt-4">
          Once you fly with us, we’ll meticulously document your preferences,
          including aircraft size and type, as well as any food allergies your
          family may have for catering.
        </p>
        <p className="mt-6 text-[16px]">
          This personalized approach ensures that each subsequent booking is
          seamless and effortlessly tailored to your needs.
        </p>
       
      </div>
      </div>
     
    
     <div className="flex flex-wrap justify-center md:justify-between text-white bg-black mt-8 gap-4 p-8 md:p-0">
     <img src={img} alt="Service 1" />
     <img src={logo} alt="Service 2" />
     <img src={mmk} alt="Service 3" />
     <img src={image} alt="Service 4" />
   </div>
   </main>
  );
}

export default Section;
