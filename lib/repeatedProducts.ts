type CartProduct = {
  category: string;
  description: string;
  images: string;
  productId: string;
  rating: number;
  reviews: number;
  stock: "true" | "false";
  title: string;
  unit_price: number;
};
type Respuesta = {
  productId: string;
  productImg: string;
  productTitle: string;
  productUnitPrice: number;
  quantity: number;
};
export const containsDuplicate = (cart: CartProduct[]): any => {
  let ids: string[] = [];
  let products: Respuesta[] = [];
  cart.map((prod) => {
    if (!ids.includes(prod.productId)) {
      ids.push(prod.productId);
      products.push({
        productId: prod.productId,
        productImg: prod.images,
        productTitle: prod.title,
        productUnitPrice: prod.unit_price,
        quantity: 1,
      });
    } else if (ids.includes(prod.productId)) {
      const idToAdd = products.find((e) => e.productId === prod.productId);
      if (idToAdd) idToAdd.quantity++;
    }
  });
  return products;
};
