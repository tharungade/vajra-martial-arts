import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link to="/" className={styles.logo}>
            <img 
              src="./vajra-logo.png" 
              alt="Vajra Martial Arts Academy Logo" 
              width={28} 
              height={28} 
              loading="lazy"
            />
            <h2>Vajra Martial Arts</h2>
          </Link>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Vajra Martial Arts Academy. All Rights
            Reserved.
          </p>
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/vajra.mix.ma/"
            aria-label="Facebook"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/vajra_martialarts_academy/"
            aria-label="Instagram"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/@vajramartialartsacademy7867"
            aria-label="YouTube"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};