import React from "react";
import Home from "./Pages/Home/home";
import { ReactDOM } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Campaigns from "./Pages/Details/campaign";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exac path="/" element={<Home />} />
        <Route path="/campaign/:seoName/:id" element={<Campaigns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
