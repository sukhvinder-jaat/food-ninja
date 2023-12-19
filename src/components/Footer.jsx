import React from "react";

const Footer = () => {
  // Function to get the current year
  const currentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div className="bg-Castle py-[36px]">
        <div className="max-w-[1100px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3">
          <div className="gap-6 flex items-center justify-center">
            <a
              href="#"
              className="text-Armadillo font-Merriweather text-xs font-normal leading-[160%]"
            >
              About
            </a>
            <a
              href="#"
              className="text-Armadillo font-Merriweather text-xs font-normal leading-[160%]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-Armadillo font-Merriweather text-xs font-normal leading-[160%]"
            >
              Contact
            </a>
          </div>
          <p className="font-Merriweather text-xs font-bold text-Mine leading-[160%] text-center mx-auto mt-6">
            Copyright © {currentYear()} Food Ninja Blog. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
