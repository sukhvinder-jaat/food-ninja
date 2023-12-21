import React, { useEffect } from "react";
import Header from "../common/Header";
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default AboutPage;
