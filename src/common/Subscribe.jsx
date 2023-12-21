import React from "react";
import { Link } from "react-router-dom";

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
            className="text-Willow font-Roboto text-base font-medium rounded-[3px] bg-white py-3 px-4 w-full max-w-[288px] mb-4 focus-visible:outline-none"
          />
          <button className=" text-white font-Roboto text-base font-medium leading-[160%] bg-Stratos p-[9px_18px] rounded-[3px] hover:text-Stratos overflow-hidden relative after:content-[''] after:w-0 hover:after:w-full after:absolute after:bg-white after:h-0 hover:after:h-full after:top-0 hover:after:start-0 border-[2px] border-Rhino after:start-[50%] after:transition-all ease-in-out after:duration-300 duration-300 after:rounded-[3px]">
            <span className=" relative z-10">Sign Up</span>
          </button>
        </div>
        <div className="lg:ps-20 sm:ps-10 sm:mt-0 mt-5 flex flex-col">
          <p className="text-black font-Roboto text-xs font-medium leading-[160%] sm:mb-7 mb-5">
            POPULAR POSTS
          </p>
          <Link
            to="/"
            className="text-black font-Merriweather text-xs font-medium leading-[160%] mb-5 max-w-[275px] hover:underline inline-block"
          >
            How To Have Your Cake and Eat It Too: The Way of The Chicken Man
          </Link>
          <Link
            to="/"
            className="text-black font-Merriweather text-xs font-medium leading-[160%] mb-5 hover:underline inline-block"
          >
            My Grandma’s 30-year-old Recipe
          </Link>
          <Link
            to="/"
            className="text-black font-Merriweather text-xs font-medium leading-[160%] hover:underline inline-block"
          >
            What I learned about cooking from Ratatoulie
          </Link>
        </div>
        <div className="lg:ps-20 sm:ps-10 sm:mt-0 mt-5 flex flex-col">
          <p className="text-black font-Roboto text-xs font-medium leading-[160%] sm:mb-7 mb-5">
            Recent Posts
          </p>
          <Link
            to="/"
            className="text-black font-Merriweather text-xs font-medium leading-[160%] mb-5 max-w-[275px] hover:underline inline-block"
          >
            How To Have Your Cake and Eat It Too: The Way of The Chicken Man
          </Link>
          <Link
            to="/"
            className="text-black font-Merriweather text-xs font-medium leading-[160%] mb-5 hover:underline inline-block"
          >
            My Grandma’s 30-year-old Recipe
          </Link>
          <Link
            to="/"
            className="text-black font-Merriweather text-xs font-medium leading-[160%] hover:underline inline-block"
          >
            What I learned about cooking from Ratatoulie
          </Link>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
