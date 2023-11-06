import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/pages/home";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
