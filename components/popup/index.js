import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
export default function MyModal() {
  const [open, setOpen] = useState(false);
  const aaaa = 1000 * 60;
  const datenow = new Date().getTime();
  const result = datenow + aaaa;
  useEffect(() => {
    var a = localStorage.getItem("_pp");
    if (a === undefined) {
      localStorage.setItem("_pp", result);
      a = localStorage.getItem("_pp");
    } else if (a === "undefined") {
      localStorage.setItem("_pp", result);
      a = localStorage.getItem("_pp");
    } else if (a === "null") {
      localStorage.setItem("_pp", result);
      a = localStorage.getItem("_pp");
    } else if (a === null) {
      localStorage.setItem("_pp", result);
      a = localStorage.getItem("_pp");
    }
    var b = a - datenow;
    console.log(b);
    if (b < 1) {
      setOpen(true);
      localStorage.setItem("_pp", result);
    }
  }, [open]);

  if (open) {
    return (
      <>
        <div
          className={`${
            open ? "not-sr-only" : "sr-only"
          } fixed inset-0 bg-black z-40 opacity-75 w-full h-screen`}
        ></div>
        <Transition
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={open}
        >
          <div className="fixed bg-white w-2/3 h-2/5  z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img alt="Perjuangan" title="Springbed" />
            <h1 className="text-red-400">20% Off Man Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor
            </p>
            <button>Belanja Sekarang</button>
            <span
              className="absolute text-black"
              onClick={() => {
                setOpen(false);
              }}
            >
              X
            </span>
          </div>
        </Transition>
      </>
    );
  } else {
    return <></>;
  }
}
