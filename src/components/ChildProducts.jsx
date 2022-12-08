import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProductByAudience } from "./api-adapter";
import wishList from "./wishlist.png";

const ChildProducts = ({ setBookInfo }) => {
  const navigate = useNavigate();
  const [allChildProducts, setAllChildProducts] = useState({});

  useEffect(() => {
    async function fetchChildProducts() {
      const childBooks = await getProductByAudience("child");
      setAllChildProducts(childBooks);
    }
    fetchChildProducts();
  }, []);

  return (
    <div className="childproducts">
      {allChildProducts && allChildProducts.length ? (
        allChildProducts.map((product) => {
          return (
            <div id="childBooks" key={`product-${product.id}`}>
              <div>
                <button
                  className="bookChildContainer"
                  onClick={() => {
                    setBookInfo(product.id);
                    navigate(`/singleproduct/${product.id}`);
                  }}
                >
                  <img
                    id="childBookImg"
                    className="childHover"
                    data-hover="See Details"
                    src={product.image_url}
                    alt="book image"
                  ></img>
                  <div id="childTxtItems">
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
                          data-hover="Add to favorites"
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
        <h2> No Children's Books Available</h2>
      )}
    </div>
  );
};

export default ChildProducts;
