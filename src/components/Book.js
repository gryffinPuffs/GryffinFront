import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// import { getProductById } from "./api-adapter";
// import { useParams } from "react-router-dom";

const Book = ({ book, setBookInfo }) => {
  const navigate=useNavigate()
  // const { bookId } = useParams();

  // useEffect(() => {
  //   async function fetchSingleBook() {
  //     const singleBookInfo = await getProductById(bookId);
  //     console.log(singleBookInfo);
  //     setBookInfo(singleBookInfo);
  //   }
  //   fetchSingleBook();
  // }, []);

  return (
    <div>
      <button
        onClick={() => {
          setBookInfo(book.id);
          navigate(`/singleproduct/${book.id}`);
        }}
        className="bookImg"
      >
        <img
          src={book.image_url}
          alt="book image"
          height={400}
          width={300}
        ></img>
      </button>
      <div className="title">{book.name}</div>
      <div className="author">Author: {book.author}</div>
    </div>
  );
};
export default Book;
