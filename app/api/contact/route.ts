import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: 'Cuerpo inválido.' },
      { status: 400 },
    );
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const subject = (body.subject ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Faltan campos obligatorios (nombre, email, mensaje).' },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: 'El servicio de mail no está configurado.' },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `Web Ser Humano <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: subject
        ? `[Contacto Web] ${subject}`
        : `[Contacto Web] Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject || '(sin asunto)'}\n\nMensaje:\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Error al enviar el mensaje.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar el mensaje.' },
      { status: 502 },
    );
  }
}
