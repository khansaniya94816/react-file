import React from "react";
import image from "../assest/image 5.png";

function Homepage() {
  return (
    <section className="bg-[white] rounded-[45px] p-8 lg:p-12">
      <div className="mb-6">
        <h1
          className="text-[36px] lg:text-[64px] leading-tight lg:w-[500px]"
          style={{ fontFamily: "Italiana, serif" }}
        >
          Welcome To Altitude Charter
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-[45px] w-full"
            src={image}
            alt="Charter"
          />
        </div>

        <div className=" p-6 rounded-[20px] text-black  w-full lg:w-[400px] lg:h-auto">
          <p className="text-base lg:text-lg leading-relaxed">
            Altitude Charter offers 37 years of charter experience. We have
            procured everything from 6-passenger turboprops to 300-passenger
            jumbo jets and everything in between. We not only know the best
            operators in the industry but also several of the individual
            aircraft.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
