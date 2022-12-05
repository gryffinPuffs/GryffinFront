import React, { useEffect, useState } from "react";
import { getProductByAudience } from "./api-adapter";
import { Link, useNavigate } from "react-router-dom";
import wishList from "./wishlist.png";

const TeenProducts = ({ bookInfo, setBookInfo }) => {
  const navigate = useNavigate();
  const [allTeenBooks, setAllTeenBooks] = useState({});

  useEffect(() => {
    async function fetchTeenBooks() {
      const teenBooks = await getProductByAudience("teen");
      setAllTeenBooks(teenBooks);
    }
    fetchTeenBooks();
  }, []);

  return (
    <div className="teenproducts">
      {allTeenBooks && allTeenBooks.length ? (
        allTeenBooks.map((product) => {
          return (
            <div id="teenBooks" key={`product-${product.id}`}>
              <button
                className="teenBookContainer"
                onClick={() => {
                  setBookInfo(product.id);
                  navigate(`/singleproduct/${product.id}`);
                }}
              >
                <img
                  id="teenBookImg"
                  src={product.image_url}
                  alt="book image"
                ></img>
                <div id="teenTxtItems">
                  <div
                    id="title"
                    onClick={() => {
                      setBookInfo(product.id);
                      navigate(`/singleproduct/${product.id}`);
                    }}
                  >
                    {product.name}
                  </div>

                  <div>
                    <Link id="wishlist">
                      <span className="wishListText" data-hover="Add to Wishlist">
                        <img
                          id="wishlistImg"
                          src={wishList}
                          alt="Wishlist"
                        ></img>
                      </span>
                    </Link>
                  </div>
                </div>
              </button>
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
