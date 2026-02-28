import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { Button } from "../utils/Button.tsx";
import { navLinks } from "../helpers/siteData.tsx";

const galleryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
];

export const Header = () => {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";
  const currentNavLinks = isGalleryPage ? galleryNavLinks : navLinks;
  const joinNowHref = isGalleryPage ? "/#contact" : "#contact";

  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {currentNavLinks.map((link) => (
            <Link key={link.href} to={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button asChild>
            <Link to={joinNowHref}>Join Now</Link>
          </Button>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>

      {/* Mobile slide-out menu */}
      {mobileOpen && (
        <div className={styles.mobileBackdrop} onClick={() => setMobileOpen(false)} />
      )}
      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ""}`}>
        {currentNavLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileActions}>
          <Button asChild>
            <Link to={joinNowHref} onClick={() => setMobileOpen(false)}>
              Join Now
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};