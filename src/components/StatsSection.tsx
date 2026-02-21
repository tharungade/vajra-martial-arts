import React, { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";
import { Star, MapPin, Users, Award } from "lucide-react";

interface StatItem {
    icon: React.ElementType;
    value: number;
    suffix: string;
    label: string;
}

const stats: StatItem[] = [
    { icon: Star, value: 4.8, suffix: "+", label: "Google Rating" },
    { icon: MapPin, value: 2, suffix: "", label: "Training Centers" },
    { icon: Users, value: 500, suffix: "+", label: "Students Trained" },
    { icon: Award, value: 5, suffix: "+", label: "Years Experience" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        const isDecimal = end % 1 !== 0;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = easeOutQuart * end;

            setCount(isDecimal ? Math.round(currentValue * 10) / 10 : Math.floor(currentValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, start]);

    return count;
};

const StatCard: React.FC<{ stat: StatItem; isVisible: boolean }> = ({ stat, isVisible }) => {
    const count = useCountUp(stat.value, 2000, isVisible);
    const Icon = stat.icon;

    return (
        <div className={styles.statCard}>
            <div className={styles.iconWrapper}>
                <Icon size={28} className={styles.icon} />
            </div>
            <div className={styles.statValue}>
                {stat.value % 1 !== 0 ? count.toFixed(1) : count}
                <span className={styles.suffix}>{stat.suffix}</span>
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
        </div>
    );
};

export const StatsSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.stats} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};
