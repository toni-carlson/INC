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
                <h1 className="welcome-message">
                    Welcome to Integrative Neurofeedback and Counseling!
                </h1>
                <div className="large cursive">
                    Repairing Minds. Rebuilding Lives. Restoring Hope.
                </div>
            </div>
        </div>
        <div className="section introduction half-section">
            <p>
                Are you or a loved one struggling with something that is making life hard? 
                Some challenge, whether it be mental, emotional, or neurological in nature, 
                that is making life really difficult, and probably has been for some time now...
                Possibly even for years?
            </p>
            <p>
                Our goal at Integrative Neurofeedback and Counseling is to provide authentic help for the 
                challenges you are facing in a way that sees you or your loved one as unique, 
                your struggles as valid, and to extend genuine HOPE...
            </p>
            <p>
                Integrative Neurofeedback and Counseling uses neurofeedback as the foundation 
                of our treatment plan, and then customizes that plan for each of our clients 
                using a combination of therapies, including individual counseling, cognitive therapy, 
                therapies specifically targeted to help with anxiety and trauma, and more.
            </p>
            <p>
                By building our treatment protocol upon neurofeedback and then customizing that 
                approach by offering other methods of therapy alongside neurofeedback, Integrative 
                Neurofeedback and Counseling is able make available a treatment approach that you've 
                never had the chance to try before, until now...
            </p>
            <p>
                By offering this unique combination of therapies, we have had the opportunity to walk with 
                many others just like YOU through life's challenges to a place of real resolution for their 
                struggles….. And we are here for you too…. Integrative Neurofeedback and Counseling is here to help YOU!
            </p>
        </div>
        <div className="section quote half-section">
            <p>
                “Neurofeedback should play a major therapeutic role in many difficult areas. In my opinion, 
                if any medication had demonstrated such a wide spectrum of efficacy it would be universally 
                accepted and widely used.
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
                Integrative Neurofeedback and Counseling is here for you!
            </h2>
            <p>                
                Our goal at Integrative Neurofeedback and Counseling is to offer individuals and families 
                real help with the challenges life often throws at us. Our commitment to each 
                client is to listen fully, to genuinely care, and to walk alongside of them as 
                they move towards a place of resolution for their challenges. 
                <br /><br />
                Neurofeedback is our core therapeutic approach, which is the most advanced, 
                state-of-the-art neurofeedback system to date. Neurofeedback is completely 
                safe and non-invasive, training your brain through a process of reading your cortical 
                activity and then offering gentle feedback to train the brain.
                <br /><br />
                Whatever mental, emotional, or neurological challenge you or someone you love might be 
                struggling with, neurofeedback helps because it trains each individual person's 
                brain to move towards its most optimal state of functioning, bringing the brain to a place of 
                regulation, resiliency, and flexibility, thus enabling you to overcome what has felt improbable 
                and even impossible to overcome, until now.
                <br /><br />
                After your free, personal consultation, we begin with an initial, online assessment that indicates 
                what areas of the brain are dysregulated and establishes the areas that need to be strengthened. 
                From there we customize our approach to meet your specific, individual needs through a variety of 
                treatment interventions and support protocols to augment the neurofeedback therapy, including individual 
                counseling, cognitive therapy, anxiety and trauma therapy, and nutritional and supplement support as an 
                alternative to medication.
                <br /><br />
                Additionally, Integrative Neurofeedback and Counseling is always in the process of training to offer up-to-date, 
                cutting edge therapies to continue to give our clients the best possible help they can get.
            </p>
            <div className="large cursive">
                We want to encourage you that Integrative Neurofeedback and Counseling is here for you and ready to help.
            </div>
        </div>
        <div className="section contact">
            <h2>A Better Future</h2>
            <p>
                Integrative Neurofeedback and Counseling is here to offer hope and to provide 
                you with the help you need! With neurofeedback and a customized therapeutic 
                approach designed to meet your unique and individual needs, the hope of moving 
                forward is finally within your grasp...

                Contact us TODAY for a FREE in office consultation (a $150 value)! We also offer
                personal neurofeedback systems for home use! You really do have a good 
                reason to look ahead to a better quality of life and a better future!
            </p>
            <button type="button">Schedule your free consultation!</button>
            <img src={HelpingHand} alt="hand reaching out with the words 'we help' on it" />
        </div>
    </div>
  );
}

export default HomePage;
