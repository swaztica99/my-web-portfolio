"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
        const data = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // Saat sudah punya domain, ganti dengan email domainmu
            to: "swaztica99@gmail.com", // Ganti dengan email pribadimu
            subject: `Pesan Baru dari ${name}`,
            replyTo: email,
            text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
        });

        return { success: true };
    } catch (error) {
        return { success: false, error: "Gagal mengirim pesan." };
    }
}