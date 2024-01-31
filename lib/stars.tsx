import { StarIcon } from "@/ui/icons/star";
import { StarHalfFillIcon } from "@/ui/icons/star-half-fill";
import { StarFillIcon } from "@/ui/icons/star-fill";
export const showStars = (n: number): number[] => {
  const initialArray = new Array(5).fill(<StarIcon size="16"/>);
  if (isInteger(n)) {
    for (let i = 0; i < n; i++) {
      initialArray[i] = <StarFillIcon size="16"/>;
    }
  } else {
    for (let i = 0; i < Math.floor(n); i++) {
      initialArray[i] = <StarFillIcon size="16"/>;
    }
    initialArray[Math.floor(n)] = <StarHalfFillIcon size="16"/>;
    initialArray[Math.floor(n) + 1] = <StarIcon size="16"/>;
    if (Math.floor(n) === 4) initialArray.pop();
  }
  return initialArray;
};
const isInteger = (n: number): boolean => {
  return n % 1 === 0;
};
