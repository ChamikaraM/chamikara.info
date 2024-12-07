import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailInvalidError, setEmailInvalidError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setNameError(name === '');
    setEmailError(email === '');
    setEmailInvalidError(!emailRegex.test(email) && email !== '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && emailRegex.test(email) && message !== '') {
      var templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Chamikara'
      };
      
      emailjs.send('service_uj39aok', 'template_s7rf00f', templateParams, { publicKey: '8lvcB5CgXYYbqNonm' }).then(
        (response) => {
          toast('SUCCESS!', {
            position: "top-right",
            type: 'success',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,        
            theme: "dark"
          });
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          toast('FAILED!', {
            position: "bottom-right",
            type: 'error',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,        
            theme: "dark"
          });
          console.log('FAILED...', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>You can contact me directly through this form</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <div className="input-wrapper">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameError ? 'input-error' : ''}
                />
                {nameError && <span className="error-text">Please enter your name</span>}
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError || emailInvalidError ? 'input-error' : ''}
                />
                {emailError && <span className="error-text">Please enter your email</span>}
                {!emailError && emailInvalidError && (
                  <span className="error-text">Please enter a valid email address</span>
                )}
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder=""
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={messageError ? 'input-error' : ''}
              />
              {messageError && <span className="error-text">Please enter the message</span>}
            </div>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
