import Head from "next/head";
import { Link } from "./Link";
import { useApp, useWallet } from "../hooks";

export const Header = ({ pageTitle }) => {
  const { accounts, title } = useApp();
  const [connectWallet, disconnectWallet] = useWallet();
  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>
      </Head>
      <div
        className="fixed bg-white z-10 py-5 inset-x-0 top-0 z-20 transition-all"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div
          className="relative max-w-[1240px] 2xl:max-w-[1472px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0"
          aria-label="Global"
        >
          <nav
            className="relative flex items-center justify-between rounded-full text-white px-4 py-3 bg-secondary-1"
            aria-label="Global"
          >
            <Link href="/" shallow className="flex items-center" role="button">
              <span className="logo">&nbsp;</span>
              <span className="ml-3">{title}</span>
            </Link>
            <div className="flex items-center -mr-1 hidden">
              <button
                className="inline-flex items-center justify-center p-2 text-white rounded-full bg-black focus:outline-none"
                type="button"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="items-center flex">
              <a
                onClick={connectWallet}
                className="inline-flex font-bold !leading-none whitespace-nowrap rounded-full outline-none transition-colors duration-200 text-sm xl:text-lg py-4 px-6 rounded-7xl text-white bg-secondary-5 py-3 px-3.5 xl:py-4 xl:px-6"
              >
                {accounts.length > 0 ? (
                  <>
                    <span className="xs:hidden">{accounts[0].address}</span>
                    <span className="md:hidden">
                      {accounts[0].address.substring(0, 3)}
                    </span>
                  </>
                ) : (
                  <span className="flex items-center">
                    <span className="xs:hidden">Connect Wallet &nbsp;</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <g xmlns="http://www.w3.org/2000/svg">
                        <path d="M27,10H6c-1.1,0-2-0.9-2-2s0.9-2,2-2h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H6C3.8,4,2,5.8,2,8v16c0,2.2,1.8,4,4,4h21   c1.7,0,3-1.3,3-3V13C30,11.3,28.7,10,27,10z M28,15.8v6.4c-0.3-0.1-0.6-0.2-1-0.2h-4c-1.7,0-3-1.3-3-3s1.3-3,3-3h4   C27.4,16,27.7,15.9,28,15.8z" />
                        <path d="M7,7C6.4,7,6,7.4,6,8s0.4,1,1,1h4c0,0,0,0,0,0s0,0,0,0h15c0.3,0,0.6-0.2,0.8-0.4c0.2-0.3,0.2-0.6,0.1-0.9l-2-5   c-0.2-0.5-0.8-0.8-1.3-0.6L10.8,7H7z" />
                        <path d="M25,18h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S25.6,18,25,18z" />
                      </g>
                    </svg>
                  </span>
                )}
              </a>
              {accounts.length > 0 && (
                <a className="px-3.5" onClick={disconnectWallet}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"
                      fill="white"
                    />
                  </svg>
                </a>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
