"use client";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Arrow, container, Em, SectionLabel } from "../ui/primitives";

const field =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const sendMessage = async () => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      <section id="contact" className="w-full scroll-mt-16 border-b border-line">
        <div className={`${container} py-20 sm:py-28`}>
          <SectionLabel no="04" label="Contact" />
          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Let&apos;s build something <Em>useful</Em>.
          </h2>

          <div className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-12">
            <div className="relative min-h-[280px] bg-paper lg:col-span-4">
              <Image
                src="/images/contact/me.jpeg"
                alt="Aziz Rahmad"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-bottom lg:object-center"
              />
            </div>

            <div className="bg-paper p-6 sm:p-10 lg:col-span-8">
              <p className="max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                Have a project, collaboration, or idea to discuss? Send a
                message and I&apos;ll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <label className="sr-only" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                />
                <label className="sr-only" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
                <label className="sr-only" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} h-40 resize-none`}
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group mt-4 inline-flex cursor-pointer items-center justify-center gap-2 self-start rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : <>Send message <Arrow /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
