import React from 'react';
import './ContactUs.css';
import ContactForm from './ContactForm';
import FrameLayout from '../../frame_layout/FrameLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
   return (
      <FrameLayout>
         <h1>
            Contact Us
         </h1>
         <div className='contact-banner'>
            <div className='cursive-font' style={{ fontFamily: 'Ms Madi' }}>Your better tomorrow begins today!</div>
         </div>
         <div className='two-col-display'>
            <div className='left-col'>
               <p>
                  Contact us today to schedule your FREE in-office consultation.
               </p>
               <ContactForm />
            </div>
            <div className='right-col'>
               <div className="contact-info">
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
                  <span className='location-details'>
                     Integrative Mind Connections is located in Brownsburg, Indiana on the west side of Indianapolis
                     just off I-74 in the Data Comm building.
                  </span>
               </div>
               <div className="office-hours">
                  <h2>Office Hours</h2>
                  <ul className='office-hours-list'>
                     <li>
                        <span>Monday</span>
                        <span>9:30AM - 5:30PM</span>
                     </li>
                     <li>
                        <span>Tuesday</span>
                        <span>9:30AM - 5:30PM</span>
                     </li>
                     <li>
                        <span>Wednesday</span>
                        <span>9:30AM - 5:30PM</span>
                     </li>
                     <li>
                        <span>Thursday</span>
                        <span>9:30AM - 5:30PM</span>
                     </li>
                     <li>
                        <span>Friday</span>
                        <span>9:30AM - 4:00PM</span>
                     </li>
                     <li>
                        <span>Saturday & Sunday</span>
                        <span>CLOSED</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </FrameLayout>
   );
}

export default ContactUs;
