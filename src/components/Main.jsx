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
  SingleProduct,
  Footer,
  NotFound,
  Address,
  User,
  Book,
  Checkout,
  ConfirmationPage,
  MakeProduct,
} from "./";
import { authUser } from "./api-adapter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminBooks from "../AdminBooks";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [bookInfo, setBookInfo] = useState({});
  const [theCart, setTheCart] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
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
          path="/admin"
          element={
            user.admin ? (
              <AdminBooks
                setAllBooks={setAllBooks}
                bookInfo={bookInfo}
                setBookInfo={setBookInfo}
                allBooks={allBooks}
              />
            ) : (
              <NotFound />
            )
          }
        ></Route>
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
          element={
            <AllBooks
              allBooks={allBooks}
              setAllBooks={setAllBooks}
              bookInfo={bookInfo}
              setBookInfo={setBookInfo}
            />
          }
        ></Route>
        <Route
          path="/book"
          element={<Book bookInfo={bookInfo} setBookInfo={setBookInfo} />}
        ></Route>
        <Route
          path="/singleproduct/:bookId"
          element={
            <SingleProduct
              bookInfo={bookInfo}
              setBookInfo={setBookInfo}
              theCart={theCart}
              setTheCart={setTheCart}
              user={user}
              allBooks={allBooks}
              setAllBooks={setAllBooks}
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
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/profile" element={<Profile user={user} />}></Route>
        <Route path="/users" element={<User user={user} />}></Route>
        <Route
          path="/makeproduct"
          element={
            <MakeProduct
              allBooks={allBooks}
              setAllBooks={setAllBooks}
            />}></Route>
        <Route
          path="/checkout"
          element={
            <Checkout
              user={user}
              theCart={theCart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        ></Route>
        <Route
          path="/confirmationPage"
          element={
            <ConfirmationPage
              user={user}
              theCart={theCart}
              setTheCart={setTheCart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        ></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Main;
