"use client";

import { useState, useTransition } from "react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

const INQUIRY_TYPES = [
  "Boat Rental",
  "Jet Ski Rental",
  "Event Rental",
  "Event Information",
  "Merchandise Question",
  "General Inquiry",
];

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    preferredDate: "",
    groupSize: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type.";
    if (!formData.message.trim()) newErrors.message = "Please tell us a bit more.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build mailto URL as fallback
    const subject = `Boat Life Detroit Inquiry — ${formData.inquiryType}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Inquiry Type: ${formData.inquiryType}`,
      `Preferred Date: ${formData.preferredDate || "Not specified"}`,
      `Group Size: ${formData.groupSize || "Not specified"}`,
      ``,
      `Message:`,
      formData.message,
    ].join("\n");

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0E1D2B] rounded-2xl border border-[#2EA7FF]/30 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-[#2EA7FF]/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-[#2EA7FF]" />
        </div>
        <h3 className="text-2xl font-black text-white mb-3">
          Your request is on its way!
        </h3>
        <p className="text-[#B7C5D3] mb-6 leading-relaxed">
          Your default email app has opened with your inquiry pre-filled.
          If it didn&apos;t open, send us an email directly at{" "}
          <a
            href={siteConfig.emailHref}
            className="text-[#2EA7FF] hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          or call{" "}
          <a
            href={siteConfig.phoneHref}
            className="text-[#2EA7FF] hover:underline"
          >
            {siteConfig.phone}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              inquiryType: "",
              preferredDate: "",
              groupSize: "",
              message: "",
            });
          }}
          className="text-sm text-[#7D8B99] hover:text-white underline transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const fieldClass = (hasError: boolean) =>
    `w-full bg-[#13283B] text-white placeholder-[#7D8B99] px-4 py-3.5 rounded-xl border ${
      hasError
        ? "border-red-400/60 focus:border-red-400"
        : "border-white/10 focus:border-[#2EA7FF]/60"
    } outline-none transition-colors text-sm`;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0E1D2B] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-5"
      noValidate
      aria-label="Request information form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#B7C5D3] mb-1.5"
          >
            Full Name <span className="text-[#2EA7FF]" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={fieldClass(!!errors.name)}
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-[#B7C5D3] mb-1.5"
          >
            Email Address <span className="text-[#2EA7FF]" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={fieldClass(!!errors.email)}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-[#B7C5D3] mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(248) 000-0000"
            className={fieldClass(false)}
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label
            htmlFor="inquiryType"
            className="block text-sm font-semibold text-[#B7C5D3] mb-1.5"
          >
            Inquiry Type <span className="text-[#2EA7FF]" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className={`${fieldClass(!!errors.inquiryType)} appearance-none pr-10`}
              aria-required="true"
              aria-describedby={
                errors.inquiryType ? "inquiryType-error" : undefined
              }
            >
              <option value="" disabled>
                Select inquiry type
              </option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7D8B99] pointer-events-none"
            />
          </div>
          {errors.inquiryType && (
            <p id="inquiryType-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.inquiryType}
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-semibold text-[#B7C5D3] mb-1.5"
          >
            Preferred Date
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className={`${fieldClass(false)} [color-scheme:dark]`}
          />
        </div>

        {/* Group Size */}
        <div>
          <label
            htmlFor="groupSize"
            className="block text-sm font-semibold text-[#B7C5D3] mb-1.5"
          >
            Group Size
          </label>
          <input
            type="text"
            id="groupSize"
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            placeholder="e.g. 4–6 people"
            className={fieldClass(false)}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[#B7C5D3] mb-1.5"
        >
          Message <span className="text-[#2EA7FF]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for — dates, type of experience, special requests, or questions."
          rows={5}
          className={`${fieldClass(!!errors.message)} resize-none`}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#2EA7FF] hover:bg-[#59D0FF] text-[#07131F] font-black text-sm uppercase tracking-wide rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(46,167,255,0.3)] hover:shadow-[0_0_36px_rgba(89,208,255,0.4)]"
      >
        <Send size={16} />
        Send Request
      </button>

      <p className="text-center text-xs text-[#7D8B99]">
        We typically respond within 24 hours. You can also reach us directly
        at{" "}
        <a
          href={siteConfig.phoneHref}
          className="text-[#2EA7FF] hover:underline"
        >
          {siteConfig.phone}
        </a>
        .
      </p>
    </form>
  );
}
