import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductByAudience } from "./api-adapter";
import wishList from "./wishlist.png";

const AdultProducts = ({ setBookInfo }) => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [allAdultBooks, setAllAdultBooks] = useState({});

  useEffect(() => {
    async function fetchAdultBooks() {
      const adultBooks = await getProductByAudience("adult");
      setAllAdultBooks(adultBooks);
    }
    fetchAdultBooks();
  }, []);

  return (
    <div className="adultproducts">
      {allAdultBooks && allAdultBooks.length ? (
        allAdultBooks.map((product) => {
          return (
            <div id="adultBooks" key={`product-${bookId}`}>
              <div>
                <button
                  className="adultBookContainer"
                  onClick={() => {
                    setBookInfo(bookId);
                    navigate(`/singleproduct/${product.id}`);
                  }}
                >
                  <img
                    id="adultBookImg"
                    src={product.image_url}
                    alt="book image"
                  ></img>
                  <div id="adultTxtItems">
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
                        <span
                          className="wishListText"
                          data-hover="Add to Favorites"
                        >
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
            </div>
          );
        })
      ) : (
        <h2> No Adult Books Available</h2>
      )}
    </div>
  );
};

export default AdultProducts;
