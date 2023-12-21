import React from "react";
import lightHouse from "../../assets/images/webp/lightHouse.webp";
import george from "../../assets/images/webp/georgeImage.webp";
import { Link } from "react-router-dom";
const BlogHero = () => {
  return (
    <>
      <div className="max-w-[800px] 2xl:max-w-[940px] mx-auto xl:px-0 px-3 lg:mt-24 md:mt-16 mt-10">
        <button className="text-[#DFE1E7] font-Roboto text-xs font-medium leading-[normal] p-[5px_17px] rounded-[3px] bg-Rhino mb-3 hover:text-Rhino overflow-hidden relative after:content-[''] after:w-0 hover:after:w-full after:absolute after:bg-white after:h-0 hover:after:h-full after:top-0 hover:after:start-0 border-[2px] border-Rhino after:start-[50%] after:transition-all ease-in-out after:duration-300 duration-300 after:rounded-[3px]">
          <span className=" relative z-10"> Food Theory</span>
        </button>
        <h2 className="text-black font-Merriweather md:text-4xl sm:text-[40px] text-[34px] font-bold leading-[normal] max-w-[815px]">
          What I Learned About Life and Food Backpacking Around Greece
        </h2>
        <p className="text-Emperor font-Merriweather text-xs font-normal leading-[160%] mb-4">
          Aug 1, 2021 • 7 min read
        </p>
        <img
          src={lightHouse}
          alt="lightHouse"
          className="w-full shadow-[0px_5px_10px_0px_rgba(0,0,0,0.50)] mb-5 rounded-[5px]"
        />
        <div className="flex items-center gap-[14px]">
          <img
            src={george}
            alt="george"
            className="max-w-[42px] max-h-[42px] w-full"
          />
          <p className=" text-black font-Merriweather text-xs font-bold leading-[160%] ">
            George Costanza
          </p>
        </div>
        <p className="mt-9 text-Tundora font-Roboto md:text-2xl text-xl font-medium leading-[160%] mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui
          diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare
          nulla risus id fames nascetur urna. Eros in neque tincidunt.
        </p>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%]">
          Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
          malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
          adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
          neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
          diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at
          tellus diam.
        </p>
        <div className="border-[1px] border-Steam bg-Castle rounded-[7px] pt-[33px] md:ps-[35px] pb-[35px] my-10 px-3">
          <p className=" text-black font-Merriweather md:text-xl text-lg font-bold leading-[160%] mb-4">
            In this article
          </p>
          <ul className=" list-decimal ps-[18px]">
            <li>
              <Link
                className=" underline underline-offset-2 text-Shaft font-Merriweather text-base font-normal leading-[160%] hover:text-Rhino hover:tracking-[1px] transition-all ease-linear duration-300"
                to="/"
              >
                How to travel without spending a dime
              </Link>
            </li>
            <li className="my-4">
              <Link
                className=" underline underline-offset-2 text-Shaft font-Merriweather text-base font-normal leading-[160%] hover:text-Rhino hover:tracking-[1px] transition-all ease-linear duration-300"
                to="/"
              >
                Get the most out of your credit card reward points
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className=" underline underline-offset-2 text-Shaft font-Merriweather text-base font-normal leading-[160%] hover:text-Rhino hover:tracking-[1px] transition-all ease-linear duration-300"
              >
                Why you don’t need more than 3 pieces of clothing
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%] mb-7">
          Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
          erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
          bibendum neque amet turpis non. Ac arcu lacus turpis elementum
          imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
          urna, nunc.
        </p>
        <p className="text-Shaft font-Merriweather md:text-xl text-lg font-bold leading-[160%]">
          How to travel without spending a dime
        </p>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%] my-5">
          Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate
          donec enim sed ornare scelerisque. Sollicitudin orci leo egestas
          fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut
          feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo
          pharetra, vestibulum rhoncus natoque.
        </p>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%]">
          Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris
          etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim
          interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor.
          Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer
          praesent tincidunt. At erat sagittis tellus ultricies in a.
        </p>
        <p className="text-Shaft font-Merriweather md:text-xl text-lg font-bold leading-[160%] mt-7">
          Get the most out of your credit card reward points
        </p>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%] my-5">
          Massa, libero morbi morbi sed non sed. In et neque lectus ultricies
          leo eros. Auctor in elementum accumsan malesuada gravida neque cursus
          pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque,
          porta vel, morbi nulla at tincidunt. Neque, et ultrices duis
          fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi
          feugiat.
        </p>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%]">
          Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed.
          Nibh non semper amet sit hac tristique orci. Quis velit vitae amet
          magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit
          vitae. Duis luctus convallis risus purus sollicitudin purus id eu.
          Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus.
          Tortor felis.
        </p>
        <p className="text-Shaft font-Merriweather md:text-xl text-lg font-bold leading-[160%] mt-7">
          Why you don’t need more than 3 pieces of clothing
        </p>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%] my-5">
          Massa aenean cursus nulla urna dui, fermentum cursus in facilisis.
          Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin
          in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit
          leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque
          sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris.
          Viverra nulla.
        </p>
        <p className="text-Tundora font-Roboto md:text-lg text-base font-normal leading-[160%]">
          Sed pellentesque quam lorem urna. Mauris donec molestie eget massa
          pellentesque facilisis netus mauris. Magna eget eget sollicitudin at
          faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor.
          Maecenas molestie consequat cursus posuere ultrices facilisis hac
          bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus
          sit et.
        </p>
      </div>
    </>
  );
};

export default BlogHero;
