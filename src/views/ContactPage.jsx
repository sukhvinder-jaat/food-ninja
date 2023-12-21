import React, { useEffect } from "react";
import Header from "../common/Header";
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default ContactPage;
