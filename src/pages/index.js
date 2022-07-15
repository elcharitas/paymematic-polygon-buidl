import { useApp } from "../hooks";

const Home = () => {
  const { title } = useApp();
  return (
    <section className="my-16">
      <div className="relative max-w-[756px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0 px-0">
        <div className="p-8 px-4 my-16 items-center justify-between">
          <h1 className="font-black text-5xl mt-4 tracking-wide mx-auto text-center">
            Sell Whatever You Want! 😁
          </h1>
          <p className="pb-10 p-8 text-lg text-center mx-auto leading-snug">
            Join the train and receive matic. You'd be surprised to learn how
            easy it is.
          </p>
          <div className="relative flex items-center">
            <div className="relative flex items-center w-full rounded-full border">
              <div className="relative w-full">
                <input
                  type="number"
                  className="block w-full border-none outline-none text-black bg-transparent placeholder-black font-semibold leading-none text-base xl:text-xl 2xl:text-xxl px-6 xl:px-10 remove-autocomplete-styles h-[64px]"
                  placeholder="/yourname"
                  name="amount"
                />
              </div>
              <button className="inline-flex font-bold !leading-none whitespace-nowrap rounded-full outline-none transition-colors duration-200 text-base sm:text-lg 2xl:text-xl py-4 px-[20px] xl:py-6 xl:px-7 text-white bg-secondary-5 absolute right-0 justify-center !p-0 items-center lg:w-auto right-2 xl:right-4 w-[46px] h-[46px] lg:!py-4 lg:!px-[20px] xl:!py-6 xl:!px-7">
                <span className="hidden lg:block">Claim Page</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
