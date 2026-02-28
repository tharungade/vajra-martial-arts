import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./HeroSection.module.css";
import { Button } from "../utils/Button.tsx";
import { ArrowRight } from "lucide-react";

const SLIDER_IMAGES = [
  { src: "./hero_slider_1.jpg", alt: "Vajra Martial Arts Training 1" },
  { src: "./hero_slider_2.jpg", alt: "Vajra Martial Arts Training 2" },
  { src: "./hero_slider_3.jpg", alt: "Vajra Martial Arts Training 3" },
  { src: "./hero_slider_4.jpg", alt: "Vajra Martial Arts Training 4" },
  { src: "./hero_slider_5.jpg", alt: "Vajra Martial Arts Training 5" },
];

export const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className={styles.hero} id="home">
      {/* Slider */}
      <div className={styles.sliderViewport} ref={emblaRef}>
        <div className={styles.sliderContainer}>
          {SLIDER_IMAGES.map((image, index) => (
            <div className={styles.slide} key={index}>
              <img
                className={styles.slideImage}
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className={styles.videoOverlay} />

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Forge Your Body<span className={styles.highlight}>.</span>
          <br />
          Master Your Mind<span className={styles.highlight}>.</span>
        </h1>
        <p className={styles.tagline}>
          The elite training ground for Muay Thai, MMA, and total
          fitness. Unleash your potential at Vajra Martial Arts Academy.
        </p>
        <div className={styles.ctaContainer}>
          <Button size="lg" asChild>
            <Link to="#contact">
              Book your Trial <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {SLIDER_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ""
              }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};