import React from 'react';
import './ExpandableSection.css';

function ExpandableSection({heading, subheading, children}) {
  return (
      <div>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
        <p>
            {children}
        </p>
      </div>
  );
}

export default ExpandableSection;
