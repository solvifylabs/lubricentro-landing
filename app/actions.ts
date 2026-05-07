'use server'

import nodemailer from 'nodemailer'

type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const instagram = (formData.get('instagram') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()

  if (!name || !email) {
    return { status: 'error', message: 'Nombre y email son obligatorios.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'El email no tiene un formato válido.' }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Dishflow Landing" <${process.env.SMTP_FROM}>`,
      replyTo: `"${name}" <${email}>`,
      to: 'sales@solvifylabs.com',
      subject: `Nuevo lead Dishflow: ${name}`,
      html: `
        <h2>Nuevo contacto desde la landing de Dishflow</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ''}
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
      `,
    })
  } catch {
    return { status: 'error', message: 'No pudimos enviar tu mensaje. Intentá de nuevo.' }
  }

  return { status: 'success', message: '¡Listo! Te contactamos pronto.' }
}
