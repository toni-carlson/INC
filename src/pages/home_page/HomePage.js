import React from 'react';
import './HomePage.css';
import PageHeader from '../../page_header/PageHeader.js';
import HelpingHand from "../../images/helping-hand.jpg";

function HomePage() {
  return (
    <div className="home-page">
        <div className="section header">
            <div className="background-dim-overlay"></div>
            <PageHeader />
            <div className="header-content">
                <div className="cursive-font welcome">Welcome to</div>
                <h1 className="welcome-message">
                    Integrative Neurofeedback and&nbsp;Counseling
                </h1>
                <div className="cursive-font small">
                    Repairing&nbsp;Minds. Rebuilding&nbsp;Lives. Restoring&nbsp;Hope.
                </div>
            </div>
        </div>
        <div className="quote">
            <p className="handwriting-font">
                “Neurofeedback should play a major therapeutic role in many difficult areas. In my opinion, 
                if any medication had demonstrated such a wide spectrum of efficacy it would be universally 
                accepted and widely used."
            </p>
            <div className='author-name'>
                Dr. Frank Duffy
            </div>
            <div className="medium cursive">
                Professor & Pediatric Neurologist<br />
                Harvard Medical School
            </div>
        </div>
        <div className="section caring">
            <h2>
                Whatever situation you find yourself in, 
                we are here for you!
            </h2>
            <ul>
                <li>Attention and Focus</li>
                <li>Mental Stress</li>
                <li>Negative Moods</li>
                <li>Sleep Issues</li>
                <li>Memory</li>
                <li>Headaches</li>
                <li>Peak Performance</li>
                <li>Substance Abuse</li>
            </ul>
            <p>
                Whatever mental, emotional, or neurological challenge you or someone you love might be 
                struggling with, we commit to listen fully, genuinely care, and walk alongside of you as 
                you move towards resolving your challenges. 
            </p>
            <p>
                After your free, personal consultation, we begin with an initial assessment that will indicate
                what areas of your brain need to be strengthened. From there, we will customize our approach to 
                meet your specific, individual needs through a variety of treatment interventions and support 
                protocols to augment the neurofeedback therapy including individual counseling, cognitive therapy, 
                anxiety and trauma therapy, nutritional and supplement support, and any cutting edge therapies we
                might also find helpful.
            </p>
            <div className="cursive-font">
                We are here for you and ready to help.
            </div>
        </div>
        <div className="section contact">
            <img src={HelpingHand} className="helping-hand-img" alt="hand reaching out with the words 'we help' on it" />
            <div className="contact-text">
                <h2>A Better Future</h2>
                <p className="handwriting-font">
                    You really do have a good reason to look ahead to a better quality of life and a better future!
                </p>
                <p className="contact-today-text">
                    Contact us today for a FREE consultation in office!
                </p>
                <a href="#" className="schedule-now">Schedule now &gt;</a>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
