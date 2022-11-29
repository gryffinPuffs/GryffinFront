import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  Login,
  Cart,
  Register,
  Profile,
  SeeCartDetails,
  SeeProductDetails,
  SingleProduct,
} from "./";

const Main = () => {
  return (
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
