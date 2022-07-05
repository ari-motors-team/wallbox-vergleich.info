import { useState, useEffect } from "react";
import { trackEvent } from "@phntms/next-gtm";
import { useRouter } from "next/router";

import Form from "./Form";
import Modal from "../core/Modal";

function ButtonAnfragen({ carItem }) {
  /* HOOKS */

  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Modal open={open} setOpen={setOpen}>
        <div className="">
          <Form open={open} setOpen={setOpen} carItem={carItem} />
        </div>
      </Modal>

      <button
        id="jetzt anfragen"
        onClick={() => {
          setDisabled(true);
          setOpen(true);
        }}
        onSubmit={() => setOpen(false)}
        className={
          router.pathname == "/activeCompare"
            ? "relative bg-orange-lighter transition hover:bg-yellow-light text-blue-dark font-bold text-sm md:text-base xl:tracking-wide rounded  h-8 sm:h-10 disabled:bg-grey-light mx-1 flex justify-center items-center px-4"
            : "relative bg-orange-lighter transition hover:bg-yellow-light text-blue-dark font-bold text-sm xl:tracking-wide rounded w-32 md:w-44 h-8 sm:h-10 disabled:bg-grey-light"
        }
      >
        Jetzt anfragen
      </button>
    </div>
  );
}
export default ButtonAnfragen;
