import Link from "next/link";
import { useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { Sponsor } from "../../components";
import { useApp, useManager, useWallet } from "../../hooks";
import {
  formatAddress,
  isNullAddress,
  manager,
  parseNumber,
} from "../../utils";

export async function getServerSideProps({ params }) {
  const contract = await manager({ sync: true });
  const payee = await contract.payees(params.username);

  return {
    props: {
      payee,
      ...params,
    },
    notFound: isNullAddress(payee),
  };
}

const UserPage = ({ payee, username, amount = 1 }) => {
  const { title } = useApp();
  const [snackbar] = useSnackbar();

  const [value, setValue] = useState(amount);
  const [sending, setSending] = useState(false);

  const { result } = useManager(
    "makePayment",
    [username, { value: parseNumber(value) }],
    {
      sync: false,
      skip: !sending,
      onReady() {
        setSending(false);
      },
      onError(err) {
        setSending(false);
        snackbar(err?.data?.message || err.message);
      },
    }
  );

  return (
    <>
      <div
        className="flex justify-center items-center my-16"
        style={{ minHeight: "800px" }}
      >
        <div className="text-black text-center">
          <div className="flex justify-between">
            <Sponsor className="mx-auto" sponsor={username} address={payee} />
          </div>
          <p className="mt-4">
            {title} makes it easy to send <strong>{value} Matic</strong>&nbsp;
            to {formatAddress(payee)}
          </p>
          <div className="p-4 pb-0">
            <p className="pb-2">Select a different amount</p>
            <select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="border rounded px-4"
            >
              <option value="0.5">0.5 Matic</option>
              <option value="1">1 Matic</option>
              <option value="10">10 Matic</option>
              <option value="25">25 Matic</option>
              <option value="50">50 Matic</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              disabled={sending}
              onClick={() => setSending(true)}
              className="inline-flex font-bold !leading-none whitespace-nowrap border border-primary-1 outline-none transition-colors duration-200 text-sm xl:text-lg py-4 px-6 rounded-full text-white bg-secondary-5  py-4 px-6"
            >
              SEND {value} Matic
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
