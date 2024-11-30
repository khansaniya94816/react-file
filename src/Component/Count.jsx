import React from "react";
import image1 from "../assest/Group 61.png";
import image2 from "../assest/Vector 1 (2).png";
import image3 from "../assest/Vector 2.png";
import image4 from "../assest/Group 62.png";
function Count() {
  return (
    <>
      <main className="p-10 text-white bg-black ">
        <div className="flex justify-between items-center mb-[-2%]">
          <h1 className="text-[64px]">Our Services</h1>
          <button className="border-white w-[161px] h-[48px] border-[0.5px] rounded-[20px]">
            Know More
          </button>
        </div>

        <div className="flex justify-between items-start gap-8 p-4">
          
          <div className="relative w-1/3 flex flex-col items-center">
          <img src={image2} alt="" className="absolute md:w-auto md:h-auto lg top-0 left-0  " />
            <img
              src={image1}
              alt="Concierge Services"
              className="relative w-[390px] h-[545px] mt-[32%] mr-8"
            />
          </div>
          <div className="w-1/3 space-y-4 mt-36 " style={{ fontFamily: "Jura, sans-serif" }}>
          <div className="">
              <p className="text-[16px]">Concierge Services</p>
              <h1 className="text-[25px] font-semibold">Ground Transportation</h1>
              <p className="text-[16px]">
                Altitude charter is happy to arrange door-to-door ground transportation at cost for any of our clients.
              </p>
            </div>
            <div className=" ml-20 mr-[-5%]" style={{marginTop:"90%"}}>
              <p className="text-[16px]">Concierge Services</p>
              <h1 className="text-[25px] font-semibold">Catering with Care</h1>
              <p className="text-[16px]">
                Altitude charter is happy to arrange any type of catering requested at cost for any of our clients. This
                includes catering from specific restaurants whenever possible.
              </p>
            </div>
          </div>
          <div className="relative w-1/3 flex flex-col items-center">
            <img src={image3} alt="" className="absolute top-0" />
            <img
              src={image4}
              alt="Transportation"
              className="relative w-[339px] h-[405px] mt-[108%] rounded-[75px] ml-16"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Count;
