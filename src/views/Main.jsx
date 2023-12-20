import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Header from "../common/Header";
import Subscribe from "../common/Subscribe";
import Footer from "../common/Footer";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Main;
