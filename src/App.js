import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import BlogPage from "./views/BlogPage";
import BackToTopButton from "./common/BackToTopButton";
import Preloader from "./common/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // FOR FULL SCREEN LOADING
  useEffect(() => {
    document.body.classList.add("overflow-hidden-while-loading");
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden-while-loading");
    }, 2000);
  }, []);
  return (
    <>
      <BackToTopButton />
      {loading && <Preloader />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
