import React from "react";
import george from "../../assets/images/webp/georgeImage.webp";
import { FoodData } from "../../common/Helper";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="max-w-[1100px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3 lg:mt-24 md:mt-16 mt-10">
        <p className=" text-Stratos font-Merriweather lg:text-5xl md:text-4xl text-[40px] font-black leading-[normal] text-center mb-2">
          The Food Ninja Blog
        </p>
        <p className=" text-center font-Roboto text-lg text-Willow leading-[normal] font-normal md:mb-14 mb-10">
          A blog about food, experiences, and recipes.
        </p>
        <div className=" pe-5 rounded-[5px] border-[1px] border-Steam bg-Heaven max-w-[430px] overflow-hidden flex items-center mx-auto">
          <input
            type="text"
            id="search"
            placeholder="Search for articles"
            className="ps-7 py-[18px] w-full text-Scorpion placeholder:text-Scorpion font-Merriweather text-base font-normal leading-[normal] focus-visible:outline-none"
          />
          <label htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              className=" cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4142 7C17.4142 9.76142 15.1756 12 12.4142 12C9.65279 12 7.41421 9.76142 7.41421 7C7.41421 4.23858 9.65279 2 12.4142 2C15.1756 2 17.4142 4.23858 17.4142 7ZM19.4142 7C19.4142 10.866 16.2802 14 12.4142 14C10.7359 14 9.19552 13.4094 7.98963 12.4246L1.41421 19L0 17.5858L6.63493 10.9509C5.86476 9.82642 5.41421 8.46583 5.41421 7C5.41421 3.13401 8.54822 0 12.4142 0C16.2802 0 19.4142 3.13401 19.4142 7Z"
                fill="#DDDDDD"
              />
            </svg>
          </label>
        </div>
        {/* cards */}
        <div className="md:mt-16 mt-10  flex flex-wrap">
          {FoodData.map((data, i) => {
            return (
              <div className={`md:w-6/12 w-full ${data.space}`} key={i}>
                <Link to={data.to} className="flex flex-col h-full group">
                  <div className=" overflow-hidden rounded-[5px] lg:min-h-[270px] min-h-[190px]">
                    <img
                      src={data.mainImage}
                      alt={data.mainImageName}
                      className="w-full group-hover:scale-110 transition-all ease-linear duration-200"
                    />
                  </div>
                  <div className="pt-5 flex flex-col md:justify-between h-full xl:max-h-[345px] lg:max-h-[370px] md:max-h-[405px]">
                    <div className="mb-0">
                      <button className="text-[#DFE1E7] font-Roboto text-xs font-medium leading-[normal] p-[5px_17px] rounded-[3px] bg-Rhino mb-2 hover:text-Rhino overflow-hidden relative after:content-[''] after:w-0 hover:after:w-full after:absolute after:bg-white after:h-0 hover:after:h-full after:top-0 hover:after:start-0 border-[2px] border-Rhino after:start-[50%] after:transition-all ease-in-out after:duration-300 duration-300 after:rounded-[3px]">
                        <span className=" relative z-10"> {data.btn}</span>
                      </button>
                      <p className="font-Merriweather md:text-xl text-lg text-Stratos font-bold leading-[140%] max-w-[515px]">
                        {data.heading}
                      </p>
                      <p className="text-Emperor font-Merriweather text-xs font-normal leading-[160%] mb-4">
                        {data.date}
                      </p>
                      <p className="text-Tundora font-Roboto text-sm font-normal leading-[160%] mb-4">
                        {data.para}
                      </p>
                    </div>
                    <div className="flex items-center gap-[14px]">
                      <img
                        src={george}
                        alt="george"
                        className="max-w-[42px] max-h-[42px] w-full"
                      />
                      <p className=" text-black font-Merriweather text-xs font-bold leading-[160%]">
                        George Costanza
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
