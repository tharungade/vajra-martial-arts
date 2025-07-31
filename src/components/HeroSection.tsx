import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { Button } from "../utils/Button.tsx";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.videoOverlay} />
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="https://images.unsplash.com/photo-1517438322307-e67111335449?w=800"
      >
        <source src="./boxing-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Forge Your Body<span className={styles.highlight}>.</span>
          <br />
          Master Your Mind<span className={styles.highlight}>.</span>
        </h1>
        <p className={styles.tagline}>
          Ghaziabad's elite training ground for Muay Thai, MMA, and total
          fitness. Unleash your potential at Vajra Martial Arts Academy.
        </p>
        <div className={styles.ctaContainer}>
          <Button size="lg" asChild>
            <Link to="#contact">
              Book a Free Trial <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};