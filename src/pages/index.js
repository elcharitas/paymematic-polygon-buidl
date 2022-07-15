import Image from "next/image";
import { useApp } from "../hooks";

const Home = () => {
  const { title } = useApp();
  return (
    <>
      <section className="my-16">
        <div className="relative max-w-[756px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0 px-0">
          <div className="p-8 px-4 my-16 items-center justify-between">
            <h1 className="font-black text-5xl mt-4 tracking-wide mx-auto text-center">
              <mark className="bg-secondary-5 text-white px-4 rounded">
                WHATEVER
              </mark>
              <br /> You Want! Sell It! 😁
            </h1>
            <p className="pb-10 p-8 text-lg text-center mx-auto leading-snug">
              Join the train and receive matic. You'd be surprised to learn how
              easy it is.
            </p>
            <div id="create" className="relative flex items-center">
              <div className="relative flex items-center w-full rounded-full border">
                <span className="ml-4 text-sm xl:text-xl 2xl:text-xxl">
                  paymematic.com/
                </span>
                <div className="relative w-full">
                  <input
                    className="block w-full border-none outline-none text-black bg-transparent placeholder-black font-semibold leading-none text-sm xl:text-xl 2xl:text-xxl pr-6 remove-autocomplete-styles h-[64px]"
                    placeholder="yourname"
                    autoFocus
                  />
                </div>
                <button
                  className="inline-flex font-bold !leading-none whitespace-nowrap rounded-full outline-none transition-colors duration-200 text-sm sm:text-lg 2xl:text-xl py-4 px-[20px] xl:py-6 xl:px-7 text-white bg-secondary-5 absolute right-0 justify-center !p-0 items-center lg:w-auto right-2 xl:right-4 w-[46px] h-[46px] lg:!py-4 lg:!px-[20px] xl:!py-6 xl:!px-7"
                  disabled
                >
                  <span className="hidden lg:block">Claim Page</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="md:hidden"
                  >
                    <g>
                      <path d="M22.23,61.11H14.37A11.53,11.53,0,0,1,2.86,49.59v-35A11.52,11.52,0,0,1,14.37,3.11h7.86a4.5,4.5,0,1,1,0,9H14.37a2.52,2.52,0,0,0-2.51,2.51v35a2.52,2.52,0,0,0,2.51,2.52h7.86a4.5,4.5,0,1,1,0,9Zm-7.86-56a9.53,9.53,0,0,0-9.51,9.51v35a9.53,9.53,0,0,0,9.51,9.52h7.86a2.5,2.5,0,1,0,0-5H14.37a4.52,4.52,0,0,1-4.51-4.52v-35a4.51,4.51,0,0,1,4.51-4.51h7.86a2.5,2.5,0,1,0,0-5Z" />
                      <path d="M44.11,49.07a5,5,0,0,1-3.54-8.53l3.5-3.5h-23a5,5,0,0,1,0-10H43.93l-3.36-3.36a5,5,0,0,1,7-7.09l12,11.89a5,5,0,0,1-.08,7.19L47.64,47.61A5,5,0,0,1,44.11,49.07Zm-23-20a3,3,0,0,0,0,6H46.49a1,1,0,0,1,.7,1.7L42,42a3,3,0,0,0,0,4.24,3.06,3.06,0,0,0,4.24,0l12-12a3,3,0,0,0,.06-4.33L46.22,18A3,3,0,0,0,42,22.26l5.06,5.07a1,1,0,0,1,.22,1.09,1,1,0,0,1-.93.62Zm40.07,3h0Z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex mt-4 overflow-x-auto">
              <div className="flex justify-between">
                <div className="bg-secondary-1 p-4 rounded-3xl mr-4">
                  <div className="w-[257px] h-[220px] ml-[-5px] bg-secondary-5 rounded" />
                  <p className="mt-3 text-sm leading-snug text-white xl:mt-4 xl:text-lg">
                    0xdeadbeef
                  </p>
                </div>
                <div className="bg-secondary-1 p-4 rounded-3xl mr-4">
                  <div className="w-[257px] h-[220px] ml-[-5px] bg-secondary-5 rounded" />
                  <p className="mt-3 text-sm leading-snug text-white xl:mt-4 xl:text-lg">
                    0xdeadbeef
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-gray-2 xl:mt-14">
        <div className="relative max-w-[1240px] 2xl:max-w-[1472px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0 py-14 flex flex-col grid-cols-12 gap-x-10 2xl:grid">
          <div className="col-start-2 col-end-12  text-center">
            <p className="font-black text-base text-gray-4 uppercase">
              Donations
            </p>
            <h2 className="font-black text-4xl max-w-[480px] px-6 pb-10 mx-auto">
              Give your audience an easy way to say thanks
            </h2>
            <div
              style={{
                height: "600px",
                background: "url(/static/images/banner1.png)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              &nbsp;
            </div>
          </div>
        </div>
        <div className="relative max-w-[1240px] 2xl:max-w-[1472px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0 py-14 flex flex-col grid-cols-12 gap-x-10 2xl:grid">
          <div className="col-start-2 col-end-12 text-center">
            <p className="font-black text-base text-gray-4 uppercase">
              Sales Generation
            </p>
            <h2 className="font-black text-4xl max-w-[480px] px-6 pb-10 mx-auto">
              Accept matic with your own page
            </h2>
            <div
              style={{
                height: "600px",
                background: "url(/static/images/banner2.png)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
