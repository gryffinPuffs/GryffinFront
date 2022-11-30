import React from "react";

const AdultProducts = () => {
  // const BASE_URL = "http://localhost:8080/api";
  // const [allAdultProducts, setAllAdultProducts] = userState({})

  // useEffect(() => {
  //   const getProductByAudience = async () => {
  //     const response = await fetch(`BASE_URL${audience}`
  //     );
  //   const result = await response.json();
  //   setAllAdultProducts(result);
  // };
  // getProductByAudience()}, []);

  return (
    <div id="adultproducts">
      {/* {allAdultProducts && allAdultProducts.length ? allAdultProducts} */}
      <h2> No Adult Books</h2>
    </div>
  );
};

export default AdultProducts;
