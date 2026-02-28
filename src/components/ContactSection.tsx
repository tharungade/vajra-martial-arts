import React from "react";
import styles from "./ContactSection.module.css";
import { ContactForm } from "./ContactForm.tsx";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
            Your transformation begins with a single step. Schedule your trial class
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
                  <div className={`${styles.iconWrapper} ${styles.phoneIcon}`}>
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <span className={styles.infoLabel}>WhatsApp</span>
                    <span className={styles.infoValue}>Chat with us instantly</span>
                  </div>
                </a>

                <a href="mailto:vajrammaacademy@gmail.com" className={styles.infoItem}>
                  <div className={`${styles.iconWrapper} ${styles.emailIcon}`}>
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
                  <div className={`${styles.iconWrapper} ${styles.locationIcon}`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Visit Us</span>
                    <span className={styles.infoValue}>Ghaziabad & Mohali</span>
                  </div>
                </a>

                <div className={styles.infoItem}>
                  <div className={`${styles.iconWrapper} ${styles.hoursIcon}`}>
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