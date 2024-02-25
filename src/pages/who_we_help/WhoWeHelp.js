import React from 'react';
import './WhoWeHelp.css';
import FrameLayout from '../../frame_layout/FrameLayout';
import ExpandableSection from './components/ExpandableSection';
import { useState, useEffect } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

function WhoWeHelp() {
  const whoWeHelpInfo = [
    {
      heading: 'Attention and Focus',
      subheading: 'What does a lack of attention and focus look like?',
      content: 'What attention and focus issues look like in a person struggling with this disorder\
        is the inability to focus or concentrate, becoming easily distracted, overwhelmed or\
        frustrated. Attention and focus problems can cause anger outbursts, difficulty completing\
        tasks, restlessness and the inability to socially engage or connect.'
    },
    {
      heading: 'Mental Stress',
      subheading: 'How does mental stress affect my brain?',
      content: 'Due to our environment and the ongoing stressors impacting the body every second of every\
        day, the body can become overloaded and our brainwaves can become abnormal. This most\
        commonly occurs as a result of overstimulation. This irregularity, often found in people\
        suffering with mental stress can create abnormal responses to incoming stimuli. Neurofeedback\
        is shown to normalize brainwaves.'
    },
    {
      heading: 'Negative Moods',
      subheading: 'Are you struggling with the symptoms of negative moods?',
      content: 'If you have been struggling with negative moods, you\'re not alone. More than 19 million adults\
        suffer from negative moods. If you are feeling overwhelmed, worn down, fatigued, sad, isolated,\
        foggy brained, or disconnected, these are classic signs and symptoms that accompany negative moods.\
        Research at Keck Imaging Labs at the University of Wisconsin shows that negative mood people\
        experience a reduction of activity in the left side of the brain. This is the side responsible for\
        engaging in positive moods. When the brainwaves are abnormal, your mood can become abnormal.'
    },
    {
      heading: 'Sleep Issues',
      subheading: 'Why am I Tired All of the Time?',
      content: 'Until recently, sleep issues were studied from a behavioral perspective, but as this\
        problem grows, new research and insights have been discovered. Recent studies suggest that in\
        cases of sleep issues, the brain is unable to process information properly due to cortical\
        hyperarousal. This creates abnormal brainwave function. Sleeping issues can disrupt daily life\
        by causing irritability, exhaustion, tiredness, and difficulty staying focused. If being tired\
        all of the time isn\'t bad enough, this affliction is also believed to be a risk factor for other\
        diseases, including obesity, hypertension, diabetes, and cardiovascular disease. Chronic, or recurrent,\
        sleep issues are a widespread condition affecting nearly 10-15% of the global population. The longer\
        you struggle with this, the harder it becomes to treat. That\'s why it\'s important to learn how to deal\
        with sleep issues as soon as symptoms present themselves and to seek medical attention for evaluation\
        and diagnosis as early as possible.'
    },
    {
      heading: 'Memory',
      subheading: 'Do you struggle with the symptoms of memory loss?',
      content: 'If you are beginning to notice the signs of brain fog, forgetfulness, declining cognitive function,\
        mixing up your words, asking the same questions repeatedly or taking longer to perform normal tasks, these\
        are all signs and symptoms of memory loss. These are early warning signs of abnormal brainwave function that\
        are often associated with the inability to process information optimally. If left untreated, this can lead to dementia.'
    },
    {
      heading: 'Headaches',
      subheading: 'What Is Causing My Pain and How Do I Stop It?',
      content: 'Headaches create a high-stress state in your brain, which causes an increase in\
        sympathetic response and a decrease in parasympathetic response. Simply stated, this means\
        brainwave imbalance which can negatively impact normal brainwave function. If the stressful\
        trigger of the headache continues, the response becomes chronic. Once ongoing, it is harder\
        and harder for your brain to re-regulate or normalize function. Headaches can be triggered\
        due to many factors; ranging from hormonal imbalance, light sensitivity, allergies and dehydration\
        to neuro-metabolic issues. This leaves your brain in a high state of stress and imbalance. The\
        results are a variety of symptoms that take their toll on your life including inability to focus,\
        mood swings and throbbing pain.'
    },
    {
      heading: 'Peak Performance',
      subheading: 'You work your body — what about your mind?',
      content: 'Whether you are a professional athlete, a top executive, a weekend warrior, a student athlete,\
        professional or performer, you know that peak performance is essential to your success. But how do you\
        achieve peak performance? The more that is at stake, the greater the need for not only physical training,\
        but brain training for increased brain health as well. Let\'s face it, performing at your peak comes with\
        high demands. These physical, mental and emotional impacts often trigger the fight or flight response\
        within your body, which will steal your ability to succeed. When you are in a prolonged state of stress\
        due to the high demands of performing at optimal states, your brain function is impacted. The longer the\
        impact, the greater the imbalance, which leads to decreased function and performance.'
    },
    {
      heading: 'Post Trauma',
      subheading: 'Find ease and restore health naturally.',
      content: 'Post Trauma often occurs after a stressful or traumatic event leaving a wake of symptoms in its\
        path. From mental stress and negative moods to fear, guilt and shame, the emotional toll impacts daily\
        lives, careers and relationships. As a result, most people who suffer from post trauma are looking for\
        an effective way to treat their symptoms so they can get back to living a normal life. Unfortunately,\
        many sufferers experience only limited benefit after trying various therapies and medication. Post trauma\
        is a disorder based in the brain. With post trauma, a severe stress response is triggered, the challenge\
        is to teach the brain to turn off the stress response. Research shows that the traumatic stress experienced\
        by those suffering from post trauma has a lasting change on the brain. It affects the amygdala involved in\
        emotional memory, the hippocampus responsible for long term memory, and prefrontal cortex which modulates\
        emotion. Each of these centers change, negatively impacting brainwave function. Current treatment options\
        include talk therapy and medication but each have their limitations. Talk therapy can take a very long time\
        to resolve the trauma as many suffers aren\'t always aware of the trauma. Medication comes with many side\
        effects and is unable to restore healthy brainwave function.'
    },
    {
      heading: 'Substance Abuse',
      subheading: 'How can I break out of this cycle?',
      content: 'People who struggle with recovery often begin or continue using because they have underlying,\
        or co-occurring symptoms related to mental stress, negative moods, trauma-related symptoms or post trauma.\
        Continued use also exacerbates the symptoms of these conditions. This can make remaining abstinent very difficult.\
        Substance Use Disorders are viewed as primary, chronic diseases of brain reward, motivation, memory and related\
        circuitry. Dysfunction in these circuits leads to characteristic biological, psychological, social and spiritual\
        manifestations. This is reflected in an individual pathologically pursuing reward and/or relief by other behaviors.'
    }
  ];

  return (
      <FrameLayout>
        <h1>
          Who We Help
        </h1>
        <div>
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
            whoWeHelpInfo.map((info, index) =>
              <ExpandableSection
                key={index}
                id={`section-${index}`}
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
