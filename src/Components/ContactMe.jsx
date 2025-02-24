import React from 'react'
import './ContactMe.css'
import mail_icon from '../assets/email (3).png'
import phone_icon from '../assets/phone.png'
import location_icon from '../assets/location.png'
import { useState } from 'react'

const ContactMe = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "63f8198e-7b33-4b0c-8ec9-9956a32e8361");
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Message Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          alert(data.message);
        }
    };

    return(
        <div id='contactMe'>
            <h1>Get in Touch</h1>
            <div className='contact-container'>
                <div className='contact-container-left'>
                    <h2>Let's Talk</h2>
                    <p>I'm currently open to new projects, feel free to contact me anytime you want.</p>
                    <div className='contact-options'>
                        <div className='contact-option'>
                            <img src={mail_icon} alt='' style={{height:"40px", width:"40px"}}/><p>thennakoon.kanchana@gmail.com</p>
                        </div>
                        <div className='contact-option'>
                            <img src={phone_icon} alt='' style={{height:"40px", width:"40px"}}/><p>+94 76 667 0063</p>
                        </div>
                        <div className='contact-option'>
                            <img src={location_icon} alt='' style={{height:"40px", width:"40px"}}/><p>Kandy, Sri Lanka</p>
                        </div>
                    </div>

                </div>
                    <form className='contact-container-right' onSubmit={onSubmit}>
                        <div className='contact-name'>
                            <label htmlFor=''>Name</label>
                            <input type='text' placeholder='Enter your name' name='name'/>
                        </div>
                        <div className='contact-email'>
                            <label htmlFor=''>Email</label>
                            <input type='text' placeholder='Enter your email' name='email'/>
                        </div>
                        <div className='contact-message'>
                            <label htmlFor=''>Message</label>
                            <textarea rows='8' placeholder='Enter your message' name='message'/>
                        </div> 
                        <button id='messageSubmitBtn' type = "submit" >Submit</button>
                    </form>  
            </div>
            

        </div>
    )
}

export default ContactMe