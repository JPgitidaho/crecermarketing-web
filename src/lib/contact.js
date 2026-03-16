import emailjs from "@emailjs/browser"

const EMAIL_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_i4rxzlc"
const EMAIL_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_c62v1ir"
const EMAIL_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "83EWTN4t8yyyKqrU9"

export function getContactPayload(formElement) {
  return {
    name: formElement.name.value.trim(),
    email: formElement.email.value.trim(),
    message: formElement.message.value.trim(),
  }
}

export function validateContactFields({ name, email, message }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name || name.length < 2) {
    return "Por favor ingresa un nombre válido."
  }

  if (!emailRegex.test(email)) {
    return "Ingresa un correo electrónico válido."
  }

  if (!message || message.length < 10) {
    return "Cuéntame un poco más sobre tu proyecto."
  }

  return null
}

export function sendContactForm(formElement) {
  return emailjs.sendForm(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    formElement,
    EMAIL_PUBLIC_KEY
  )
}
