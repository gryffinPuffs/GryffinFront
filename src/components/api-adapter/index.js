const BASE_URL = "http://localhost:8080/"

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
          "Authorization": `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result)
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