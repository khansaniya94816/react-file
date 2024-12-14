import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import logo from "../assest/image 1 (1).png";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";
import aria from "../assest/Group 68.png";
import { PiPhoneCall } from "react-icons/pi";
import { FaGooglePlusG } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinLight } from "react-icons/pi";
import image from "../assest/Group 69.png";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <img src={logo} alt="Altitude Logo" className="w-36 h-28 mb-4" />
          <div className="text-xl italic leading-5">
            <div>ALTITUDE</div>
            <div>CHARTER</div>
          </div>
          <div className="mt-8">
            <p className="text-base font-medium">Follow Us On:</p>
            <ul className="flex gap-4 mt-4">
              <li className="rounded-full p-2 border border-gray-500">
                <FaGooglePlusG fontSize="24px" />
              </li>
              <li className="rounded-full p-2 border border-gray-500">
                <TiSocialFacebook fontSize="24px" />
              </li>
              <li className="rounded-full p-2 border border-gray-500">
                <IoLogoTwitter fontSize="24px" />
              </li>
              <li className="rounded-full p-2 border border-gray-500">
                <TfiYoutube fontSize="24px" />
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-lg">
            <li className="hover:text-gray-400 cursor-pointer">Home</li>
            <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-400 cursor-pointer">Testimonial</li>
            <li className="hover:text-gray-400 cursor-pointer">Book a Flight</li>
          </ul>
          <div className="mt-6 flex flex-col items-center lg:items-start">
            <span className="text-base font-medium mb-2">Sponsored By</span>
            <img src={aria} alt="Sponsor Logo" className="w-40 h-14" />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-xl font-semibold mb-4">Reach Us Now</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <PiPhoneCall fontSize="25px" />
              <span>631 223 8839</span>
            </li>
            <li className="flex items-center gap-2">
              <TfiEmail fontSize="25px" />
              <span>contact@altitudecharter.com</span>
            </li>
          </ul>
          <h3 className="text-lg font-medium mt-6">United States</h3>
          <div className="flex items-start gap-2 mt-2">
            <PiMapPinLight fontSize="32px" />
            <p className="w-full lg:w-60">
              Altitude Charter LLC 300 Wheeler Rd, Suite 202 Hauppauge, NY
              11788
            </p>
          </div>
          <img
            src={image}
            alt="NBAA Logo"
            className="w-40 h-14 mt-4 lg:mt-6 mx-auto lg:mx-0"
          />
        </div>
      </div>

      <hr className="mt-10 mb-4 border-t border-gray-600" />
      <p className="text-center text-sm">
        © 2024 Altitude Charter | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
