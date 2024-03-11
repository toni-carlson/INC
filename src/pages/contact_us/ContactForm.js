import React from 'react';

function ContactForm() {
   return (
        <form action='https://formsubmit.co/tonicarlson13@gmail.com' method='POST' className='contact-form-container'>
            <span className="required">All fields are required.</span>
            <div className='input-container'>
                <label htmlFor='form-filler-name'>Your name</label>
                <input id='form-filler-name' type='text' name='name' placeholder='Your name' required />
            </div>
            <div className='input-container'>
                <label htmlFor='contact-email'>Email</label>
                <input id='contact-email' type='email' name='email' placeholder='Your email' required/>
            </div>
            <div className='input-container'>
                <label htmlFor='contact-phone'>Phone</label>
                <input id='contact-phone' type='phone' name='phone' placeholder='Your phone number' required/>
            </div>
            <div className='input-container'>
                <label htmlFor='client-name'>Who would we be treating?</label>
                <input id='client-name' type='text' name='clientname' placeholder='Potential client name' required />
            </div>
            <div className='input-container'>
                <label htmlFor='message-textarea'>How can we help?</label>
                <textarea
                    id='message-textarea'
                    placeholder="Be as vague or specific as you'd like!"
                    name='message'
                    rows='10'
                    required
                ></textarea>
            </div>
            <button type='submit' className='submit-form'>Submit your information!</button>
        </form>
   );
}

export default ContactForm;