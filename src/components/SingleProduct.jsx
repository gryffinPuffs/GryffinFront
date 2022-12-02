import React, { useState, useEffect } from "react";
import {
  getProductById,
  addItemToCart,
  deleteProduct,
  updateProduct,
} from "./api-adapter";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleProduct = ({
  bookInfo,
  setBookInfo,
  user,
  theCart,
  setTheCart,
  loggedIn,
  allBooks,
  setAllBooks,
}) => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [singleBook, setSingleBook] = useState();
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [audience, setAudience] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function fetchBook() {
      const theBook = await getProductById(bookId);
      console.log(theBook);
      setSingleBook(theBook);
    }
    fetchBook();
  }, []);

  async function addItemSubmit() {
    console.log("hello user data here", user, singleBook);

    const productToAdd = await addItemToCart(
      user.cart.id,
      singleBook.id,
      singleBook.price,
      1,
      true
    );
    console.log("product object added cart", productToAdd);
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

  //admin access only - delete single product
  // useEffect(() => {
  //   async function deleteBook(){
  //     const productToDelete = await deleteProduct(id)
  //     setSingleBook(productToDelete) }
  //   deleteBook()
  // }, [])

  async function handleDeleteAdmin(e) {
    e.preventDefault();
    // const productToDestroy = bookInfo;
    // console.log(bookInfo, "BANANA");
    // console.log("this is product to destroy", productToDestroy);
    const destroyedProduct = await deleteProduct(bookInfo);
    console.log("ITS DESTROY PRODUCT", destroyedProduct);
    const availableProducts = allBooks.filter((product) => {
      console.log(product, "THIS IS PRODUCT");
      return product.id !== destroyedProduct.id;
    });
    setAllBooks([availableProducts, ...allBooks]);
    navigate("/allbooks");
  }

  async function handleUpdateAdmin(e) {
    e.preventDefault();
    const updatedProduct = await updateProduct(
      bookInfo,
      singleBook.name,
      singleBook.price,
      singleBook.image_url,
      singleBook.image_url2,
      singleBook.author,
      singleBook.audience,
      singleBook.description
    );
    const editedProducts = allBooks.filter((product) => {
      console.log(product, "THIS IS PRODUCT");
      return product.id == updatedProduct.id;
    });
    setAllBooks([editedProducts, ...allBooks]);
    navigate("/allbooks");
  }

  return (
    <>
      {singleBook ? (
        <div id="singleProduct">
          <div className="bookImg">
            <img src={singleBook.image_url} alt="book image"></img>
            <div id="singleInfo">
              <div className="title">{singleBook.name}</div>
              <div className="author">Author: {singleBook.author}</div>
              <div className="price">Price: {singleBook.price}</div>
              <div className="description">
                Summary: {singleBook.description}
              </div>
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
      ) : (
        <div>Loading your book..</div>
      )}
      <div>
        {user.admin === true ? (
          <>
            <button onClick={handleDeleteAdmin}>Delete Book </button>
            <button onClick={handleUpdateAdmin}>Edit Book </button>
          </>
        ) : null}
      </div>
      {update === true ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <input
            placeholder="Book Title"
            className="Book Title"
            type="text"
            value={singleBook.name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          ></input>
          <input
            placeholder="Price"
            className="Price"
            type="text"
            value={singleBook.price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            required
          ></input>
          <input
            placeholder="Image URL"
            className="Image URL"
            type="text"
            value={singleBook.image_url}
            onChange={(event) => {
              setImage(event.target.value);
            }}
            required
          ></input>
          <input
            placeholder="Image URL"
            className="Image URL"
            type="text"
            value={singleBook.image_url2}
            onChange={(event) => {
              setImage2(event.target.value);
            }}
            required
          ></input>
          <input
            placeholder="Audience Type"
            className="audienceType"
            type="text"
            value={singleBook.audience}
            onChange={(event) => {
              setAudience(event.target.value);
            }}
            required
          ></input>
          <input
            placeholder="Author"
            className="author"
            type="text"
            value={singleBook.author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            required
          ></input>
          <input
            placeholder="Description"
            className="description"
            type="text"
            value={singleBook.description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            required
          ></input>
          <button onSubmit={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      ) : null}
    </>
  );
};

export default SingleProduct;
