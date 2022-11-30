import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Navbar2,
  Home,
  ChildProducts,
  AdultProducts,
  TeenProducts,
  Login,
  Cart,
  Register,
  Profile,
  SeeCartDetails,
  SeeProductDetails,
  SingleProduct,
  Footer,
} from "./";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="main">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/childproducts" element={<ChildProducts />}></Route>
        <Route path="/teenproducts" element={<TeenProducts />}></Route>
        <Route path="/adultproducts" element={<AdultProducts />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default Main;
