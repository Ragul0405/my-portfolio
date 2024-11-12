import React, { useRef } from 'react';
import '../contact/contact.css';
import fb from '../contact/nakuru.png';
import git from '../contact/github.png';
import linkdin from '../contact/in.png';
import insta from '../contact/insta.png';
import emailjs from '@emailjs/browser';

// import nakuri from 'https://www.naukri.com/mnjuser/profile?id=&altresid'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form data:", form.current);

    emailjs
      .sendForm('service_lr0mlsm', 'template_x4nyy7b', form.current, 'OM7spFgQ1B1fXoMa9') 
      .then(
        () => {
          alert('Your message has been sent successfully!');
          console.log('SUCCESS!');
          form.current.reset(); 
        },
        (error) => {
          alert('Failed to send the message. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact'>
      <h1 className='contactpagetitle'>Contact Me</h1>
      <span className='contactdesc'>Please fill the form below to discuss any work opportunities.</span>
      <form className='contactform' ref={form} onSubmit={sendEmail}>
        <input type="text" className="namee" placeholder='Enter Your Name' name="user_name"/>
        <input type="email" className="email" placeholder='Enter Your E-Mail' name="user_email" required/>
        <textarea className='msg' name='message' rows={5} placeholder='Leave Your Message'></textarea>
        <button type='submit' value="send" className="submitbtn">Submit</button>
      </form>
      <div className="links">
        <img src={fb} alt="Nakuri" className='link' onClick={()=> window.location.href='https://www.naukri.com/mnjuser/profile?id=&altresid'} />
        <img src={git} alt="GitHub" className='link' onClick={()=> window.location.href='https://github.com/Ragul0405'} />
        <img src={linkdin} alt="LinkedIn" className='link' onClick={()=> window.location.href='https://www.linkedin.com/in/ragul-sankar/'} />
        <img src={insta} alt="InstaGram" className='link' onClick={()=> window.location.href='https://www.instagram.com/___ragul___s/'} />
      </div>
    </div>
  );
}

export default Contact;
