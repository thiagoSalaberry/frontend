import { StarIcon } from "@/ui/icons/star";
import { StarHalfFillIcon } from "@/ui/icons/star-half-fill";
import { StarFillIcon } from "@/ui/icons/star-fill";

const isInteger = (n: number) => {
  return n % 1 === 0;
};

const getStars = (number: 0 | 0.5 | 1, index: number):JSX.Element => {
  switch(number) {
    case 0:
      return <StarIcon key={index} size="12"/>;
    case 0.5:
      return <StarHalfFillIcon key={index} size="12"/>;
    case 1:
      return <StarFillIcon key={index} size="12"/>;
  }
};

export const showStars = (rating: number) => {
  if(rating > 5 || rating < 0) {
    throw new Error("El puntaje debe estar entre 0 y 5");
  };
  const result = [];
  const fullStars = new Array(Math.floor(rating)).fill(1);
  if(isInteger(rating)) {
    const emptyStars = new Array(5 - rating).fill(0);
    result.push(...fullStars, ...emptyStars);
  } else {
    fullStars.push(0.5);
    const emptyStars = new Array(5 - Math.floor(rating) - 1).fill(0);
    result.push(...fullStars, ...emptyStars)
  }
  return result.map((star, index) => getStars(star, index)); //rating == 3.5 => result = [1, 1, 1, 0.5, 0]
};