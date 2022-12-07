import React, { useState } from "react";
import { updateProduct } from "./components/api-adapter";
import { useNavigate } from "react-router-dom";

export default function EditForm({ book, setUpdate, setAllBooks, allBooks }) {
  const navigate = useNavigate();

  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [image, setImage] = useState(book.image_url);
  const [image2, setImage2] = useState(book.image_url2);
  const [audience, setAudience] = useState(book.image);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
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

    const editedProducts = allBooks.map((product) => {
      if (product.id == updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });
    setAllBooks(editedProducts);
    setUpdate(false);
  }
  return (
    <>
      <form id="admin-form">
        <input
          placeholder={book.name}
          className="Book Title"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <input
          placeholder={book.price}
          className="Price"
          type="text"
          // pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          // data-type="currency"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <input
          placeholder={book.image_url}
          className="Image URL"
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        ></input>
        <input
          placeholder={book.image_url2}
          className="Image URL"
          type="text"
          onChange={(event) => {
            setImage2(event.target.value);
          }}
        ></input>
        <input
          placeholder={book.audience}
          className="audienceType"
          type="text"
          onChange={(event) => {
            setAudience(event.target.value);
          }}
        ></input>
        <input
          placeholder={book.author}
          className="author-form"
          type="text"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        ></input>
        <textarea
          placeholder={book.description}
          className="form-description"
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
        <button onClick={handleUpdateAdmin} type="submit">
          Submit
        </button>
      </form>
      <button
        id="admin-edit-button"
        onClick={() => {
          setUpdate(false);
        }}
      >
        Cancel Edit
      </button>
    </>
  );
}
