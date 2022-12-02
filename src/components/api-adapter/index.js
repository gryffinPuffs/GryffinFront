const BASE_URL = "http://localhost:8080/api";

export async function createAddress(address_id) {
    const addressOptions = {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
           address_id
       }),
    };
    try {
       const response = await fetch (`${BASE_URL}/address`, addressOptions)
       const result = response.json();
       return result;
    } catch (error) {
       console.error(error);
    }   
   }

export async function registerUser(username, password, name, email) {
  const registerOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      name,
      email,
    }),
  };
  try {
    const response = await fetch(`${BASE_URL}/user/register`, registerOptions);
    console.log(response, "this is the response");
    const result = await response.json();
    console.log(result, "register result");
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function authUser(token) {
  try {
    const response = await fetch(`${BASE_URL}/user/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(username, password) {
  const loginOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  try {
    const response = await fetch(`${BASE_URL}/user/login`, loginOptions);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserByUsername(username) {
  console.log(username, "api username");
  try {
    const response = await fetch(`${BASE_URL}/user/${username}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//getAllProducts
export async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/product`);
    const result = await response.json();
    console.log(result, "getallbooks, result");
    return result;
  } catch (error) {
    console.error(error);
  }
}

//get products by audience

export async function getProductByAudience(audience) {
  try {
    // const options = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await fetch(`${BASE_URL}/product/audience/${audience}`);
    const result = await response.json();
    console.log("get products by audience fetch", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id) {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${BASE_URL}/product/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//get getProductsByName

export async function getProductsByName(name) {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`BASE_URL${name}`, options);
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

//get getProductsById
// export async function getProductsById(id) {
//   try {
//     const options = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const response = await fetch(`BASE_URL${id}`, options);
//     const result = await response.json();

//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
//createProducts
export async function createProduct(
  name,
  price,
  image_url,
  description,
  audience
) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        price,
        image_url,
        audience,
        description,
      }),
    };
    const response = await fetch(BASE_URL, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function addItemToCart(
  cart_id,
  productId,
  price,
  quantity,
  addOne
) {
  try {
    const cart = { product_id: Number(productId), price, quantity };
    addOne ? (cart.addOne = true) : null;
    console.log("cart before being sent back", cart);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    };
    const response = await fetch(
      `${BASE_URL}/cart/${cart_id}/product`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//attachProductsToCart
export async function attachProductsToCart(carts) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ carts }),
    };
    const response = await fetch(BASE_URL, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//updateProducts
export async function updateProduct(
  name,
  price,
  image_url,
  audience,
  description
) {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        price,
        image_url,
        audience,
        description,
      }),
    };
    const response = await fetch(`BASE_URL${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//delete product
export async function deleteProduct(id) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await fetch(`BASE_URL${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getCart() {
  const response = await fetch(`${BASE}/cart`);
  const result = await response.json();
  return result;
}
export async function getActiveCartByUsername(username) {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await fetch(
      `${BASE_URL}/cart/${username}/active`,
      options
    );
    const result = await response.json();
    console.log(result, "active cart");

    return result;
  } catch (error) {
    console.error(error);
  }
}
export async function createCart(user_id, active) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      user_id,
      active,
    }),
  };
  const response = await fetch(`${BASE}/cart`, options);
  const result = await response.json();
  return result;
}
export async function updateCart(user_id, active) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      user_id,
      active,
    }),
  };
  const response = await fetch(`${BASE}/cart/${id}`, options);
  const result = await response.json();
  return result;
}

export async function deleteProductInCart(cartItemId) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await fetch(
      `${BASE_URL}/cart_item/${cartItemId}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// export async function updateCartProduct(
// cartId,
// productId,
// price,
// quantity,

// ) {
//   try {
//     const options = {
//       method: "PATCH",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify({
//         cartId,
//         productId,
//         price,
//         quantity,
//       }),
//     };
//     const response = await fetch(`${BASE_URL}/cart_item/${cartId}`, options);
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// }
