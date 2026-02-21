import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Button } from "../utils/Button.tsx";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    interest: string;
    location: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "general",
        location: "ghaziabad",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>("idle");

    const interests = [
        { value: "general", label: "General Inquiry" },
        { value: "muay-thai", label: "Muay Thai" },
        { value: "mma", label: "MMA" },
        { value: "boxing", label: "Boxing" },
        { value: "bjj", label: "Brazilian Jiu-Jitsu" },
        { value: "fitness", label: "Fitness Training" },
        { value: "self-defense", label: "Self Defense" },
        { value: "trial", label: "Book Free Trial" },
    ];

    const locations = [
        { value: "ghaziabad", label: "Ghaziabad Centre" },
        { value: "mohali", label: "Mohali Centre" },
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus("submitting");

        try {
            // Using Web3Forms - free form submission service
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "18e016f2-b576-42ea-ba0d-3360512ac8d5",
                    subject: `New Inquiry from ${formData.name} - Vajra Martial Arts (${locations.find((l) => l.value === formData.location)?.label})`,
                    from_name: "Vajra Martial Arts Website",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    interest: interests.find((i) => i.value === formData.interest)?.label,
                    location: locations.find((l) => l.value === formData.location)?.label,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    interest: "general",
                    location: "ghaziabad",
                });
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className={styles.successMessage}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>Thank You!</h3>
                <p>We've received your message and will get back to you within 24 hours.</p>
                <Button onClick={() => setStatus("idle")}>Send Another Message</Button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Schedule Your Free Trial</h3>
            <p className={styles.formSubtitle}>
                Fill out the form below and our team will contact you shortly.
            </p>

            <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.label}>
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                        placeholder="Enter your name"
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="phone" className={styles.label}>
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                        placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="interest" className={styles.label}>
                        I'm Interested In
                    </label>
                    <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className={styles.select}
                    >
                        {interests.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="location" className={styles.label}>
                        Preferred Location
                    </label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={styles.select}
                    >
                        {locations.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                    Your Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                    placeholder="Tell us about your fitness goals or ask any questions..."
                    rows={4}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            {status === "error" && (
                <div className={styles.errorMessage}>
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again or contact us directly.</span>
                </div>
            )}

            <Button
                type="submit"
                size="lg"
                className={styles.submitButton}
                disabled={status === "submitting"}
            >
                {status === "submitting" ? (
                    <>
                        <Loader2 size={20} className={styles.spinner} /> Sending...
                    </>
                ) : (
                    <>
                        Send Message <Send size={18} />
                    </>
                )}
            </Button>
        </form>
    );
};
