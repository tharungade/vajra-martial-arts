import React from "react";
import styles from "./ContactSection.module.css";
import { ContactForm } from "./ContactForm.tsx";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const whatsappNumber = "918810508369";
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in joining Vajra Martial Arts Academy."
  );

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Get in Touch</span>
          <h2 className={styles.title}>Start Your Journey Today</h2>
          <p className={styles.subtitle}>
            Your transformation begins with a single step. Schedule a free trial class
            and experience the Vajra difference firsthand.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.formWrapper}>
            <ContactForm />
          </div>

          <div className={styles.infoWrapper}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>

              <div className={styles.infoList}>
                <a href="tel:+918810508369" className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Call Us</span>
                    <span className={styles.infoValue}>+91 8810508369</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.infoItem} ${styles.whatsappItem}`}
                >
                  <div className={`${styles.iconWrapper} ${styles.whatsappIcon}`}>
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>WhatsApp</span>
                    <span className={styles.infoValue}>Chat with us instantly</span>
                  </div>
                </a>

                <a href="mailto:vajrammaacademy@gmail.com" className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email Us</span>
                    <span className={styles.infoValue}>vajrammaacademy@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/2PXk6HbgZfjxUXVM6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoItem}
                >
                  <div className={styles.iconWrapper}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Visit Us</span>
                    <span className={styles.infoValue}>Ghaziabad, Uttar Pradesh</span>
                  </div>
                </a>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrapper}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Training Hours</span>
                    <span className={styles.infoValue}>6:00 AM - 9:00 PM (Mon - Sat)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapWrapper}>
              <h4 className={styles.mapLabel}>📍 Ghaziabad</h4>
              <div className={styles.mapEmbed}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3500.0410089786456!2d77.37631737460255!3d28.68841985377767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf128db0286ef%3A0xfd4227ffd59b803!2sVajra%20Martial%20Arts%20Academy!5e0!3m2!1sen!2sin!4v1753851402623!5m2!1sen!2sin"
                  className={styles.mapIframe}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vajra Martial Arts Academy — Ghaziabad"
                />
              </div>
            </div>

            <div className={styles.mapWrapper}>
              <h4 className={styles.mapLabel}>📍 Mohali</h4>
              <div className={styles.mapEmbed}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13721.150048671283!2d76.7060312!3d30.7103167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef19ce04354b%3A0x6c4d7ae6e3bc7f25!2sVajra%20martial%20arts%20Academy%202.0!5e0!3m2!1sen!2sin!4v1771650139492!5m2!1sen!2sin"
                  className={styles.mapIframe}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vajra Martial Arts Academy — Mohali"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};