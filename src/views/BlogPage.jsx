import React, { useEffect } from "react";
import Header from "../common/Header";
import BlogHero from "../components/blogs/BlogHero";
import KeepReading from "../components/blogs/KeepReading";
import Written from "../components/blogs/Written";
import Subscribe from "../common/Subscribe";
import Footer from "../common/Footer";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <BlogHero />
      <KeepReading />
      <Written />
      <Subscribe />
      <Footer />
    </>
  );
};

export default BlogPage;
