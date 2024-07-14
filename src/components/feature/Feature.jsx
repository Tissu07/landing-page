
"use client";

import React, { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import Bar from "../simpleAnimationElement/Bar";
import ServiceModal from "../ServicePreview/ServiceModal";

function Feature() {
  const [showWeb, setShowWeb] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initialScrollPosition, setInitialScrollPosition] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeModal = () => {
    setShowWeb(false);
    document.body.style.overflow = '' // to reverse scroll effect when modal is closed.
  };
 // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (showWeb) {
        const maxScrollDistance = 300; 
        const currentScrollPosition = window.scrollY;
        const minScrollPosition = initialScrollPosition - maxScrollDistance;
        const maxScrollPosition = initialScrollPosition + maxScrollDistance;

        if (currentScrollPosition < minScrollPosition) {
          window.scrollTo(0, minScrollPosition);
        } else if (currentScrollPosition > maxScrollPosition) {
          window.scrollTo(0, maxScrollPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

   

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = '';
    };
  }, [showWeb, initialScrollPosition]);

  useEffect(() => {
    if (showWeb) {
      setInitialScrollPosition(window.scrollY);
    }
  }, [showWeb]);

  // scroll effect

  return (
    <div className="w-full pb-20 relative">
      <div className="text-lg text-white">
        <h1 className="text-5xl mb-10 text-center">Our services</h1>
      </div>
      {isClient && (
        <>
          <div
            className="absolute hidden md:block -top-64 -right-[35rem] h-full w-screen"
            style={{
              background:
                "radial-gradient(44.48% 44.48% at 50% 63%, rgba(191, 64, 191, 0.15) 0%, rgba(191, 64, 191, 0) 80%)",
            }}
          ></div>
          <div
            className="absolute hidden md:block -bottom-32 -left-[30rem] h-screen w-screen"
            style={{
              background:
                "radial-gradient(44.48% 44.48% at 50% 63%, rgba(191, 64, 191, 0.15) 0%, rgba(191, 64, 191, 0) 80%)",
            }}
          ></div>
        </>
      )}
      <div className="py-4 md:py-20 flex flex-col md:flex-row flex-wrap items-center justify-center gap-24 md:gap-14">
        <FeatureCard
          imgSrc="/images/web.png"
          heading="Web"
          paragraph="Content related to website development."
          onClick={() => {
            console.log("Web feature clicked");
            setShowWeb(true);
          }}
        />
        <FeatureCard
          imgSrc="/images/android.png"
          heading="Android"
          paragraph="Content related to Android development."
        />
        <FeatureCard
          imgSrc="/images/database.png"
          heading="SEO"
          paragraph="Content related to SEO strategies development."
        />
      </div>
      {showWeb && <ServiceModal closeModal={closeModal} />}
      {isClient && (
        <div className="absolute hidden md:block bottom-10 md:bottom-20 right-10">
          <Bar />
        </div>
      )}
    </div>
  );
}

export default Feature;

