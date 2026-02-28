import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Button } from "../utils/Button.tsx";
import { navLinks } from "../helpers/siteData.tsx";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img 
            src="./vajra_logo.jpg" 
            alt="Vajra Martial Arts Academy Logo" 
            width={40} 
            height={40} 
            loading="lazy"
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
          <h1>
            Vajra<span className={styles.logoHighlight}>.</span>
          </h1>
        </Link>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button asChild>
            <Link to="#contact">Join Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};