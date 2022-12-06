import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getProductById, addItemToCart } from "./api-adapter";
import { Link, useNavigate, useParams } from "react-router-dom";
import wishListSingle from "./wishlistSingle.png";

const SingleProduct = ({ user, theCart, setTheCart, loggedIn }) => {
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
      toast.success("Added To Cart!", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      setTheCart([...cart, productToAdd]);
      {
        toast.success("Added To Cart!", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
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
          {/* </div>
          <div> */}
            <Link id="wishlist">
              <span className="wishListText" data-hover="Add to favorites">
                <img id="wishlistImg" src={wishListSingle} alt="Wishlist"></img>
              </span>
            </Link>

            <h3>In Stock</h3>
            <div className="price">${(singleBook.price / 100).toFixed(2)}</div>
            {loggedIn ? (
              <button
                className="shopButtons"
                onClick={() => {
                  addItemSubmit();
                }}
              >
                Add to Cart
              </button>
            ) : (
              <>
                <h3>Please log in to add items to cart</h3>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log In
                </button>
              </>
            )} <br />
            <button
              id="go-back-button"
              className="shopButtons"
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
    // </div>
  );
};

export default SingleProduct;
