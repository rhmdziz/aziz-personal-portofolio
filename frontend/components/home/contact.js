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
      <div
        id="contact"
        className="relative w-full flex justify-center bg-[var(--background)]"
      >
        <div className="max-w-4xl w-full px-6 md:px-0 relative mt-24 ">
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
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--purple)] transition"
                ></textarea>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[var(--purple)] text-white rounded-lg py-3 font-medium hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-2">
            <p className="text-[var(--gray-primary)] text-base md:text-lg">
              Or reach me directly through{" "}
            </p>
            <Link
              href="mailto:halo@azizrahmad.com"
              className="text-[var(--purple)]"
            >
              halo@azizrahmad.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
