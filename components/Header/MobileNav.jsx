import Link from "next/link";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useStore } from "../store";
import navbarData from "../../data/navbarData";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: {
    height: 0,
    opacity: 0,
  },
  center: {
    height: "100vh",
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

function MobileNav() {
  const router = useRouter();
  const { state, dispatch } = useStore();

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    dispatch({
      type: "mobileNavActive",
      data: false,
    });
  }, [router.pathname]);
  return (
    <AnimatePresence initial={false}>
      {state?.mobileNavActives && (
        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween" }}
          className="relative z-30 flex flex-col items-center justify-center w-full pb-32 bg-gradient-to-b from-blue-darker to-blue-dark"
        >
          <motion.ul
            className=" flex flex-col gap-14 justify-center text-[#928888] text-2xl tracking-widest "
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween" }}
          >
            {navbarData.map((item, index) => (
              <li
                className={
                  router.pathname == item.path
                    ? " text-white font-bold text-xl md:text-2xl text-center md:text-left "
                    : " font-bold text-center md:text-left text-xl md:text-2xl "
                }
                key={index}
              >
                <Link href={item.path}>
                  <a
                    onClick={() => {
                      setIsActive(false);
                      if (index == 0) {
                        {
                          setIsActive(false);
                          dispatch({
                            type: "mobileNavActive",
                            data: false,
                          });
                          dispatch({
                            type: "rangeLithium",
                            data: [],
                          });
                          dispatch({
                            type: "loadingWeight",
                            data: [],
                          });
                          dispatch({
                            type: "price",
                            data: [],
                          });
                          dispatch({
                            type: "maxSpeed",
                            data: [],
                          });
                          dispatch({
                            type: "category",
                            data: [],
                          });
                          dispatch({
                            type: "chargingTimeLithium",
                            data: [],
                          });
                        }
                      }
                    }}
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
