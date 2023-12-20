import React from "react";
import food from "../../assets/images/webp/keepFood.png";
import cooking from "../../assets/images/webp/keepCooking.png";
const KeepReading = () => {
  return (
    <>
      <div className="max-w-[800px] 2xl:max-w-[940px] mx-auto xl:px-0 px-3 mt-12">
        <p className="text-Shaft font-Merriweather md:text-3xl text-[34px] leading-[160%] font-bold">
          Keep reading
        </p>
        <div className="flex sm:flex-row flex-col my-[30px]">
          <img
            src={food}
            alt="food"
            className="sm:max-w-[250px] w-full shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)]"
          />
          <div className="sm:ps-8 pt-3 sm:pt-0">
            <p className="text-Shaft font-Merriweather md:text-xl text-lg font-bold leading-[160%] mb-2">
              Why you don’t need more than 3 pieces of clothing
            </p>
            <p className=" text-Black_oak font-Roboto text-base font-normal leading-[160%]">
              Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut
              amet nisl tortor arcu non id nulla mauris neque nisl magna.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col">
          <img
            src={cooking}
            alt="cooking"
            className="sm:max-w-[250px] w-full shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)]"
          />
          <div className="sm:ps-8 pt-3 sm:pt-0">
            <p className="text-Shaft font-Merriweather md:text-xl text-lg font-bold leading-[160%] mb-2">
              Why you should cook with your family together everyday
            </p>
            <p className=" text-Black_oak font-Roboto text-base font-normal leading-[160%]">
              Rutrum aliquet eros semper nunc. In adipiscing augue sagittis,
              fermentum donec nunc lacinia. Risus in egestas in orci quam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeepReading;
