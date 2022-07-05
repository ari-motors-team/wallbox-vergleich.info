import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStore } from "../store";
import navbarData from "../../data/navbarData";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, SetSelected] = useState("Start");
  const router = useRouter();
  const { dispatch } = useStore();
  // (router.pathname);
  return (
    <div className={router.pathname == "/caradvisor" ? "hidden" : "w-full"}>
      <nav className="">
        <ul className="flex items-center justify-around flex-1 text-lg font-bold text-grey-nav xl:text-xl ">
          {navbarData.map((item, index) => (
            <li
              className={
                router.pathname == item.path
                  ? "transition hover:text-white text-white"
                  : "transition hover:text-white "
              } /*   */
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

          {/* onClick={() => {
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
                }}   */}
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
