import React from 'react';
import './ContactUs.scss';
import ContactForm from './ContactForm';
import FrameLayout from '../../frame_layout/FrameLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import { officeHours } from '../../constants';

function ContactUs() {
   return (
      <FrameLayout pageName="contact-us-page">
         <h1>
            Contact Us
         </h1>
         <div className='banner'>
            <div className='cursive-font contents' style={{ fontFamily: 'Ms Madi' }}>Your better tomorrow begins today!</div>
         </div>
         <div className='two-col-display'>
            <div className='left-col card-style'>
               <p>
                  Contact us today to schedule your FREE in-office consultation.
               </p>
               <ContactForm />
            </div>
            <div className='right-col'>
               <div className="contact-info card-style">
                  <h2>Contact Information</h2>
                  <ul className='info-list'>
                     <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="tel:3173394998">(317) 339-4998</a>
                     </li>
                     <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href='mailto:integrative.mind.conn@gmail.com' target='_blank' rel='noopener noreferrer'>
                           integrative.mind.conn@gmail.com
                        </a>
                     </li>
                     <li>
                        <FontAwesomeIcon icon={faMap} />
                        <a
                           href="https://www.google.com/maps/place/Integrative+Mind+Connections/@39.8543801,-86.3839538,15z/data=!4m6!3m5!1s0x886cadce12aff7e7:0x609a69501030ec02!8m2!3d39.8543801!4d-86.3839538!16s%2Fg%2F11gr62j37r?entry=ttu"
                           target="_blank"
                           rel="noreferrer"
                        >
                           680 Patrick Place <br />
                           Brownsburg, Indiana 46112
                        </a>
                     </li>
                  </ul>
                  <span className='location-details'>
                     Integrative Mind Connections is located in Brownsburg, Indiana on the west side of Indianapolis
                     just off I-74 in the Data Comm building.
                  </span>
               </div>
               <div className="office-hours card-style">
                  <h2>Office Hours</h2>
                  <ul className='info-list'>
                     {
                        Object.keys(officeHours).map((day, index) =>
                           <li key={index}>
                              <span>{day}</span>
                              <span>{officeHours[day]}</span>
                           </li>
                        )
                     }
                  </ul>
               </div>
            </div>
         </div>
      </FrameLayout>
   );
}

export default ContactUs;
