import useSWR from "swr";
import { fetchAPI } from "./api";
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
  const { data, error } = useSWR("/me", fetchAPI);
  return data;
}

export function useProduct(productId: string) {
  const { data, error } = useSWR(`/products/${productId}`, fetchAPI);
  return data as ProductProps;
}
export function useSearchProducts(query: string) {
  const { data, error } = useSWR(
    `/search?q=${query}&offset=0&limit=10`,
    fetchAPI
  );
  if (data) return data.results as Array<ProductProps>;
}
export function useFeaturedProducts() {
  const { data, error } = useSWR("/products", fetchAPI);
  if (data) return data.featuredProducts as Array<ProductProps>;
}
