import React, { useState, useEffect } from "react";
import { getProductById, addItemToCart } from "./api-adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

import wishListSingle from "./wishlistSingle.png";

const SingleProduct = ({ user, theCart, setTheCart }) => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [singleBook, setSingleBook] = useState();

  useEffect(() => {
    async function fetchBook() {
      const theBook = await getProductById(bookId);
      console.log(theBook);
      setSingleBook(theBook);
    }
    fetchBook();
  }, []);

  async function addItemSubmit() {
    const product = [user.cart.id, singleBook.id, singleBook.price, 1, true];
    const productToAdd = await addItemToCart(...product);
    let alreadyInCart = false;
    const cart = theCart.map((product) => {
      if (product.id == productToAdd.id) {
        alreadyInCart = true;
        return { ...product, quantity: productToAdd.quantity };
      } else {
        return product;
      }
    });
    if (alreadyInCart) {
      setTheCart(cart);
    } else {
      setTheCart([...cart, productToAdd]);
    }
  }

  return (
    <div>
      {singleBook ? (
        <div id="singleProduct">
          <div>
            <img
              className="single-book-img"
              src={singleBook.image_url}
              alt="book image"
            ></img>
          </div>

          <Link id="wishlist">
            <span className="wishListText" data-hover="Add to favorites">
              <img id="wishlistImg" src={wishListSingle} alt="Wishlist"></img>
            </span>
          </Link>

          <div>
            <h3>In Stock</h3>
          </div>

          <div className="price">${(singleBook.price / 100).toFixed(2)}</div>
          <div>
            <button
              className="shopButtons"
              onClick={() => {
                addItemSubmit();
              }}
            >
              Add to Cart
            </button>
          </div>

          <div>
            <button
              className="go-back-button"
              onClick={() => {
                navigate("/allbooks");
              }}
            >
              Continue Shopping
            </button>
          </div>

          <div id="singleInfo">
            <div className="title">{singleBook.name}</div>
            <div className="author">Author: {singleBook.author}</div>
            <div className="description">{singleBook.description}</div>
          </div>
        </div>
      ) : (
        <h1>Loading Single Book...</h1>
      )}
    </div>
  );
};

export default SingleProduct;
