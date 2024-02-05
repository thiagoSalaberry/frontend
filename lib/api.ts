export async function fetchAPI(endpoint: string) {
  if (endpoint == "/products") {
    const res = await fetch(
      `https://desafio-e-commerce-five.vercel.app/api${endpoint}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application-json",
        },
      }
    );
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    } else if (res.status >= 400 && res.status < 500) {
      throw new Error("Error de cliente llamado por fetchAPI()");
    }
  }
  if (endpoint.includes("/search")) {
    const res = await fetch(
      `https://desafio-e-commerce-five.vercel.app/api${endpoint}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application-json",
        },
      }
    );
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    } else if (res.status >= 400 && res.status < 500) {
      throw new Error("Error de cliente llamado por fetchAPI()");
    }
  }
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No access token found");
  const res = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api${endpoint}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application-json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    return data;
  } else if (res.status >= 400 && res.status < 500) {
    throw new Error("Error de cliente llamado por fetchAPI()");
  }
}

// export async function postApi(endpoint, body) {
//   // Realiza una petición POST a la API y devuelve los datos en JSON
//   let config = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   };

//   const response = await fetch(
//     `https://desafio-e-commerce-five.vercel.app/api${endpoint}`,
//     config
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   return data;
// }
type RequestMethod = "GET" | "POST" | "PATCH";

// Función que se encarga de hacer el login del usuario
export async function secondFetchAPI(
  endpoint: string,
  method: RequestMethod,
  body?: object
) {
  const response = await fetch(
    `https://desafio-e-commerce-five.vercel.app/api${endpoint}`,
    {
      method,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
}
