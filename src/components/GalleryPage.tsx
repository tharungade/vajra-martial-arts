import React, { useState, useEffect, useCallback } from "react";
import styles from "./GalleryPage.module.css";

const GALLERY_IMAGES = [
    { src: "./vajra_gallery_01.jpg", alt: "Vajra Martial Arts Gallery 1" },
    { src: "./vajra_gallery_02.jpg", alt: "Vajra Martial Arts Gallery 2" },
    { src: "./vajra_gallery_03.jpg", alt: "Vajra Martial Arts Gallery 3" },
    { src: "./vajra_gallery_04.jpg", alt: "Vajra Martial Arts Gallery 4" },
];

export const GalleryPage = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goNext = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }, [lightboxIndex]);

    const goPrev = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex(
            (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );
    }, [lightboxIndex]);

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [lightboxIndex, goNext, goPrev]);

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>Our Moments</span>
                    <h2 className={styles.title}>Gallery</h2>
                    <p className={styles.subtitle}>
                        Capturing the spirit, discipline, and camaraderie of Vajra Martial
                        Arts Academy.
                    </p>
                </div>

                <div className={styles.grid}>
                    {GALLERY_IMAGES.map((image, index) => (
                        <div
                            key={index}
                            className={styles.gridItem}
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={styles.gridImage}
                                loading="lazy"
                            />
                            <div className={styles.gridOverlay}>
                                <span className={styles.zoomIcon}>&#x1F50D;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button
                        className={styles.lightboxClose}
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        &times;
                    </button>
                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            goPrev();
                        }}
                        aria-label="Previous image"
                    >
                        &#8249;
                    </button>
                    <div
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={GALLERY_IMAGES[lightboxIndex].src}
                            alt={GALLERY_IMAGES[lightboxIndex].alt}
                            className={styles.lightboxImage}
                        />
                        <p className={styles.lightboxCaption}>
                            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
                        </p>
                    </div>
                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            goNext();
                        }}
                        aria-label="Next image"
                    >
                        &#8250;
                    </button>
                </div>
            )}
        </section>
    );
};
