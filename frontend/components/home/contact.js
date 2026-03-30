"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const sendMessage = async () => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal mengirim pesan");
      }

      return data;
    };

    toast.promise(sendMessage(), {
      loading: "Sending...",
      success: () => {
        setForm({ name: "", email: "", message: "" });
        setIsLoading(false);
        return <p>Message sent successfully!</p>;
      },
      error: (err) => {
        setIsLoading(false);
        return <b>{err.message}</b>;
      },
    });
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <section
        id="contact"
        className="relative w-full flex justify-center px-6 py-24 md:pt-28"
      >
        <div className="max-w-5xl w-full relative">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--purple)]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--gray-primary)]">
              Let&apos;s build something clear, useful, and memorable.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between mt-10 bg-white/80 items-center rounded-[2rem] border border-[var(--line)] shadow-[0_24px_70px_rgba(17,32,49,0.08)] overflow-hidden backdrop-blur-sm">
            <div className="w-full md:w-[38%] flex justify-center md:justify-start ">
              <div className="relative w-full h-[240px] sm:h-[280px] md:h-[640px] ">
                <Image
                  src="/images/contact/me.jpeg"
                  alt="Contact me"
                  fill
                  className="
                  object-cover object-bottom md:object-center w-full h-full
                  rounded-t-[2rem] md:rounded-t-none md:rounded-l-[2rem]
                "
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="w-full md:w-[62%] flex flex-col justify-between p-6 md:p-10">
              <p className="text-[var(--gray-secondary)] text-base leading-7 mb-6">
                Whether you want to discuss a project, collaboration, or just
                say hello, send a message and I&apos;ll get back to you.
              </p>
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
                  className="w-full border border-[var(--line)] bg-[var(--surface)] rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-[var(--line)] bg-[var(--surface)] rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border border-[var(--line)] bg-[var(--surface)] rounded-2xl px-4 py-3.5 h-44 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition"
                ></textarea>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[var(--gray-primary)] text-white rounded-full py-3.5 px-6 font-medium hover:bg-[var(--purple)] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-2">
            <p className="text-[var(--gray-primary)] text-base md:text-lg">
              Or reach me directly through{" "}
            </p>
            <Link
              href="mailto:halo@azizrahmad.com"
              className="text-[var(--purple)] font-medium"
            >
              halo@azizrahmad.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
