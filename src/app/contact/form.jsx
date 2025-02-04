"use client"
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {

  const refName = useRef()
  const refEmail = useRef()
  const refMesage = useRef()
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hjq3jy8', 'template_mh8z8x9', form.current, {
        publicKey: 'JaLT48kggbqkUzia9',
      })
    refName.current.value = "";
    refEmail.current.value = "";
    refMesage.current.value = "";
  };
  return (
    <div>
       <form ref={form} onSubmit={sendEmail}>

<input ref={refName} name="user_name" className=" block h-[40px] bg-inherit border border-gray-50 px-[20px] my-[20px] w-[300px]  md:w-[450px] "
  placeholder="your full Name" type="text" required />
<input ref={refEmail} name="user_email" className=" block h-[40px] bg-inherit border border-gray-50 px-[20px] my-[20px] rounded w-[300px] md:w-[450px] "
  placeholder="yore Email" type="email" required />
<textarea ref={refMesage} name="message" className="rounded w-[300px] md:w-[450px]  min-h-[200px] block bg-inherit border border-gray-50 px-[20px] my-[20px]"
  placeholder="your message" required></textarea>
<button className="bg-main block px-[10px] py-[3px]  rounded-full my-[30px] mx-auto" type="submit">Send Message</button>
</form>
    </div>
  )
}

export default Form

/*
// components/ContactForm.js
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('تم إرسال الرسالة بنجاح!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('فشل في إرسال الرسالة.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('حدث خطأ أثناء الإرسال.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="الاسم"
        value={formData.name}
        onChange={handleChange}
        required
      /><br /><br />

      <input
        type="email"
        name="email"
        placeholder="البريد الإلكتروني"
        value={formData.email}
        onChange={handleChange}
        required
      /><br /><br />

      <textarea
        name="message"
        placeholder="اكتب رسالتك هنا"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea><br /><br />

      <button type="submit">إرسال</button>
      <p>{status}</p>
    </form>
  );
}
*/