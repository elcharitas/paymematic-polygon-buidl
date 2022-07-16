import { useState } from "react";
import { useSnackbar } from "react-simple-snackbar";

import { Link } from "../components";
import { useManager, useWallet } from "../hooks";
import {
  debounce,
  isNullAddress,
  parseNumber,
  getGravatar,
  sponsors,
  sponsorBg,
  formatAddress,
} from "../utils";

const Home = () => {
  const [snackbar] = useSnackbar();
  const [connectWallet] = useWallet();

  const [username, setUsername] = useState(null);
  const [checking, setChecking] = useState(false);
  const [reset, setReset] = useState(false);
  const [claimed, setClaimed] = useState(null);

  const { result } = useManager("payees", [username], {
    skip: !checking || !username,
    onReady(payee, username) {
      setReset(false);
      setClaimed(isNullAddress(payee) ? username : null);
    },
  });
  const { loading } = useManager(
    "claim",
    [claimed, { value: parseNumber(1) }],
    {
      sync: false,
      skip: checking || !username,
      onError(error) {
        setUsername(null);
        snackbar(error.message);
      },
    }
  );

  const handleUsernameCheck = ({ target }) => {
    setChecking(true);
    if (target.value.length < 3) return;
    debounce((value) => {
      if (checking) {
        setUsername(value);
        setReset(true);
      }
    }, 250)(target.value);
  };

  const handleClaimPage = async () => {
    await connectWallet();
    setChecking(false);
  };
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
              Join the train and receive matic. You&lsquo;d be surprised to
              learn how easy it is.
            </p>
            {checking && (
              <div className="text-primary text-center">
                <i
                  style={{ color: !claimed ? "red" : reset ? "grey" : "green" }}
                >
                  {!claimed
                    ? `🥲 This paypage has been claimed`
                    : reset
                    ? "checking if name is available"
                    : `Yippee *${claimed}* is not yet claimed`}
                  ...
                </i>
              </div>
            )}
            <div id="create" className="relative flex items-center">
              <div className="relative flex items-center w-full rounded-full border">
                <span className="ml-4 text-sm xl:text-xl 2xl:text-xxl">
                  paymematic.com/
                </span>
                <div className="relative w-full">
                  <input
                    onChange={handleUsernameCheck}
                    className="block w-full border-none outline-none text-black bg-transparent placeholder-black font-semibold leading-none text-sm xl:text-xl 2xl:text-xxl pr-6 remove-autocomplete-styles h-[64px]"
                    placeholder="yourname"
                    autoFocus
                  />
                </div>
                <button
                  className="inline-flex font-bold !leading-none whitespace-nowrap rounded-full outline-none transition-colors duration-200 text-sm sm:text-lg 2xl:text-xl py-4 px-[20px] xl:py-6 xl:px-7 text-white bg-secondary-5 absolute right-0 justify-center !p-0 items-center lg:w-auto right-2 xl:right-4 w-[46px] h-[46px] lg:!py-4 lg:!px-[20px] xl:!py-6 xl:!px-7"
                  disabled={loading || !isNullAddress(result)}
                  onClick={handleClaimPage}
                >
                  {loading && (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <g>
                        <g>
                          <path d="M109.641,324.332c-11.423,0-21.13,3.997-29.125,11.991c-7.992,8.001-11.991,17.706-11.991,29.129    c0,11.424,3.996,21.129,11.991,29.13c7.998,7.994,17.705,11.991,29.125,11.991c11.231,0,20.889-3.997,28.98-11.991    c8.088-7.991,12.132-17.706,12.132-29.13c0-11.423-4.043-21.121-12.132-29.129C130.529,328.336,120.872,324.332,109.641,324.332z" />
                          <path d="M100.505,237.542c0-12.562-4.471-23.313-13.418-32.267c-8.946-8.946-19.702-13.418-32.264-13.418    c-12.563,0-23.317,4.473-32.264,13.418c-8.945,8.947-13.417,19.701-13.417,32.267c0,12.56,4.471,23.309,13.417,32.258    c8.947,8.949,19.701,13.422,32.264,13.422c12.562,0,23.318-4.473,32.264-13.422C96.034,260.857,100.505,250.102,100.505,237.542z" />
                          <path d="M365.454,132.48c6.276,0,11.662-2.24,16.129-6.711c4.473-4.475,6.714-9.854,6.714-16.134    c0-6.283-2.241-11.658-6.714-16.13c-4.47-4.475-9.853-6.711-16.129-6.711c-6.283,0-11.663,2.24-16.136,6.711    c-4.47,4.473-6.707,9.847-6.707,16.13s2.237,11.659,6.707,16.134C353.791,130.244,359.171,132.48,365.454,132.48z" />
                          <path d="M109.644,59.388c-13.897,0-25.745,4.902-35.548,14.703c-9.804,9.801-14.703,21.65-14.703,35.544    c0,13.899,4.899,25.743,14.703,35.548c9.806,9.804,21.654,14.705,35.548,14.705s25.743-4.904,35.544-14.705    c9.801-9.805,14.703-21.652,14.703-35.548c0-13.894-4.902-25.743-14.703-35.544C135.387,64.29,123.538,59.388,109.644,59.388z" />
                          <path d="M439.684,218.125c-5.328-5.33-11.799-7.992-19.41-7.992c-7.618,0-14.089,2.662-19.417,7.992    c-5.325,5.33-7.987,11.803-7.987,19.421c0,7.61,2.662,14.092,7.987,19.41c5.331,5.332,11.799,7.994,19.417,7.994    c7.611,0,14.086-2.662,19.41-7.994c5.332-5.324,7.991-11.8,7.991-19.41C447.675,229.932,445.02,223.458,439.684,218.125z" />
                          <path d="M365.454,333.473c-8.761,0-16.279,3.138-22.562,9.421c-6.276,6.276-9.418,13.798-9.418,22.559    c0,8.754,3.142,16.276,9.418,22.56c6.283,6.282,13.802,9.417,22.562,9.417c8.754,0,16.272-3.141,22.555-9.417    c6.283-6.283,9.422-13.802,9.422-22.56c0-8.761-3.139-16.275-9.422-22.559C381.727,336.61,374.208,333.473,365.454,333.473z" />
                          <path d="M237.547,383.717c-10.088,0-18.702,3.576-25.844,10.715c-7.135,7.139-10.705,15.748-10.705,25.837    s3.566,18.699,10.705,25.837c7.142,7.139,15.752,10.712,25.844,10.712c10.089,0,18.699-3.573,25.838-10.712    c7.139-7.138,10.708-15.748,10.708-25.837s-3.569-18.698-10.708-25.837S247.636,383.717,237.547,383.717z" />
                          <path d="M237.547,0c-15.225,0-28.174,5.327-38.834,15.986c-10.657,10.66-15.986,23.606-15.986,38.832    c0,15.227,5.327,28.167,15.986,38.828c10.66,10.657,23.606,15.987,38.834,15.987c15.232,0,28.172-5.327,38.828-15.987    c10.656-10.656,15.985-23.601,15.985-38.828c0-15.225-5.329-28.168-15.985-38.832C265.719,5.33,252.779,0,237.547,0z" />
                        </g>
                      </g>
                    </svg>
                  )}
                  <span className="hidden lg:block">Claim Page</span>
                  {!loading && (
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
                  )}
                </button>
              </div>
            </div>

            <div className="flex mt-4 overflow-x-auto">
              <div className="flex justify-between">
                {sponsors.map(({ address, handle }) => (
                  <Link href={`/${handle}`} key={handle}>
                    <div className="bg-secondary-1 p-4 rounded-3xl mr-4">
                      <div
                        className="w-[257px] h-[220px] ml-[-5px] rounded"
                        style={{
                          backgroundColor:
                            sponsorBg[address.charAt(2)] ?? sponsorBg[3],
                          backgroundImage: `url(${getGravatar(address)})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                        }}
                      />
                      <p className="mt-3 text-sm leading-snug text-white xl:mt-4 xl:text-lg">
                        {handle} - {formatAddress(address)}
                      </p>
                    </div>
                  </Link>
                ))}
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
