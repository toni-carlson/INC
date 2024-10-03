import React, { useState } from 'react';

function ContactForm() {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [showPhoneInput, setShowPhoneInput] = useState(false);

    function showInputField(e) {
        const { name, checked } = e.target;
        console.log("FOUND CLICK", name, checked);

        if (name === "email") {
            setShowEmailInput(checked);
        } else if (name === "phone") {
            setShowPhoneInput(checked);
        }
    }

    return (
        <form action='https://formsubmit.co/integrative.mind.conn@gmail.com' method='POST' className='contact-form-container'>
            <span className="required"><b>*</b> = Required</span>
            <div className='input-container'>
                <label htmlFor='form-filler-name'>Your name <b>*</b></label>
                <input id='form-filler-name' type='text' name='name' placeholder='Your name' required />
            </div>
            <fieldset>
                <legend>How would you like to be contacted? <b>*</b></legend>
                <div className='checkbox-container'>
                    <input id="email-checkbox" type="checkbox" name="email" onClick={showInputField} required={!showPhoneInput} />
                    <label htmlFor='email-checkbox'>Email</label>
                    { showEmailInput ? <input id='contact-email' type='email' name='email' placeholder='Your email' required /> : '' }
                </div>
                <div className='checkbox-container'>
                    <input id="phone-checkbox" type="checkbox" name="phone" onClick={showInputField} required={!showEmailInput} />
                    <label htmlFor='phone-checkbox'>Phone</label>
                    { showPhoneInput ? <input id='contact-phone' type='phone' name='phone' placeholder='Your phone number' required /> : '' }
                </div>
            </fieldset>
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