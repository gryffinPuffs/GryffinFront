import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Navbar2,
  Home,
  ChildProducts,
  AdultProducts,
  TeenProducts,
  AllBooks,
  Login,
  Cart,
  Register,
  Profile,
  SeeCartDetails,
  SeeProductDetails,
  SingleProduct,
  Footer,
  NotFound,
} from "./";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser]=useState({})


  return (
    <div id="main">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/childproducts" element={<ChildProducts />}></Route>
        <Route path="/teenproducts" element={<TeenProducts />}></Route>
        <Route path="/adultproducts" element={<AdultProducts />}></Route>
        <Route path="/allbooks" element={<AllBooks />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default Main;
