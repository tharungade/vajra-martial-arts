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
            src="https://assets.floot.app/be3c5f8f-c277-446c-89e6-4b6119f647d6/6f5d6f7b-6cba-412f-aedd-bb85f30cbe4a.png" 
            alt="Vajra Martial Arts Academy Logo" 
            width={32} 
            height={32} 
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