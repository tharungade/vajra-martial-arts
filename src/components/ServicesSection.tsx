import React from "react";
import styles from "./ServicesSection.module.css";
import { services } from "../helpers/siteData.tsx";

export const ServicesSection = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Disciplines</span>
          <h2 className={styles.title}>What We Teach</h2>
          <p className={styles.subtitle}>
            From foundational striking to advanced grappling, our programs are
            designed to build complete martial artists.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.name} className={styles.card}>
              <div className={styles.iconWrapper}>
                <service.icon className={styles.icon} size={32} />
              </div>
              <h3 className={styles.cardTitle}>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};