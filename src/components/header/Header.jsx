"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const key = "nI4q8pGvBqtTV2l2qtnl_j2AKAr6LH9mHXNCl4pU1P4";
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/?client_id=${key}`
        );
        setImage(response.data[0].urls.regular);
      } catch (error) {
        console.log("Error in fetching image from unsplash", error);
      }
    };
    fetchImage();
  });

  return (
    <div className="bg-violet-200 py-[7%] w-screen">
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-[37px] md:text-[5rem] font-medium">
          The Fastest Software
        </h1>
        <h1 className="text-[37px] md:text-[5rem] font-medium mt-[-5px] md:mt-[-30px]">
          Service Ever Made
        </h1>
        <p className="text-[19px] font-medium md:text-[23px] mt-5">
          AI Powered Softwares for all companies
        </p>
        <p className="text-[19px] font-medium md:text-[23px] mt-2">
          Get your product ready in
        </p>
        <p className="text-[19px] font-medium md:text-[23px] mt-2">
          less than a month
        </p>
      </div>
      <div className="flex justify-center mt-7">
        <button className="bg-gradient-to-r from-violet-400 to-pink-500 px-8 w-[80%] md:w-[10em] py-3 text-white rounded-md">
          Get Started
        </button>
      </div>
      <div className="flex justify-center mt-[30px] p-8 overflow-x-hidden">
        {image && (
          <Image
            src={image}
            alt="unsplash-image"
           
            quality={100}
            width={1000}
            height={500}
            className="rounded-md object-cover"
            priority={true}
          />
        )}
      </div>
    </div>
  );
};

export default Header;