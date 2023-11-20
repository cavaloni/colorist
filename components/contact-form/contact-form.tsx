import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios'; // You need to install axios

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, updateSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you would send the data to your server or an email API
    try {
      const response = await axios.post('https://lt7hlblbb6.execute-api.us-east-2.amazonaws.com/Production', formData);
      console.log('Email sent successfully', response.data);
      updateSubmitted(true)
    } catch (error) {
      console.error('Error sending email', error);
      // Handle error or show error message
    }
  };

  return (
    <section aria-label="Contact Form">
	  {submitted ? <h3 style={{ marginLeft: "20%"}}>Thanks! We&apos;ll be in touch soon.</h3> :
      <div className="container">
        <article>
          <hgroup>
            <h2>Contact Us</h2>
            <h3>Get in Touch for Color Grading Services</h3>
          </hgroup>
          <form className="contact" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </article>
      </div>
	}
    </section>
  );
};

export default ContactForm;
