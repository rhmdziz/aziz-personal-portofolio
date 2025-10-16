"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LinkedinFilled,
  GithubFilled,
  MailFilled,
  GlobalOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full flex justify-center bg-[var(--background)]"
    >
      <div className="max-w-5xl w-full px-6 md:px-0 relative mt-24 ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--gray-primary)]">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:justify-between mt-8 bg-white items-center rounded-2xl shadow-md md:shadow-lg">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start ">
            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[600px] ">
              <Image
                src="/images/contact/me.jpeg"
                alt="Contact me"
                fill
                className="
                  object-cover object-bottom md:object-center w-full h-full
                  rounded-t-2xl md:rounded-t-none md:rounded-l-2xl
                "
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col justify-between p-6 md:p-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--purple)] transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--purple)] transition"
              />
              <textarea
                placeholder="Your Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--purple)] transition"
              ></textarea>

              <button
                type="submit"
                className="bg-[var(--purple)] text-white rounded-lg py-3 font-medium hover:opacity-90 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>

            {status && (
              <p className="mt-4 text-[var(--gray-secondary)]">{status}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[var(--gray-primary)] text-lg mt-4">
            Or reach me directly through:
          </p>
        </div>
      </div>
    </div>
  );
}
