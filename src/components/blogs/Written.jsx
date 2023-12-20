import React from "react";
import george from "../../assets/images/webp/georgeImage.webp";
const Written = () => {
  return (
    <>
      <div className="max-w-[800px] 2xl:max-w-[940px] mx-auto xl:px-0 px-3 mt-12">
        <div className="border-[1px] border-Steam bg-Castle rounded-[5px] w-full py-11 px-4 sm:ps-7 sm:pe-[1.43rem] flex sm:flex-row flex-col">
          <img src={george} alt="george" />
          <div className=" sm:ps-6 sm:pt-0 pt-5">
            <p className=" text-black font-Merriweather md:text-xl text-lg font-normal leading-[160%] mb-3">
              Written by George Costanza
            </p>
            <p className=" text-black font-Roboto text-base font-normal leading-[160%]">
              Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices
              molestie bibendum. Purus orci nisl, commodo ipsum, ut urna,
              elementum. Nunc potenti lectus in erat ligula cras. Eget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Written;
