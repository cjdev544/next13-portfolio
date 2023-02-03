'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { validate } from 'react-email-validator'
import Swal from 'sweetalert2'
import './Contact.scss'

export default function Contact() {
  const form = useRef()
  const [sendingEmail, setSendingEmail] = useState(false)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const changeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setSendingEmail(true)

    // Validations
    if (
      formData.from_name === '' ||
      formData.from_email === '' ||
      formData.message === ''
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Todos los campos son obligatorios',
        showConfirmButton: false,
        timer: 2500,
      })
      setSendingEmail(false)
      return
    }

    if (formData.from_name?.length <= 2) {
      Swal.fire({
        icon: 'warning',
        title: 'El nombre debe contener por lo menos 3 letras',
        showConfirmButton: false,
        timer: 2500,
      })
      setSendingEmail(false)
      return
    }

    if (!validate(formData.from_email)) {
      Swal.fire({
        icon: 'warning',
        title: 'El correo no tiene un formato válido',
        showConfirmButton: false,
        timer: 2500,
      })
      setSendingEmail(false)
      return
    }

    emailjs
      .sendForm(
        'service_sk9f2zf',
        'template_5497r0i',
        form.current,
        'Bc-ChCA-Knl8oUaXt'
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Correo enviado. Gracias por contactarme',
            showConfirmButton: false,
            timer: 2500,
          })
          setFormData({
            from_name: '',
            from_email: '',
            message: '',
          })
          setSendingEmail(false)
          console.log(result.text)
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al enviar el mensaje. Intente de nuevo',
            showConfirmButton: false,
            timer: 2500,
          })
          setSendingEmail(false)
          console.log(error)
        }
      )
  }

  return (
    <section className='contact container' id='contacto'>
      <div className='contact-left'>
        <span>Trabajemos juntos</span>
        <h2>Contacto</h2>
        <div
          className='blur contact-blur'
          style={{ background: '#abf1ff94' }}
        />
      </div>
      <div className='contact-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='from_name'
            className='contact-input'
            placeholder='Nombre'
            value={formData.from_name}
            onChange={changeFormData}
          />
          <input
            type='text'
            name='from_email'
            className='contact-input'
            placeholder='Correo'
            value={formData.from_email}
            onChange={changeFormData}
          />
          <textarea
            name='message'
            className='contact-input'
            placeholder='Mensaje'
            value={formData.message}
            onChange={changeFormData}
          />
          <input
            type='submit'
            value={sendingEmail ? 'Enviando...' : 'Enviar'}
            className='button'
            disabled={sendingEmail}
          />
          <div
            className='blur contact-blur1'
            style={{ background: 'rgb(238 210 255)' }}
          />
        </form>
      </div>
    </section>
  )
}
