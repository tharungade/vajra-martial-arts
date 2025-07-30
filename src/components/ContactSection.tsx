import React from "react";
import styles from "./ContactSection.module.css";
import { Button } from "../utils/Button.tsx";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.preTitle}>Get in Touch</span>
          <h2 className={styles.title}>Join Us Today</h2>
          <p className={styles.subtitle}>
            Your journey to strength and discipline starts here. Visit us for a
            free trial class and experience the Vajra difference.
          </p>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <MapPin size={24} className={styles.icon} />
              <div>
                <h3>Our Location</h3>
                <p>Ghaziabad, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Phone size={24} className={styles.icon} />
              <div>
                <h3>Call Us</h3>
                <p>+91 9990004372</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Mail size={24} className={styles.icon} />
              <div>
                <h3>Email Us</h3>
                <p>vajrammaacademy@gmail.com</p>
              </div>
            </div>
          </div>
          <Button size="lg" asChild className={styles.ctaButton}>
            <a
              href="https://maps.app.goo.gl/2PXk6HbgZfjxUXVM6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </Button>
          
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3500.0410089786456!2d77.37631737460255!3d28.68841985377767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf128db0286ef%3A0xfd4227ffd59b803!2sVajra%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1753851402623!5m2!1sen!2sin"
              className={styles.mapIframe}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vajra Martial Arts Academy Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};