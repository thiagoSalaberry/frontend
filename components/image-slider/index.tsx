import styles from "./slider.module.css";
import { SliderData } from "./data";
import Router from "next/router";
import { useState } from "react";
interface Slides {
    image:string;
}
type SliderProps = {
    slider: Slides[]
}
export function ImageSliderComp(props:SliderProps) {
    const [current, setCurrent] = useState(0);
    const length = props.slider.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if(!Array.isArray(props.slider) || props.slider.length <= 0) {
        return null;
    };
    return (
        <section className={styles["slider"]}>
            <div className={styles["left-arrow"]} onClick={prevSlide}>{"<---"}</div>
            <div className={styles["right-arrow"]} onClick={nextSlide}>{"--->"}</div>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? styles["slide-active"] : styles["slide"]} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="travel image" className={styles["image"]}/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}