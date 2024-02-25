import React, { useState } from 'react';
import './ExpandableSection.css';

function ExpandableSection({id, heading, subheading, children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={`expandable-container ${isOpen ? '' : 'closed'}`}>
        <h2>{heading}</h2>
        <button
          className='expandable-header'
          type='button'
          aria-expanded={isOpen}
          aria-controls={id}
          onClick={()=> setIsOpen(!isOpen)}
        >
          <span>{ subheading }</span>
          <span>{ isOpen ? '-' : '+' }</span>
        </button>
        { isOpen &&
          <div id={id} className='expandable-contents'>
            <p>
                {children}
            </p>
          </div>
        }
      </div>
  );
}

export default ExpandableSection;
