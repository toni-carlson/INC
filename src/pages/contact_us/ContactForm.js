import React from 'react';
import './ContactUs.css';

function ContactForm() {
   return (
        <form action='https://formsubmit.co/tonicarlson13@gmail.com' method='POST'>
            <div className='form-input'>
                <label htmlFor='form-filler-name'>Your name</label>
                <input id='form-filler-name' type='text' name='name' placeholder='Your name' required />
            </div>
            <div className='form-input'>
                <label htmlFor='contact-email'>Email</label>
                <input id='contact-email' type='email' name='email' placeholder='Email' required/>
            </div>
            <div className='form-input'>
                <label htmlFor='contact-phone'>Phone</label>
                <input id='contact-phone' type='phone' name='phone' placeholder='Phone' required/>
            </div>
            <div className='form-input'>
                <label htmlFor='client-name'>Who would we be treating?</label>
                <input id='client-name' type='text' name='clientname' placeholder='Potential client name' required />
            </div>
            <div className='form-input'>
                <label htmlFor='message-textarea'>Please tell us why you're interested in seeing us</label>
                <textarea 
                    id='message-textarea' 
                    placeholder='Be as vague or specific as you`d like!' 
                    name='message' 
                    rows='10' 
                    required
                ></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
   );
}

export default ContactForm;