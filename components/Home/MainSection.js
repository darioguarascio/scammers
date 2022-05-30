import Image from "next/image";

const MainSection = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-5 md:py-10 lg:py-24 overflow-x-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full md:w-2/3 lg:w-1/2 ">
              <div className="py-6 lg:pr-32">
                <div className="mb-4">
                  <h2 className="text-6xl text-gray mt-3 font-bolder">
                    Help us reduce scammer activity
                  </h2>
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Let&apos;s hep to reduce the victim by collectively
                    contribute to put together piece of info to try to get an ID
                    of a Scammer
                  </p>
                </div>
                <div className="flex items-center my-4">
                  <a
                    className="mr-2 inline-block px-7 py-4 text-sm text-blue-600 hover:text-[blue-700] font-semibold leading-none border border-blue-600 rounded-md"
                    href="#"
                  >
                    Scammer List
                  </a>
                  <a
                    className="mr-2 bg-red-400 inline-block px-7 py-4 text-sm text-white font-semibold leading-none border border-red-400 rounded-md"
                    href="#"
                  >
                    Report a Scam
                  </a>
                </div>
                <ul className="text-gray-700 font-medium text-xs flex items-center gap-3">
                  <li className="flex items-center gap-1">
                    <div className="text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Lorem</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Lorem</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Lorem Ipsum</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 lg:w-1/2 my-12 lg:my-0">
              <div className="w-full text-center font-medium text-gray-600 text-sm">
                <div className="h-[400px] w-full block relative">
                  <Image
                    src={"/assets/img/background.svg"}
                    layout="fill"
                    className="object-contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
