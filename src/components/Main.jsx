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
  Address,
} from "./";
import { authUser, getUserByUsername } from "./api-adapter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [bookInfo, setBookInfo] = useState({});
  const [theCart, setTheCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const getLoggedInUser = async (token) => {
    if (token) {
      const loggedInUser = await authUser(token);
      setUser(loggedInUser);
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
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              user={user}
              setUser={setUser}
            />
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/childproducts"
          element={
            <ChildProducts bookInfo={bookInfo} setBookInfo={setBookInfo} />
          }
        ></Route>
        <Route
          path="/teenproducts"
          element={
            <TeenProducts bookInfo={bookInfo} setBookInfo={setBookInfo} />
          }
        ></Route>
        <Route
          path="/adultproducts"
          element={
            <AdultProducts bookInfo={bookInfo} setBookInfo={setBookInfo} />
          }
        ></Route>
        <Route
          path="/allbooks"
          element={<AllBooks bookInfo={bookInfo} setBookInfo={setBookInfo} />}
        ></Route>
        <Route
          path="/singleproduct"
          element={
            <SingleProduct
              bookInfo={bookInfo}
              setBookInfo={setBookInfo}
              theCart={theCart}
              setTheCart={setTheCart}
              user={user}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              user={user}
              setUser={setUser}
              theCart={theCart}
              setTheCart={setTheCart}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          }
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/profile" element={<Profile user={user} />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Main;
