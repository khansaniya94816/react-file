import React from "react";
import Image from "../assest/Mask group.png";

function Main() {
  return (
    <main className="bg-white p-8 lg:p-16">
      <div className="mb-12 text-center" style={{ fontFamily: "Italiana, serif" }}>
        <h1 className="text-[32px] lg:text-[64px]">Flying with Altitude</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div
          className="w-full lg:w-1/3 flex flex-col items-end space-y-16 text-right mt-8 lg:mt-16"
          style={{ fontFamily: "Jura, sans-serif" }}
        >
          <div className="w-full lg:w-[280px]">
            <h1 className="text-[20px] lg:text-[25px] font-semibold">Seamless Flexibility</h1>
            <p className="text-[14px] lg:text-[16px]">
              We accommodate and execute last-minute changes effortlessly, ensuring a smooth experience.
            </p>
          </div>
          <div className="w-full lg:w-[280px]">
            <h1 className="text-[20px] lg:text-[25px] font-semibold">Exclusive Benefits</h1>
            <p className="text-[14px] lg:text-[16px]">
              Receive a $500 credit towards ground transportation or catering with your first flight.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <img
            src={Image}
            alt="Flying with Altitude"
            className="w-full max-w-[500px] h-auto rounded-lg mb-8"
          />
          <div
            style={{ fontFamily: "Jura, sans-serif" }}
            className="text-center w-full lg:w-[310px]"
          >
            <h1 className="text-[20px] lg:text-[25px] font-semibold">Decades of Expertise</h1>
            <p className="text-[14px] lg:text-[16px]">
              Over 37 years of private charter experience, setting the standard in personalized service.
            </p>
          </div>
        </div>

        <div
          className="w-full lg:w-1/3 flex flex-col items-start space-y-16 mt-8 lg:mt-16"
          style={{ fontFamily: "Jura, sans-serif" }}
        >
          <div className="w-full lg:w-[310px]">
            <h1 className="text-[20px] lg:text-[25px] font-semibold">Rapid and Reliable</h1>
            <p className="text-[14px] lg:text-[16px]">
              Get quotes in 2 hours, 24/7 availability, and book a flight in as little as 2 hours with expert
              international charter guidance.
            </p>
          </div>
          <div className="w-full lg:w-[310px]">
            <h1 className="text-[20px] lg:text-[25px] font-semibold">Personalized Service</h1>
            <p className="text-[14px] lg:text-[16px]">
              Enjoy one-on-one concierge-level care, speaking with a live consultant each time you call and working
              with the same expert for every booking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
