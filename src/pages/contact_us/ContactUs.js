import React from 'react';
import './ContactUs.css';
import ContactForm from './ContactForm';
import FrameLayout from '../../frame_layout/FrameLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
   return (
      <FrameLayout>
         <div className='two-col-display'>
            <div className='left-col'>
               <h1>
                  Contact Us
               </h1>
               <p>
                  Integrative Mind Connections is located in Brownsburg, Indiana on the west side of Indianapolis
                  just off I-74 in the Data Comm building. Contact us today to schedule your FREE in office consultation.
               </p>
               <div className='cursive-font'>Your better tomorrow begins today!</div>
               <br />
               <ContactForm />
            </div>
            <div className='right-col'>
               <h2>Contact Information</h2>
               <ul className='contact-info-list'>
                  <li>
                     <FontAwesomeIcon icon={faPhone} />
                     <span>(317) 339-4998</span>
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faEnvelope} />
                     <a href='mailto:integrative.mind.conn@gmail.com' target='_blank' rel='noopener noreferrer'>
                        integrative.mind.conn@gmail.com
                     </a>
                  </li>
                  <li>
                     <FontAwesomeIcon icon={faMap} />
                     <span>
                        680 Patrick Place <br />
                        Brownsburg, Indiana 46112
                     </span>
                  </li>
               </ul>
               <h2>Office hours</h2>
                  <ul className='office-hours-list'>
                     <li>Monday - Thursday 9:30AM - 5:30PM</li>
                     <li>Friday 9:30AM - 4:00PM</li>
                     <li>Saturday & Sunday CLOSED</li>
                  </ul>
            </div>
         </div>
      </FrameLayout>
   );
}

export default ContactUs;
