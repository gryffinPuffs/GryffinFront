import React, { useState } from "react";
import { updateProduct } from "./components/api-adapter";
import { toast } from "react-toastify";

export default function EditForm({ book, setUpdate, setAllBooks, allBooks }) {
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
    {
      toast.success("Check your logs. Product has updated.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <>
      <form className="admin-form">
        <div id="text-fields">Book Title</div>
        <input
          placeholder={book.name}
          className="book-title"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>

        <div id="text-fields">Author</div>
        <input
          placeholder={book.author}
          className="author-form"
          type="text"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        ></input>

        <div id="text-fields">Price</div>
        <input
          placeholder={(book.price / 100).toFixed(2)}
          className="price-admin"
          data-type="currency"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>

        <div id="text-fields">Image URL</div>
        <textarea
          placeholder={book.image_url}
          className="image-URL"
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        ></textarea>

        <div id="text-fields">Image URL</div>
        <input
          placeholder={book.image_url2}
          className="image-URL"
          type="text"
          onChange={(event) => {
            setImage2(event.target.value);
          }}
        ></input>

        <div id="text-fields">Audience type</div>
        <select
          placeholder={book.audience}
          className="audienceType"
          type="text"
          onChange={(event) => {
            setAudience(event.target.value);
          }}
        >
          <option>child</option>
          <option>teens</option>
          <option>adult</option>
        </select>

        <div id="text-fields">
          Summary
          <textarea
            placeholder={book.description}
            className="form-description"
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
        <button id="admin-submit" onClick={handleUpdateAdmin} type="submit">
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
