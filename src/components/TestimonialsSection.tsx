import React from "react";
import styles from "./TestimonialsSection.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../utils/Carousel.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar.tsx";
import { testimonials } from "../helpers/siteData.tsx";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section
      className={styles.testimonials}
      id="testimonials"
      style={{
        background: `linear-gradient(180deg, hsl(240 10% 3.9% / 0.88) 0%, hsl(240 10% 3.9% / 0.92) 100%), url('${process.env.PUBLIC_URL}/vajra_main_4.jpg') center/cover no-repeat`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Word on the Mat</span>
          <h2 className={styles.title}>What Our Members Say</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className={styles.carousel}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className={styles.carouselItem}
              >
                <div className={styles.card}>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className={styles.starIcon} />
                    ))}
                  </div>
                  <p className={styles.quote}>"{testimonial.quote}"</p>
                  <div className={styles.authorInfo}>
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className={styles.authorDetails}>
                      <p className={styles.authorName}>{testimonial.name}</p>
                      <p className={styles.authorRole}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};