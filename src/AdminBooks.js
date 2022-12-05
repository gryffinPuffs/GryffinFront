import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} from "./components/api-adapter";
import Book from "./components/Book";
import { NavLink } from "react-router-dom";
const AdminBooks = ({ bookInfo, setBookInfo, allBooks, setAllBooks }) => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [audience, setAudience] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function fetchAllBooks() {
      const allTheBooks = await getAllProducts();
      setAllBooks(allTheBooks);
    }
    fetchAllBooks();
  }, []);

  async function handleSubmit(event) {
    try {
      const newProduct = await createProduct(
        name,
        price,
        image_url,
        image_url2,
        author,
        description,
        audience
      );
      setAllBooks([newProduct, ...allBooks]);
    } catch (error) {
      console.log(error);
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
      book.id,
      name,
      price,
      image,
      image2,
      author,
      audience,
      description
    );
    console.log(book.id, "This is book info");
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
    <div id="allBooks">
      <h2> You may Edit these books</h2>
      <NavLink className="linkBar" to="/makeproduct">
        New Product
      </NavLink>
      <div id="books">
        {allBooks && allBooks.length
          ? allBooks.map((book) => {
              return (
                <div key={`adminbooks-${book.id}`}>
                  <Book book={book} />
                  <button onClick={handleDeleteAdmin}>Delete Book</button>
                  <button onClick={handleSubmit}>Edit Book </button>
                </div>
              );
            })
          : null}
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default AdminBooks;
