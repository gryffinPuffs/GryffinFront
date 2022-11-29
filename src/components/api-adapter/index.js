const BASE_URL = "http://localhost:8080/";

export async function registerUser(username, password) {
  const registerOptions = {
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
    const response = await fetch(
      `${BASE_URL}/api/users/register`,
      registerOptions
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function authUser(token) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
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
    const response = await fetch(`${BASE_URL}/api/users/login`, loginOptions);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

//getAllProducts
export async function getAllProducts() {
  try {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(BASE_URL, options);
    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

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
    const response = await fetch(BASE, options);
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
const BASE = "http://localhost:8080/"


export async function getCart(){
  const response = await fetch(`${BASE}/cart`);
  const result=await response.json();
  return result
}
export async function createCart(user_id, active){
  const options={
    method:"POST",
    headers:{
      "Content-type":"application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body:JSON.stringify({
      user_id,
      active,
    }),
  }
  const response= await fetch(`${BASE}/cart`, options);
  const result= await response.json();
  return result
}
export async function updateCart(user_id, active){
  const options={
    method:"PATCH",
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
        user_id,
        active,
    }),
};
const response=await fetch(`${BASE}/cart/${id}`, options);
const result= await response.json();
return result;
}
