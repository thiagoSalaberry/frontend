import { LayoutComp } from "@/components/layout";
import styles from "./ui.module.css"
import { ToastifyComp } from "@/components/toast";
import { StarIcon } from "@/ui/icons/star";
import { StarHalfFillIcon } from "@/ui/icons/star-half-fill";
import { StarFillIcon } from "@/ui/icons/star-fill";
export default function UI() {
    const estrellas = ["💛", "🧡", "🖤"];
    const isInteger = (n: number): boolean => {
        return n % 1 === 0;
      };
    const getStar = (number:0 | 0.5 | 1, index:number):JSX.Element => {
    switch (number) {
        case 0:
        return <StarIcon key={index} size="12"/>;
        case 0.5:
        return <StarHalfFillIcon key={index} size="12"/>;
        case 1:
        return <StarFillIcon key={index} size="12"/>;
        }
    };
    const showStars2 = (rating:number) => {
        if(rating > 5 || rating < 0) {
            throw new Error("El puntaje debe estar entre 0 y 5");
        };
        const result = [];
        const fullStars = new Array(Math.floor(rating)).fill(1/*<StarFillIcon size="12"/>*/);
        if(isInteger(rating)) {
            const emptyStars = new Array(5 - Math.floor(rating)).fill(0/*<StarIcon size="12"/>*/);
            result.push(...fullStars, ...emptyStars);
        } else {
            fullStars.push(0.5/*<StarHalfFillIcon size="12"/>*/);
            const emptyStars = new Array(5 - Math.floor(rating) - 1).fill(0/*<StarIcon size="12"/>*/);
            result.push(...fullStars, ...emptyStars);
        };
        return result;
    }
    const stars = showStars2(5);
    return (
        <LayoutComp user={false}>
            <section className={styles["ui-page"]}>
                <div className={styles["stars"]}>
                    {stars.map((star, index) => getStar(star, index))}
                </div>
            </section>
        </LayoutComp>
    )
}