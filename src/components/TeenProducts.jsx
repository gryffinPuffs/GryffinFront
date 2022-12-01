import React, { useEffect, useState } from "react";
import { getProductByAudience } from "./api-adapter";
import { Link } from "react-router-dom";

const TeenProducts = () => {
  const [allTeenBooks, setAllTeenBooks] = useState({});

  useEffect(() => {
    async function fetchTeenBooks() {
      const teenBooks = await getProductByAudience({ audience: "teen" });
      setAllTeenBooks(teenBooks);
    }
    fetchTeenBooks();
  }, []);

  return (
    <div id="teenproducts">
      <h1>Teen Classics</h1>
      {allTeenBooks && allTeenBooks.length ? (
        allTeenBooks.map((product) => {
          return (
            <div id="teenBooks" key={`product-${product.id}`}>
              <div className="bookImg">
                <img src={product.image_url} alt="book image"></img>
              </div>
              <div className="title">Book Name: {product.name}</div>
              <div className="price">Book Price: {product.price}</div>
              <div className="description">
                Book description: {product.description}
              </div>
              <button>Add to Cart</button>
              <button
              // onClick={() => {
              //   props.setSelectedProduct({});
              // }}
              >
                See Details
              </button>
              <br></br>
              <Link>Add to Wish List</Link>
            </div>
          );
        })
      ) : (
        <h2> No Teen Books Available</h2>
      )}
    </div>
  );
};

export default TeenProducts;
