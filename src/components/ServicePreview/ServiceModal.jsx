"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { VscChromeClose } from "react-icons/vsc";

function ServiceModal({closeModal}) {
  const [show, setShow] = useState(true);
  return (
    
      <div className="w-screen flex justify-center">
        {show && 
      <div className="hidden md:flex flex-row justify-center z-40">
        <div className="w-[80%] h-[80%] bg-white absolute top-20 rounded-sm">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 min-w-full h-[100%] object-cover opacity-80  z-0"
          >
            <source
              src="https://cdn.pixabay.com/video/2023/02/11/150253-798222949_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-row h-12 justify-between  z-30">
            <p className="w-full text-center text-3xl  z-20 text-white py-2">
              {/* SUPER SIMPLE */}
            </p>
            <div className="px-4 text-4xl z-20 absolute right-2 text-white">
              <button className="py-2" onClick={closeModal}> <VscChromeClose /></button>
            </div>
          </div>
          <div className="flex flex-row z-20 ">
            <div className="p-4 w-1/2 z-20 ">
              {/* bg-[#6d58b973] */}
              <div className="bg-[#1F144C] text-white  p-2 z-20 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-lg  border-opacity-20 rounded-lg">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl  py-2 z-20">
                  Website Development
                </h1>
                <p className="py-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis modi est, placeat voluptatum iste alias, debitis,
                  nulla eligendi reiciendis eius ratione doloribus officia
                  labore molestias et magnam? Mollitia corrupti sunt blanditiis
                  numquam assumenda?{" "}
                  <span className="hidden lg:block">
                    Consectetur temporibus magnam error porro ullam nisi, ad cum
                    est, maxime vitae repellat quae molestiae dicta soluta
                    pariatur sequi tempora optio,
                  </span>
                  <span className="hidden xl:block">
                    quo fuga in enim aperiam. Reprehenderit sed quo quidem nam
                    laudantium atque aut laboriosam minus nobis blanditiis
                    inventore maxime, nulla a, quaerat
                  </span>
                </p>
              </div>

              <div className=" h-20 mt-6 border-4 border-[#1F144C] rounded-full flex flex-row z-10 ">
                <div className="m-1 text-center py-2  font-bold text-white h-[90%] bg-[#1F144C] w-1/3 rounded-l-full text-3xl">
                  100+
                  <span className="text-xs block text-center">websites</span>
                </div>

                <Link
                  href="/Pages/pricing"
                  className="m-1 p-4 text-center font-bold text-white text-2xl h-[90%] bg-[#222121] w-1/3 hover:cursor-pointer backdrop-filter backdrop-blur-lg shadow-lg"
                >
                  <div className="text-base lg:text-lg xl:text-2xl">
                    View Price
                  </div>
                </Link>
                <div className="m-1 py-2 text-center font-bold text-white text-3xl h-[90%] bg-[#1F144C] w-1/3 rounded-r-full">
                  50+
                  <span className="text-xs block text-center">customers</span>
                </div>
              </div>
            </div>

            <div className="relative left-2 lg:px-10 w-1/2 z-30">
              <div className="absolute left-4  lg:left-10   top-20 hover:top-10 transition w-[85%]">
                <a
                  href="https://petcare-tau.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="object-cover shadow-2xl"
                    src="/images/Projectt.JPG"
                    alt=""
                    priority={true}
                    width={500}
                    height={500}
                  />
                </a>
              </div>
              <div className="absolute left-4  lg:left-10 top-32 hover:top-24 transition w-[85%]">
                <a
                  href="https://nike-clone-three.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="object-cover pt-4 shadow-2xl"
                    src="/images/sumit_website.JPG"
                    alt=""
                    priority={true}
                    width={500}
                    height={500}
                  />
                </a>
              </div>
              <div className="absolute left-4  lg:left-10 top-52 hover:top-40 transition w-[85%]">
                <a
                  href="https://bid-bazaar-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="object-cover pt-4 shadow-2xl"
                    src="/images/Sumit_new.JPG"
                    alt=""
                    priority={true}
                    width={500}
                    height={500}
                  />
                </a>
              </div>
              <div className="absolute left-4 lg:left-10 top-72 hover:top-60 transition w-[85%]">
                <a
                  href="https://bid-bazaar-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="object-cover pt-4 shadow-2xl"
                    src="/images/Prabhat_Website.JPG"
                    alt=""
                    priority={true}
                    width={500}
                    height={500}
                  />
                </a>
              </div>
              <div className="absolute  lg:left-8 top-96 h-40 bg-[#1F144C] w-[95%] lg:w-[87%]  shadow-lg flex flow-row justify-center items-center rounded-md ">
                <div className="h-[90%] w-[95%] border border-dashed flex flex-row justify-center pt-4 rounded-md ">
                  {" "}
                  <div className="w-8 h-8 rounded-full bg-white "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}
      </div>

  );
}

export default ServiceModal;
