export type ProductProps = {
  productId: string;
  title: string;
  description: string;
  unit_price: number;
  stock: "true" | "false";
  category: string;
  images: string;
  rating: number;
  reviews: number;
  quantity?: number;
};

export type CardProps = {
  productId: string;
  title: string;
  desc?: string;
  unit_price: number;
  imgUrl: string;
  rating?: number;
  reviews?: number;
  stock?: "true" | "false";
  user: boolean;
  inCart?: boolean | undefined;
  inBookmarks: boolean;
};
