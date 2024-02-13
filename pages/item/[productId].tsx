import { LayoutComp } from "@/components/layout"
import BigCard from "@/components/big-card"
import styles from "./item.module.css";
import { useMe, useProduct } from "@/lib/hooks";
import { useParams } from "next/navigation";
import { SearcherComp } from "@/components/searcher";
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
export default function HomePage() {
  const user = useMe()
  const params = useParams();
  const product = useProduct(String(params?.productId));
  const bookmarkedProducts = user?.userData?.bookmarks;
  function isBookmarked(productId:string):boolean {
    return bookmarkedProducts?.some((bookmarksProd:ProductProps) => bookmarksProd.productId == productId)
  };
  console.log(isBookmarked("303"));
  return (
    <LayoutComp user={user ? user : false}>
      <main className={styles["item-page"]}>
        <SearcherComp type="text" name="query" placeholder="Encontrá tu producto acá..."/>
        <BigCard user={user} productId={product?.productId} inBookmarks={isBookmarked(product?.productId)} title={product?.title} imgUrl={product?.images} price={product?.unit_price} stock={product?.stock} rating={product?.rating} reviews={product?.reviews} desc={product?.description}/>
      </main>
    </LayoutComp>
  )
}