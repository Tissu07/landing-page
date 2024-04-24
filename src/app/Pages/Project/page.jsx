import "./projectspage.css";

function Projectpage() {
  return (
    <div className="mx-6 mt-10 sm:mx-40 lg:mx-20 text-gray-200 lg:mt-10" style={{background: "radial-gradient(44.48% 44.48% at 50% 50%, rgba(250, 117, 248, 0.26) 0%, rgba(250, 117, 248, 0) 100%)"}}>
      <p className="text-center text-2xl font-bold lg:text-5xl ">
        Projects Lorem, ipsum dolor.
      </p>
      <p className="text-center mt-2 text-lg lg:text-2xl lg:mx-40">
        Lorem ipsum dolor sit amet, consectetur
        <span className="hidden lg:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae.
        </span>
      </p>

      <div className="flex flex-col  lg:mt-20">
        <div className="mt-20 lg:mt-40 flex flex-col lg:flex-row gap-8 lg:ml-20">
          <div className="lg:w-1/2">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div class="relative lg:w-1/2">
            <img
              class="object-cover h-[12rem] w-full lg:h-[160%]"
              src="/images/project1.jpg"
              alt=""
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[160%]"></div>
          </div>
        </div>

        <div className="mt-20 lg:mt-56 hidden lg:flex flex-col lg:flex-row gap-20 lg:ml-20 ">
          <div class="relative lg:w-1/2">
            <img
              class="object-cover h-[12rem] w-full lg:h-full "
              src="/images/project1.jpg"
              alt=""
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black "></div>
          </div>
          <div className="lg:w-1/2 py-40 ">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="mt-20 lg:mt-40 flex flex-col lg:flex-row gap-8 lg:ml-20">
          <div className="lg:w-1/2">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div class="relative lg:w-1/2">
            <img
              class="object-cover h-[12rem] w-full lg:h-[160%]"
              src="/images/project1.jpg"
              alt=""
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[160%]"></div>
          </div>
        </div>

        <div className="mt-20 lg:mt-40 flex flex-col lg:flex-row gap-8 lg:ml-20 lg:hidden">
          <div className="lg:w-1/2">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div class="relative lg:w-1/2">
            <img
              class="object-cover h-[12rem] w-full lg:h-[160%]"
              src="/images/project1.jpg"
              alt=""
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[160%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;

