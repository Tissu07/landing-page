"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import BookCall from "../bookcall/BookCall";
import { SlArrowDown } from "react-icons/sl";
import About from "../about/About";
import { MdOutlineEmail } from "react-icons/md";
import Logo from "../companyLogo/Logo";

const Navbar = () => {
  const [shownav, setShownav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [bookCallVisible, setBookCallVisible] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [arrowRotate, setArrowRotate] = useState(false);

  const handleBookCallToggle = () => {
    setBookCallVisible((prevState) => !prevState);
    console.log(bookCallVisible);
    setShownav(false);
  };

  const handleBookCallClose = () => {
    setBookCallVisible(false);
  };

  useEffect(() => {
    if (bookCallVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [bookCallVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen ">
      <div
        className={`w-full px-4 flex justify-between text-white top-0 py-5 items-center fixed z-10 ${
          scroll ? "bg-black" : "bg-transparent"
        } transition duration-300`}
      >
        <div className="flex gap-9 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden md:block">
            <ul className="flex gap-8">
              <li
                onMouseEnter={() => {
                  setAboutModal(true);
                  setArrowRotate(true);
                }}
                onMouseLeave={() => {
                  setAboutModal(false);
                  setArrowRotate(false);
                }}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  About
                  <SlArrowDown
                    className={`transition ease-in-out duration-300 text-[13px] ${
                      arrowRotate ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </li>
              <li>
                <Link href="/Pages/Project">Projects</Link>
              </li>
              <li>
                <Link href="/Pages/services">Services</Link>
              </li>
              
            </ul>
            {aboutModal && (
              <div
                onMouseEnter={() => {
                  setAboutModal(true);
                  setArrowRotate(true);
                }}
                onMouseLeave={() => {
                  setAboutModal(false);
                  setArrowRotate(false);
                }}
              >
                <About />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center relative">
          {/* mobile view */}
          <div className="md:hidden flex items-center gap-8">
            <div
              className="bg-pink-400 p-1 cursor-pointer hover:scale-150 transition-all ease-in-out duration-300 group"
              onClick={handleBookCallToggle}
            >
              <MdOutlineEmail className="text-[25px]" />
            </div>
            <button
              className="text-[30px] text-gray-300 mr-3 cursor-pointer"
              onClick={() => setShownav(!shownav)}
            >
              <IoMdMenu />
            </button>
          </div>

          {!bookCallVisible && (
            <button
              className="bg-blue-900 py-2 px-5 text-[18px] hover:bg-transparent hover:border hover:border-blue-900 hover:text-blue-900 hidden md:block z-10"
              onClick={handleBookCallToggle}
            >
              Get in Touch
            </button>
          )}
        </div>
        {bookCallVisible && <BookCall onClose={handleBookCallClose} />}
      </div>

      {/* mobile nav */}

      {shownav && (
        <div className="md:hidden fixed z-30 bg-black top-16  w-full    flex flex-col justify-around py-2">
          <ul className="text-white text-center flex flex-col gap-2  text-2xl font-semibold">
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider mt-[-8px] py-2">
              <Link href="">About</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider py-2">
              <Link href="">Projects</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider py-2">
              <Link href="">Services</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider py-2">
              <Link href="">Contact Us</Link>
            </li>
          </ul>
          {/* <button
            className="bg-gradient-to-r mx-auto my-4 from-violet-400 font-semibold text-2xl to-pink-500 px-8  w-[80%] lg:w-[12rem] py-3 md:py-5 text-white md:text-xl rounded-md"
            onClick={handleBookCallToggle}
          >
            Get in Touch
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
