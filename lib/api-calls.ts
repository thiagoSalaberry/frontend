export async function sendCode(email: string) {
  if (!email) throw new Error("Debes ingresar un email para iniciar sesión");
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/auth`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else if (response.status >= 400 && response.status < 500) {
    throw new Error("Error de cliente llamado por sendCode()");
  }
}
export async function getToken(email: string, code: number) {
  if (!email || !code)
    throw new Error("Debes ingresar un código y un email para iniciar sesión");
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/auth/token`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    }
  );
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else if (response.status >= 400 && response.status < 500) {
    throw new Error("Error de cliente llamado por getToken()");
  }
}
export async function useToken(token: string) {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/me`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return data;
  } else if (response.status >= 400 && response.status < 500) {
    throw new Error("Error de cliente llamado por getToken()");
  }
}
export async function featuredProducts(): Promise<any[]> {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/products`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}
export async function searchProduct(query: string) {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/search?q=${query}&offset=0&limit=10`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}
export async function updateUserData(props: object) {
  console.log(props);
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/me`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(props),
    }
  );
  const data = await response.json();
  return data;
}

export async function addToCart(productId: string) {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/cart/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function removeFromCart(productId: string) {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function addToBookmarks(productId: string) {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/bookmarks/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function removeFromBookmarks(productId: string) {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api/bookmarks/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
