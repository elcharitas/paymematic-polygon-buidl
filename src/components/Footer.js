import { Link } from "./Link";
import { useApp } from "../hooks";

export function Footer() {
  const { title } = useApp();
  return (
    <div className="px-4 py-12 md:px-0 bg-black border-gray-2 text-white">
      <div className="mt-5 text-xs text-center xl:mt-8 xl:text-base">
        <div className="mt-8 mb-4 justify-center items-center">
          <Link
            href="/#create"
            className="inline-flex font-bold !leading-none whitespace-nowrap rounded outline-none transition-colors duration-200 text-sm xl:text-lg py-4 px-6 rounded-full text-white bg-secondary-5 py-4 px-6 ml-4 justify-center items-center"
          >
            Create a PayPage - It&lsquo;s Free
          </Link>
          <div className="p-4">Get your personalized pay page in minutes.</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto w-[257px]">
            <div className="flex my-4 justify-between">
              <span>
                built by &nbsp;
                <Link href="/" className="text-secondary-3">
                  elcharitas
                </Link>
              </span>
              <Link href="/">Github</Link>
              <Link href="/">Twitter</Link>
            </div>
          </div>
          <div className="mx-auto w-[257px] xs:hidden">
            <div className="flex my-4 justify-between">
              <Link href="/">{title}</Link>
              <Link href="/#privacy">Use Cases</Link>
              <Link href="/#privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
