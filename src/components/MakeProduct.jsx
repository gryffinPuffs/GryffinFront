import React, { useState } from "react";
import { createProduct } from "./api-adapter";
import { useNavigate } from "react-router-dom";
import "../components/admin.css";

const MakeProduct = ({ allBooks, setAllBooks }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image_url, setImage_url] = useState("");
  const [image_url2, setImage_url2] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [audience, setAudience] = useState("");

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
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="MakeProduct">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <input
          placeholder="Name"
          className="name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="price"
          className="price"
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="image_url"
          className="image_url"
          type="text"
          value={image_url}
          onChange={(event) => {
            setImage_url(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="image_url2"
          className="image_url2"
          type="text"
          value={image_url2}
          onChange={(event) => {
            setImage_url2(event.target.value);
          }}
        ></input>
        <input
          placeholder="author"
          className="author"
          type="text"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="description"
          className="description"
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="audience"
          className="audience"
          type="text"
          value={audience}
          onChange={(event) => {
            setAudience(event.target.value);
          }}
          required
        ></input>
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeProduct;
