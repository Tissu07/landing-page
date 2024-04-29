import "./projectspage.css";
import Image from "next/image";

function Projectpage() {
  return (
    <div className="mx-4 mt-10 sm:mx-40 md:mx-20 text-gray-200 md:mt-10 md:pb-[10rem]">
      <p className="md:text-center mx-4 text-3xl font-bold lg:text-5xl pb-3">
        Projects
      </p>
      <p className="md:text-center mt-2 mx-4 text-lg lg:text-2xl md:mx-40 md:mb-[-30px]">
        Awesome Projects made by our developers
      </p>

      <div className="flex flex-col mx-4 md:mt-20 md:px-[5%]">
        <div className="mt-20 flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">
              PetCare
            </p>
            <p className="my-8 text-lg lg:text-xl">
              Welcome to Pet Care, your premier destination for all things pets! From helpful 
              care guides to heartwarming adoption stories. We&apos;re here to celebrate the joy and 
              companionship that our furry friends bring.
            </p>
            <a href="https://petcare-tau.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 relative bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Click
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
              </button>
            </a>
          </div>

          <div className="relative">
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto"
              src="/images/Projectt.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>

        <div className="mt-20 md:mt-60 flex flex-col md:flex-row-reverse md:justify-between">
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">
              Bid-Bazar
            </p>
            <p className="my-8 text-lg lg:text-xl">
              A platform where buyers and sellers can congregate for the purpose of seamless bidding and selling across a wide spectrum of items.
            </p>
            <a href="https://bid-bazaar-frontend.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 relative bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Click
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
              </button>
            </a>
          </div>

          <div className="mt-4 relative">
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto"
              src="/images/Prabhat_Website.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>

        <div className="mt-20 md:mt-60 flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">
              LeashPay
            </p>
            <p className="my-8 text-lg lg:text-xl">
              Regardless of the size of your business, LeashPay offers everything software and API needed to build a world-class payments experiences.
            </p>
            <a href="https://leashpay.netlify.app" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 relative bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Click
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
              </button>
            </a>
          </div>

          <div className="relative">
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto"
              src="/images/zack_website.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>

        <div className="mt-20 md:mt-60 flex flex-col md:flex-row-reverse md:justify-between">
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">
              Nike Store
            </p>
            <p className="my-8 text-lg lg:text-xl">
              This is a full fledged Nike store that helps the consumer to buy the products they want
            </p>
            <a href="https://nike-clone-three.vercel.app" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 relative bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Click
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
              </button>
            </a>
          </div>

          <div className="mt-4 relative">
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto"
              src="/images/Sumit_new.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projectpage;
