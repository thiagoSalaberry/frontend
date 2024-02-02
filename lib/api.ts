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
