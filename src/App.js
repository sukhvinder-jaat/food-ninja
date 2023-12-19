import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import BlogPage from "./views/BlogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
