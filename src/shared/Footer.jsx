import React from "react";
import Logo from "../assets/Home/logo.png";
import { FaFacebookSquare, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] text-center pt-10">
      <div>
      <h1 className="text-2xl font-bold"><span className="bg-[#FF6300] px-2 text-white">L</span>ogo</h1>
      <div className="flex justify-center pt-3">
         
          <ul className="space-x-4 flex pt-6">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center flex text-3xl gap-3 justify-center">
      <FaFacebookSquare />
      <FaSquareInstagram />
      <FaTwitterSquare />
      <IoLogoLinkedin />
      </div>
      <div className="bg-[#545454] text-center py-6 mt-7 text-white">
      &copy; 2025 <span className="text-[#ff8538] font-semibold">Jakes</span> All Rights Reserved , bdcalling It.
      </div>
    </footer>
  );
};
