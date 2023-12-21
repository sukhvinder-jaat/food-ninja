import React from "react";
import food from "../../assets/images/webp/keepFood.webp";
import cooking from "../../assets/images/webp/keepCooking.webp";
import { Link } from "react-router-dom";
const KeepReading = () => {
  return (
    <>
      <div className="max-w-[800px] 2xl:max-w-[940px] mx-auto xl:px-0 px-3 mt-12">
        <p className="text-Shaft font-Merriweather md:text-3xl text-[34px] leading-[160%] font-bold">
          Keep reading
        </p>
        <Link to="/" className="flex sm:flex-row flex-col my-[30px] group">
          <div className=" overflow-hidden rounded-[5px] min-w-[250px]">
            <img
              src={food}
              alt="food"
              className="sm:max-w-[250px] w-full shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)] rounded-[5px] group-hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="sm:ps-8 pt-3 sm:pt-0">
            <p className="text-Shaft font-Merriweather md:text-xl text-lg font-bold leading-[160%] mb-2 group-hover:underline">
              Why you don’t need more than 3 pieces of clothing
            </p>
            <p className=" text-Black_oak font-Roboto text-base font-normal leading-[160%]">
              Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut
              amet nisl tortor arcu non id nulla mauris neque nisl magna.
            </p>
          </div>
        </Link>
        <Link className="flex sm:flex-row flex-col group">
          <div className=" overflow-hidden rounded-[5px] min-w-[250px]">
            <img
              src={cooking}
              alt="cooking"
              className="sm:max-w-[250px] w-full shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)] rounded-[5px] group-hover:scale-110 transition-all ease-linear duration-200"
            />
          </div>
          <div className="sm:ps-8 pt-3 sm:pt-0">
            <p className="text-Shaft font-Merriweather md:text-xl text-lg font-bold leading-[160%] mb-2 group-hover:underline">
              Why you should cook with your family together everyday
            </p>
            <p className=" text-Black_oak font-Roboto text-base font-normal leading-[160%]">
              Rutrum aliquet eros semper nunc. In adipiscing augue sagittis,
              fermentum donec nunc lacinia. Risus in egestas in orci quam.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default KeepReading;
