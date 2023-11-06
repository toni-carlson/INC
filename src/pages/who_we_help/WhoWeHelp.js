import React from 'react';
import './WhoWeHelp.css';
import FrameLayout from '../../frame_layout/FrameLayout';

function WhoWeHelp() {
  return (
      <FrameLayout>
         <h1>
         Who We Help
         </h1>
         <ul>
            <li>Attention and Focus</li>
            <li>Mental Stress</li>
            <li>Negative Moods</li>
            <li>Sleep Issues</li>
            <li>Memory</li>
            <li>Headaches</li>
            <li>Peak Performance</li>
            <li>Post Trauma</li>
            <li>Substance Abuse</li>
        </ul>
        <div className='section'>
          <h2>Attention and Focus</h2>
          <h3>What does a lack of attention and focus look like?</h3>
          <p>
            What attention and focus issues look like in a person struggling with this disorder 
            is the inability to focus or concentrate, becoming easily distracted, overwhelmed or 
            frustrated. Attention and focus problems can cause anger outbursts, difficulty completing 
            tasks, restlessness and the inability to socially engage or connect.
          </p>
        </div>
        <div className='section'>
          <h2>Mental Stress</h2>
          <h3>How does mental stress affect my brain?</h3>
          <p>
            Due to our environment and the ongoing stressors impacting the body every second of every 
            day, the body can become overloaded and our brainwaves can become abnormal. This most 
            commonly occurs as a result of overstimulation. This irregularity, often found in people 
            suffering with mental stress can create abnormal responses to incoming stimuli. Neurofeedback 
            is shown to normalize brainwaves.
          </p>
        </div>
      </FrameLayout>
  );
}

export default WhoWeHelp;
