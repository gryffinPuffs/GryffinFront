import React, {useState, useEffect} from "react";
import { getProductById } from "./api-adapter";

const SingleProduct = ({bookInfo, setBookInfo}) => {
  const [singleBook, setSingleBook]=useState({})



useEffect(()=>{
    async function fetchBook(){
      const theBook = await getProductById(bookInfo);
      setSingleBook(theBook);
    }fetchBook();
  }, []);

  return (
    <div id="singleProduct">
      <div className="bookImg">
                <img src={singleBook.image_url} alt="book image"></img>
                <div id="singleInfo">
                <div className="title">{singleBook.name}</div>
                 <div className="author">Author: {singleBook.author}</div>
       <div className="price">Price: {singleBook.price}</div>
       <div className="description">Summary: {singleBook.description}</div>
       </div>
       </div>
    </div>
  );
};

export default SingleProduct;
