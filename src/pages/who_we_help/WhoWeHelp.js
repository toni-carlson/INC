import React from 'react';
import './WhoWeHelp.css';
import FrameLayout from '../../frame_layout/FrameLayout';
import HoverableCard from './components/HoverableCard';
import { ailmentsInfo } from '../../constants';

function WhoWeHelp() {
  return (
      <FrameLayout>
        <h1>
          Who We Help
        </h1>
        <div className='banner'>
          <p>
            Braincore can help people with a variety of different ailments, such as&nbsp;
            {
              ailmentsInfo.map((info, index) => {
                const punctuation = index === ailmentsInfo.length - 1 ? '.' : ', ';
                return info.heading.toLowerCase() + punctuation;
              }
            )
          }
          </p>
        </div>
        <div className='summary-passage'>
          <h2>How can BrainCore Neurofeedback help with different ailments?</h2>
          <p>
            Neurofeedback is also known as EEG Biofeedback. It is guided exercise for the brain that is
            shown to help normalize brainwaves. Neurofeedback is actually a learning modality designed to
            retrain abnormal brainwave patterns. The goal of all neurofeedback is to transform an unhealthy,
            abnormal brainwave pattern into a normal, healthy, organized pattern. By doing this, the brain
            becomes more stable and is able to operate optimally and efficiently. Neuroplasticity is your
            brain's ability to create new neural pathways. This puts you in the driver's seat of reclaiming
            and optimizing your health. Your brain is not hard-wired, it is not limited or fixed in it's
            abilities to heal. When the imbalance is removed and brainwaves are regulated, cognitive function
            improves. The result is an improved ability to remember.
          </p>
        </div>
        <div className='cards-container'>
          {
            ailmentsInfo.map((info, index) =>
              <HoverableCard
                key={index}
                icon={info.icon}
                heading={info.heading}
                subheading={info.subheading}
                children={info.content}
              />
            )
          }
        </div>
      </FrameLayout>
  );
}

export default WhoWeHelp;
