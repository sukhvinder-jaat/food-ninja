import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="max-w-[1100px] 2xl:max-w-[1320px] mx-auto xl:px-0 px-3 flex sm:flex-row flex-col justify-start lg:mt-28 sm:mt-20 mt-10 mb-10">
        <div className="bg-Rhino rounded-[5px] pt-[38px] px-5 md:ps-[49px] md:pe-[45px] pb-[38px] flex flex-col sm:items-start items-center">
          <p className=" text-white text-center font-Merriweather md:text-xl text-lg font-black leading-[160%] max-w-[200px] mb-3 mx-auto">
            Subscribe To Our Newsletter
          </p>
          <p className="text-Zumthor text-center font-Roboto text-base font-medium leading-[160%] max-w-[340px] mb-4">
            Get weekly food news, articles, and videos delivered to your inbox.
          </p>
          <input
            type="text"
            placeholder="Email"
            className="text-Willow font-Roboto text-base font-medium rounded-[3px] bg-white py-3 px-4 w-full max-w-[288px] mb-4"
          />
          <button className=" text-white font-Roboto text-base font-medium leading-[160%] bg-Stratos p-[9px_18px] rounded-[3px]">
            Sign Up
          </button>
        </div>
        <div className="lg:ps-20 sm:ps-10 sm:mt-0 mt-5">
          <p className="text-black font-Roboto text-xs font-medium leading-[160%] sm:mb-7 mb-5">
            POPULAR POSTS
          </p>
          <p className="text-black font-Roboto text-xs font-medium leading-[160%] mb-5 max-w-[280px]">
            How To Have Your Cake and Eat It Too: The Way of The Chicken Man
          </p>
          <p className="text-black font-Roboto text-xs font-medium leading-[160%] mb-5">
            My Grandma’s 30-year-old Recipe
          </p>
          <p className="text-black font-Roboto text-xs font-medium leading-[160%]">
            What I learned about cooking from Ratatoulie
          </p>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
