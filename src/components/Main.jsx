import React, { useState, useEffect } from "react";
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
  Address
} from "./";
import { authUser, getUserByUsername } from "./api-adapter";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser]=useState({})

  const getLoggedInUser = async (token) => {
  if (token) {
      const loggedInUser = await authUser(token)
      setUser(loggedInUser)
      console.log(loggedInUser, "this is the user working")
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
     getLoggedInUser(token);
    }

  }, []);


  return (
    <div id="main">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/childproducts" element={<ChildProducts />}></Route>
        <Route path="/teenproducts" element={<TeenProducts />}></Route>
        <Route path="/adultproducts" element={<AdultProducts />}></Route>
        <Route path="/allbooks" element={<AllBooks />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/address" element={<Address />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default Main;
