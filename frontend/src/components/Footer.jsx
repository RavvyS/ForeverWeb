import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Forever is your ultimate fashion destination, offering a curated
            selection of trendy and timeless apparel for every occasion. Our
            commitment to quality, style, and customer satisfaction ensures that
            you always look and feel your best.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+-123-456-7890</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-400" />
        <p className="text-center text-gray-500 text-sm py-5">
          &copy; 2026 Forever. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
