import React from "react";
import "./feature.css";

function FeatureCard({ imgSrc, heading, paragraph, onClick }) {
  return (
    <div className="w-80 md:my-0 border-b-2 border-r-2 border-blue-900 relative border-l-2 p-4 rounded-md">
      <img
        className="h-20 feature-img w-20 absolute -top-10 left-[7.5rem] object-cover"
        src={imgSrc}
        alt="feature image"
      />
      <div className="my-14">
        <h1 className="text-center text-white text-xl">{heading}</h1>
        <p className="text-center pt-3 px-2 text-white">{paragraph}</p>
      </div>
      <div
        className="shadow-inner border-blue-900 border-2 p-2 text-white rounded-md flex justify-between hover:cursor-pointer hover:bg-blue-900"
        onClick={onClick}
      >
        <h1>{heading}</h1>
        <div className="w-4 h-4 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#74C0FC"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
