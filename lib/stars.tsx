import { StarIcon } from "@/ui/icons/star";
import { StarHalfFillIcon } from "@/ui/icons/star-half-fill";
import { StarFillIcon } from "@/ui/icons/star-fill";
// export const showStars = (n: number): JSX.Element[] => {
//   if(n < 0 || n > 5) throw new Error("El número debe ser mayor o igual a 0 y menor o igual que 5")
//   const initialArray = new Array(5).fill(<StarIcon size="16" key={"star"}/>)
//   const fillStars = (count:number, icon:JSX.Element) => {
//     return initialArray.map((_, i) => i < count ? icon : <StarIcon size="16" key={i}/>)
//   };
//   if(isInteger(n)) {
//     return fillStars(n, <StarFillIcon size="16" key={1}/>);
//   } else {
//     const filledStars = fillStars(Math.floor(n), <StarFillIcon size="16" key={2}/>);
//     filledStars[Math.floor(n)] = <StarHalfFillIcon size="16" key={"star-half-fill"}/>
//     return filledStars;
//   }
// };
// const isInteger = (n: number): boolean => {
//   return n % 1 === 0;
// };

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