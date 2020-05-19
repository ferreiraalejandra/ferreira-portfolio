import React, { useState } from 'react';
import './ContactMeForm.css'


const ContactMeForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [messageText, setMessageText] = useState('')

  const handleChangeName = (evt) => {
    setName(evt.target.value)
  }

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const handleChangeMessageText = (evt) => {
    setMessageText(evt.target.value)
  }

  const handleSubmit = (evt) => {
    const formData = {
      name: name,
      email: email,
      message: messageText,
    }
  }

  return (
    <div className="contact-main-container">
      <div className="contact-form-container">
        <h1 className="contact-form-header">Let's Talk!</h1>
        <form onSubmit={handleSubmit}>
          <div className="individual-input-container">
            <label htmlFor="name" className="form-label-input">Name</label>
            <input 
              id="name" 
              type="text" 
              className="form-input"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className="individual-input-container">
            <label htmlFor="email" className="form-label-input">Email</label>
            <input 
              id="email" 
              type="email" 
              className="form-input"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="individual-input-container">
            <label htmlFor="message" className="form-label-input">Message</label>
            <textarea 
              id="message" 
              type="text" 
              className="form-text-area" 
              rows="5"
              value={messageText}
              onChange={handleChangeMessageText}
            >
            </textarea>
          </div>
          <button className="form-button" type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-information-container">
        <h1 className="contact-header">Contact Information</h1>
        <p className="contact-text">Stockholm, Sweden</p>
        <p className="contact-text">Phone: +460729227712</p>
        <h2 className="social-media-header">Find me:</h2>
        <p className="social-media-text">GitHub - LinkedIn - Twitter</p>
      </div>
    </div>
  )
}

export default ContactMeForm