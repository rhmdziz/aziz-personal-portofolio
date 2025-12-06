import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Konfigurasi transporter untuk Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtp.hostinger.com
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, // true untuk port 465
      auth: {
        user: process.env.EMAIL_USER, // email@yourdomain.com
        pass: process.env.EMAIL_PASSWORD, // password email Anda
      },
    });

    // Verifikasi konfigurasi
    await transporter.verify();

    // Kirim email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // email tujuan (email Anda sendiri)
      replyTo: email, // email pengirim (visitor)
      subject: `Pesan baru dari ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Pesan Baru dari Contact Form</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nama:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Pesan:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">Email ini dikirim dari form contact di website portfolio Anda.</p>
        </div>
      `,
      text: `
Pesan Baru dari Contact Form

Nama: ${name}
Email: ${email}

Pesan:
${message}
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email berhasil dikirim!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error mengirim email:", error);
    return NextResponse.json(
      { error: "Gagal mengirim email. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
