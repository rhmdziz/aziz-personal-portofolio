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
        className="relative flex w-full justify-center px-6 py-24 md:pt-28"
      >
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">
              Let&apos;s build something thoughtful and useful.
            </h2>
          </div>

          <div className="ios-panel-strong mt-10 flex flex-col items-center justify-center overflow-hidden rounded-[2.5rem] md:flex-row md:justify-between">
            <div className="flex w-full justify-center md:w-[38%] md:justify-start">
              <div className="relative h-[240px] w-full overflow-hidden sm:h-[280px] md:h-[640px]">
                <Image
                  src="/images/contact/me.jpeg"
                  alt="Contact me"
                  fill
                  className="h-full w-full object-cover object-bottom md:object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10203a]/18 via-transparent to-white/12" />
              </div>
            </div>

            <div className="flex w-full flex-col justify-between p-6 md:w-[62%] md:p-10">
              <p className="section-copy mb-6">
                If you have a project, collaboration, or idea to discuss, send
                a message and I&apos;ll get back to you.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-full"
              >
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="ios-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="ios-input"
                />
                <textarea
                  placeholder="Message"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="ios-input h-44 resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#8c68f0] bg-[linear-gradient(180deg,#7b52ee_0%,#673DE6_100%)] px-6 py-3.5 font-medium text-white shadow-[0_20px_45px_rgba(103,61,230,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(103,61,230,0.34)] disabled:cursor-not-allowed disabled:opacity-50"
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
                    "Send message"
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
            <p className="text-base text-[var(--gray-primary)] md:text-lg">
              Or email me directly at{" "}
            </p>
            <Link
              href="mailto:halo@azizrahmad.com"
              className="font-medium text-[var(--purple)]"
            >
              halo@azizrahmad.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
