import Link from "next/link";

const ErrorPage = () => (
  <div
    className="flex justify-center items-center my-16"
    style={{ height: "400px" }}
  >
    <div className="text-black text-center">
      <h2 className="font-black text-5xl ">🥳 It&lsquo;s available!</h2>
      <p className="mt-4">
        Hurry up! This page could not be resolved - this means no one&lsquo;s
        claimed it yet 🥰
      </p>
      <div className="mt-4">
        <Link href="/">
          <button className="inline-flex font-bold !leading-none whitespace-nowrap rounded outline-none transition-colors duration-200 text-sm xl:text-lg py-4 px-6 rounded-full text-white bg-secondary-5  py-4 px-6 ml-4 justify-center items-center">
            Claim this Page
          </button>
        </Link>
      </div>
    </div>
  </div>
);

ErrorPage.title = "Page not Found!";

export default ErrorPage;
