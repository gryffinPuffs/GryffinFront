const BASE_URL = "https://gryffinback.onrender.com/api";

export async function createAddress(
  address_line1,
  address_line2,
  city,
  state,
  zip_code
) {
  const addressOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address_line1,
      address_line2,
      city,
      state,
      zip_code,
    }),
  };
  try {
    const response = await fetch(`${BASE_URL}/address`, addressOptions);
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(
  username,
  password,
  name,
  admin,
  email,
  address_id
) {
  const registerOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      name,
      admin,
      email,
      address_id,
    }),
  };
  try {
    const response = await fetch(`${BASE_URL}/user/register`, registerOptions);
    const result = await response.json();
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
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserByUsername(username) {
  try {
    const response = await fetch(`${BASE_URL}/user/${username}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllUsers() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/user`, {
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

//getAllProducts
export async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/product`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

//get products by audience

export async function getProductByAudience(audience) {
  try {
    const response = await fetch(`${BASE_URL}/product/audience/${audience}`);
    const result = await response.json();
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


export async function createProduct(
  name,
  price,
  image_url,
  image_url2,
  author,
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
        image_url2,
        author,
        audience,
        description,
      }),
    };
    const response = await fetch(`${BASE_URL}/product`, options);
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
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  id,
  name,
  price,
  image_url,
  image_url2,
  author,
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
        image_url2,
        author,
        audience,
        description,
      }),
    };
    const response = await fetch(`${BASE_URL}/product/${id}`, options);
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

    const response = await fetch(`${BASE_URL}/product/${id}`, options);
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

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getInactiveCartByUsername(username) {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await fetch(
      `${BASE_URL}/cart/${username}/inactive`,
      options
    );
    const result = await response.json();
console.log(result, "is there anything here?")

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createCart() {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await fetch(`${BASE_URL}/cart`, options);
  const result = await response.json();
  return result;
}
export async function updateCart(cartId, user_id, active) {
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
  const response = await fetch(`${BASE_URL}/cart/${cartId}`, options);
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

export async function getAddressById(id) {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await fetch(`${BASE_URL}/address/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
