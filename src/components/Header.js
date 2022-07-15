import Head from "next/head";
import Link from "next/link";
import { useApp, useWallet } from "../hooks";

export const Header = () => {
  const { accounts, title } = useApp();
  const [connectWallet, disconnectWallet] = useWallet();
  return (
    <div className="fixed z-10 py-5 inset-x-0 top-0 z-20 transition-all">
      <div
        className="relative max-w-[1240px] 2xl:max-w-[1472px] mx-auto px-4 md:px-6 lg:px-10 xl:px-0"
        aria-label="Global"
      >
        <nav
          className="relative flex items-center justify-between rounded-full text-white px-8 py-3 bg-secondary-1"
          aria-label="Global"
        >
          <div className="flex items-center" role="button">
            <Link href="/">
              <>
                <span className="logo">&nbsp;</span>
                <span className="ml-4 xs:hidden">{title}</span>
              </>
            </Link>
          </div>
          <div className="flex items-center -mr-1 hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-white rounded-full bg-black hover:bg-primary-2 focus:outline-none"
              id="headlessui-popover-button-undefined"
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
              className="inline-flex font-bold !leading-none whitespace-nowrap rounded-full outline-none transition-colors duration-200 text-sm xl:text-lg py-4 px-6 rounded-7xl text-white bg-secondary-5 hover:bg-primary-2 py-3 px-3.5 xl:py-4 xl:px-6"
            >
              {accounts.length > 0 ? (
                ""
              ) : (
                <span>
                  <span className="xs:hidden">Connect Wallet</span>
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
  );
};
