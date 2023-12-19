import React, { useState, useEffect, useRef } from 'react';
import './ExpandableSection.css';

function ExpandableSection({heading, subheading, children}) {
  const container = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    container.current.classList.toggle('closed', !isOpen);
  },[isOpen]);
    
  return (
      <div className='expandable-container closed' ref={container}>
        <h2>{heading}</h2>
        <button 
          className='expandable-header' 
          type='button' 
          onClick={()=> setIsOpen(!isOpen)}
        >
          <span>{subheading}</span>
          <span>{ isOpen ? '-' : '+'}</span>
        </button>
        <div className='expandable-contents'>
          <p>
              {children}
          </p>
        </div>
      </div>
  );
}

export default ExpandableSection;
