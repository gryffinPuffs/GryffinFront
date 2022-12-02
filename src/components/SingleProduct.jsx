import React, { useState, useEffect } from "react";
import { getProductById, addItemToCart } from "./api-adapter";
import { Link, useNavigate } from "react-router-dom";

const SingleProduct = ({
  bookInfo,
  setBookInfo,
  user,
  theCart,
  setTheCart,
}) => {
  const navigate = useNavigate();
  const [singleBook, setSingleBook] = useState({});

  useEffect(() => {
    async function fetchBook() {
      const theBook = await getProductById(bookInfo);
      setSingleBook(theBook);
    }
    fetchBook();
  }, []);

  async function addItemSubmit() {
    console.log("hello user data here", user);
    const productToAdd = await addItemToCart(
      user.id,
      singleBook,
      singleBook.price,
      singleBook.quantity
    );
    console.log("product object added cart", productToAdd);
    setTheCart(...theCart, productToAdd);
  }

  // const addBookToCart = async (e) => {
  //   console.log(user, "hello");
  //   e.preventDefault();
  //   const productToAdd = await addItemToCart(
  //     user.id,
  //     singleBook,
  //     singleBook.price,
  //     1
  //   );
  //   console.log("banana added to cart", productToAdd);
  //   setTheCart(...theCart, productToAdd);
  // };

  //admin access only - delete single product
  //   useEffect(() => {
  //     async function deleteBook(){
  //       const productToDelete = await deleteProduct(id)
  // setSingleBook(productToDelete)
  //     }
  //     deleteBook()
  //   }, [])

  //async function handleDeleteAdmin(product_id){
  // const productToDestroy = product.id
  //const destroyedProduct = await deleteProduct(id)
  // }

  return (
    <div id="singleProduct">
      <div className="bookImg">
        <img src={singleBook.image_url} alt="book image"></img>
        <div id="singleInfo">
          <div className="title">{singleBook.name}</div>
          <div className="author">Author: {singleBook.author}</div>
          <div className="price">Price: {singleBook.price}</div>
          <div className="description">Summary: {singleBook.description}</div>
          <button
            onClick={() => {
              addItemSubmit();
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              navigate("/allbooks");
            }}
          >
            Continue Shopping
          </button>
          <Link>Add to Wish List</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
