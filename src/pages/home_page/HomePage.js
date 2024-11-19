import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './HomePage.scss';
import FrameLayout from '../../frame_layout/FrameLayout';
import HomePageHeader from './HomePageHeader';
import HelpingHand from '../../images/helping-hand.jpg';
import { ailmentsInfo } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
  return (
    <FrameLayout pageName='home-page' customHeader={<HomePageHeader />}>
        <div className='quote'>
            <p className='handwriting-font'>
                "Neurofeedback should play a major therapeutic role in many difficult areas. In my opinion,
                if any medication had demonstrated such a wide spectrum of efficacy it would be universally
                accepted and widely used."
            </p>
            <div className='author-name'>
                Dr. Frank Duffy
            </div>
            <div className='author-credentials'>
                Professor & Pediatric Neurologist<br />
                Harvard Medical School
            </div>
        </div>
        <div className='section caring'>
            <h2>
                Whatever situation you find yourself in,
                <span className='gold-text'> we are here for you!</span>
            </h2>
            <p>
                Whatever mental, emotional, or neurological challenge you or someone you love might be
                struggling with, we commit to listen fully, genuinely care, and walk alongside of you as
                you move towards resolving your challenges.
            </p>
            <p>
                We can help with:
            </p>
            <ul>
                {
                    ailmentsInfo.map((info, index) =>
                    <li key={index}>
                        {info.heading}
                    </li>
                    )
                }
            </ul>
            <p>
                After your free consultation, we begin with an initial assessment that will indicate
                what areas of your brain need to be strengthened. From there, we will customize our approach to
                meet your specific, individual needs through a variety of treatment interventions and support
                protocols to augment the neurofeedback therapy including individual counseling and coaching,
                nutritional and supplement support, and any cutting edge therapies we might also find helpful.
            </p>
            <div className='cursive-font' style={{ fontFamily: 'Ms Madi' }}>
                We are here for you and ready to help.
            </div>
        </div>
        <div className='section ailments'>
            <h2>Learn more about how we can help:</h2>
            <div className="who-we-help-links">
                {
                    ailmentsInfo.map((info, index) =>
                        <HashLink
                            key={index}
                            to={'/whowehelp#' + info.heading.replaceAll(" ", "-").toLowerCase()}
                        >
                            <FontAwesomeIcon icon={info.icon} className='icon' />
                            <span>{info.heading}</span>
                        </HashLink>
                    )
                }
            </div>
        </div>
        <div className='section contact'>
            <img src={HelpingHand} className='helping-hand-img' alt='hand reaching out with the words "we help" on it' />
            <div className='contact-text'>
                <h2>A Better Future</h2>
                <p className='handwriting-font'>
                    You really do have a good reason to look ahead to a better quality of life and a better future!
                </p>
                <p className='contact-today-text'>
                    Contact us today for a FREE consultation in office!
                </p>
                <Link to='/contactus' className='schedule-now'>Schedule now&nbsp;&nbsp;&gt;</Link>
            </div>
        </div>
    </FrameLayout>
  );
}

export default HomePage;
