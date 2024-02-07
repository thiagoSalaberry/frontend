import useSWR from "swr";
import { fetchAPI, fetchAPI2 } from "./api";
import exp from "constants";
type ProductProps = {
  productId: string;
  title: string;
  description: string;
  unit_price: number;
  stock: "true" | "false";
  category: string;
  images: string;
  rating: number;
  reviews: number;
};
export function useMe() {
  const { data, error } = useSWR(
    "/me",
    fetchAPI2 /*, { refreshInterval: 1000 }*/
  );
  if (error) {
    return null;
  } else {
    return data;
  }
}

export function useProduct(productId: string) {
  const { data, error } = useSWR(`/products/${productId}`, fetchAPI2);
  return data as ProductProps;
}
export function useSearchProducts(
  query: string,
  offset: string,
  limit: string
) {
  const { data, error, isLoading } = useSWR(
    `/search?q=${query}&offset=${offset}&limit=${limit}`,
    fetchAPI2
  );
  if (data)
    return {
      searchedProduct: data.searchedProduct,
      results: data.results as Array<ProductProps>,
      pagination: {
        offset: data.pagination.offset,
        limit: data.pagination.limit,
        total: data.pagination.total,
      },
    };
}
export function useFeaturedProducts() {
  const { data, error } = useSWR("/products", fetchAPI2);
  if (data) return data.featuredProducts as Array<ProductProps>;
}

// export function useCartProducts() {
//   const {data, error} = useSWR("/")
// }
