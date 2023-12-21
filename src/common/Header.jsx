import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("max-[768px]:overflow-hidden");
    } else {
      document.body.classList.remove("max-[768px]:overflow-hidden");
    }
    return () => {
      document.body.classList.remove("max-[768px]:overflow-hidden");
    };
  }, [isOpen]);
  const path = useLocation();
  return (
    <>
      <div>
        <nav className="bg-white">
          <div className="max-w-[1100px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3">
            <div className="flex items-center justify-between sm:pt-[36px] pt-6">
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className=" font-Merriweather md:text-xl text-lg text-Stratos font-black leading-[normal] relative z-50"
                >
                  Food Ninja
                </Link>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-baseline gap-5">
                  <li>
                    <Link
                      to="/blog-page"
                      className={`${
                        path.pathname === "/blog-page"
                          ? "relative after:content-[''] after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl after:w-full after:left-0"
                          : "text-Willow"
                      }  relative after:content-['']  after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full after:left-0 font-Roboto text-base font-normal leading-[normal]`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-page"
                      className={`${
                        path.pathname === "/about-page"
                          ? "relative after:content-[''] after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl after:w-full after:left-0"
                          : "text-Willow"
                      }  relative after:content-['']  after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full after:left-0 font-Roboto text-base font-normal leading-[normal]`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-page"
                      className={`${
                        path.pathname === "/contact-page"
                          ? "relative after:content-[''] after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl after:w-full after:left-0"
                          : "text-Willow"
                      }  relative after:content-['']  after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full after:left-0 font-Roboto text-base font-normal leading-[normal]`}
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <button className="md:flex hidden bg-Rhino rounded-[29px] p-[8px_15px] text-white font-Roboto text-base font-normal leading-[normal] hover:text-Rhino overflow-hidden relative after:content-[''] after:w-0 hover:after:w-full after:absolute after:bg-white after:h-0 hover:after:h-full after:top-0 hover:after:start-0 border-[2px] border-Rhino after:start-[50%] after:transition-all ease-in-out after:duration-300 duration-300 after:rounded-full">
                      <span className="relative z-10"> Log in</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-Rhino inline-flex items-center relative z-50 justify-center p-2 rounded-md text-white hover.text-white transition-opacity duration-500"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen ? "opacity-1" : "opacity-0"}
                >
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`md:opacity-0 transition-all w-screen min-[767.98px]:w-0 duration-500 fixed h-screen  z-30 bg-white top-0 ${
              isOpen ? " max-[768.98px]:translate-x-0" : "translate-x-[-100%]"
            }`}
            id="mobile-menu"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 h-full sm:px-3 flex flex-col justify-center items-center h_mobile">
              <li onClick={() => setIsOpen(!isOpen)}>
                <Link
                  to="/blog"
                  className={`${
                    path.pathname === "/"
                      ? "text-Willow"
                      : "relative after:content-[''] after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl after:w-full after:left-0"
                  }  relative after:content-['']  after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full after:left-0 font-Roboto text-base font-normal leading-[normal]`}
                >
                  Blog
                </Link>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <Link
                  to="/"
                  className="text-Willow relative after:content-['']  after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full after:left-0 font-Roboto text-base font-normal leading-[normal]"
                >
                  About
                </Link>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <Link
                  to="/"
                  className="text-Willow relative after:content-['']  after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 after:bg-Willow  after:absolute after:bottom-[-4px] after:rounded-3xl hover:after:w-full after:left-0  font-Roboto text-base font-normal leading-[normal]"
                >
                  Contact
                </Link>
              </li>
              <li onClick={() => setIsOpen(!isOpen)}>
                <button className="md:hidden flex bg-Rhino rounded-[29px] p-[8px_15px] text-white font-Roboto text-base font-normal leading-[normal]">
                  Log in
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
