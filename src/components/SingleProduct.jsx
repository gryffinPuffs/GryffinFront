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
  book,
  user,
  theCart,
  setTheCart,
  allBooks,
  setAllBooks,
  allAdultBooks,
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
  async function handleDeleteAdmin(e) {
    e.preventDefault();
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
      bookId,
      name,
      price,
      image,
      image2,
      author,
      audience,
      description
    );
    console.log(bookId, "This is book info");
    console.log(updatedProduct, "UPDATED");

    const editedProducts = allBooks.filter((product) => {
      console.log(product, "THIS IS PRODUCT");
      return product.id == updatedProduct.id;
    });
    setAllBooks([editedProducts, ...allBooks]);
    navigate("/singleproduct");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("banana");
    setName(singleBook.name);
    setAuthor(singleBook.author);
    setAudience(singleBook.audience);
    setDescription(singleBook.description);
    setImage(singleBook.image_url);
    setImage2(singleBook.image_url2);
    setPrice(singleBook.price);
    setUpdate(true);
  }

  return (
    <>
      {singleBook ? (
        <div id="singleProduct">
          <div className="bookImg">
            <img src={singleBook.image_url} alt="book image"></img>
            <div id="singleInfo">
              <div className="title">Title:{singleBook.name}</div>
              <div className="author">Author: {singleBook.author}</div>
              <div className="price">Price: {singleBook.price}</div>
              <div className="description">
                Summary: {singleBook.description}
              </div>
              <button
                className="shopButtons"
                onClick={() => {
                  addItemSubmit();
                }}
              >
                Add to Cart
              </button>
              <button
                className="shopButtons"
                onClick={() => {
                  navigate("/allbooks");
                }}
              >
                Continue Shopping
              </button>
              <Link>Add to Wish List</Link>
            </div>
          </div>
          <div>
            {user.admin === true ? (
              <>
                <button onClick={handleDeleteAdmin}>Delete Book</button>
                <button onClick={handleSubmit}>Edit Book </button>

                {update ? (
                  <>
                    <form>
                      <input
                        placeholder="Book Title"
                        className="Book Title"
                        type="text"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      ></input>
                      <input
                        placeholder="Price"
                        className="Price"
                        type="text"
                        value={price}
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                      ></input>
                      <input
                        placeholder="Image URL"
                        className="Image URL"
                        type="text"
                        value={image}
                        onChange={(event) => {
                          setImage(event.target.value);
                        }}
                      ></input>
                      <input
                        placeholder="Image URL"
                        className="Image URL"
                        type="text"
                        value={image2}
                        onChange={(event) => {
                          setImage2(event.target.value);
                        }}
                      ></input>
                      <input
                        placeholder="Audience Type"
                        className="audienceType"
                        type="text"
                        value={audience}
                        onChange={(event) => {
                          setAudience(event.target.value);
                        }}
                      ></input>
                      <input
                        placeholder="Author"
                        className="author"
                        type="text"
                        value={author}
                        onChange={(event) => {
                          setAuthor(event.target.value);
                        }}
                      ></input>
                      <input
                        placeholder="Description"
                        className="description"
                        type="text"
                        value={description}
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                      ></input>
                      <button onClick={handleUpdateAdmin} type="submit">
                        Submit
                      </button>
                    </form>
                  </>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div>Loading your book..</div>
      )}
    </>
  );
};

export default SingleProduct;
