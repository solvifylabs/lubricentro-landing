'use server'

import { Resend } from 'resend'

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

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Dishflow <noreply@solvifylabs.com>',
    replyTo: `${name} <${email}>`,
    to: 'sales@solvifylabs.com',
    subject: `Nuevo lead: ${name}`,
    html: `
      <h2>Nuevo contacto desde la landing de Dishflow</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ''}
      ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
    `,
  })

  if (error) {
    return { status: 'error', message: `Resend error: ${error.name} — ${error.message}` }
  }

  return { status: 'success', message: '¡Listo! Te contactamos pronto.' }
}
