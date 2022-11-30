import React, {useState, useEffect} from "react";
import { getAllProducts } from "./api-adapter";

const AllBooks = () => {
  const [allBooks, setAllBooks]=useState([])

  useEffect(()=>{
    async function fetchAllBooks(){
      const allTheBooks=await getAllProducts();
      setAllBooks(allTheBooks);
      console.log(allTheBooks)
    }fetchAllBooks();
  }, []);

  return (
    <div id="allBooks">
      <h2> Find your new adventure!</h2>
      {/* add admin function for adding books here */}
      <div id="books">
    {allBooks && allBooks.length
    ? allBooks.map((book)=>{
      return(<>
        <div className="title">{book.name}</div>
        <div className="description">{book.description}</div>
        <div className="bookImg">{book.image_url}</div>
        <div className="price">{book.price}</div>
        </>
      )
    }): null}
      </div>
    </div>
  );
};

export default AllBooks;
