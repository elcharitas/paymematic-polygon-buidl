import { Link } from "./Link";
import { formatAddress, getGravatar, isNullAddress, sponsorBg } from "../utils";

const Sponsor = ({ sponsor, address }) => {
  return (
    <Link href={`/${sponsor}`}>
      <div className="bg-secondary-1 p-4 rounded-3xl mr-4">
        <div
          className="w-[257px] h-[220px] ml-[-5px] rounded"
          style={{
            backgroundColor: sponsorBg[address.charAt(2)] ?? sponsorBg[3],
            backgroundImage: `url(${getGravatar(address)})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
        <p className="mt-3 text-sm leading-snug text-white xl:mt-4 xl:text-lg">
          @{sponsor} {!isNullAddress(address) && `- ${formatAddress(address)}`}
        </p>
      </div>
    </Link>
  );
};

export { Sponsor };
