import React from "react";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=800"
            alt="Martial artist training"
            className={styles.image}
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <span className={styles.preTitle}>Our Philosophy</span>
          <h2 className={styles.title}>
            The Way of the <span className={styles.highlight}>Vajra</span>
          </h2>
          <p className={styles.text}>
            A <span className={styles.bold}>Vajra</span> is a ritual weapon
            symbolizing the dual properties of a diamond and a thunderbolt.
          </p>
          <div className={styles.concepts}>
            <div className={styles.conceptItem}>
              <h3 className={styles.conceptTitle}>Indestructibility</h3>
              <p className={styles.conceptText}>
                Like a diamond, we forge resilience and an unbreakable spirit.
                Our training builds a foundation that withstands any challenge.
              </p>
            </div>
            <div className={styles.conceptItem}>
              <h3 className={styles.conceptTitle}>Irresistible Force</h3>
              <p className={styles.conceptText}>
                Like a thunderbolt, we cultivate explosive power and decisive
                action. We teach you to move with purpose and unstoppable
                momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};