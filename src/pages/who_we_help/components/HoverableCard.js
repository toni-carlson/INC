import React, { useState } from 'react';
import './HoverableCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HoverableCard({id, icon, heading, subheading, children}) {
  const [isHovered, setIsHovered] = useState(false);

  function showHoveredContents(e) {
    setIsHovered(true);
  }

  function showHeading(e) {
    setIsHovered(false);
  }

  function scroll(e) {
    const currentContents = e.currentTarget.querySelector('.hovered-contents');

    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentContents.scrollTop = currentContents.scrollTop + 20;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentContents.scrollTop = currentContents.scrollTop - 20;
    }
  }

  return (
    <>
      <div
        className='hoverable-container'
        tabIndex='0'
        role='presentation'
        onFocus={showHoveredContents}
        onMouseEnter={showHoveredContents}
        onBlur={showHeading}
        onMouseLeave={showHeading}
        onKeyDown={scroll}
      >
        { !isHovered ?
        <>
          <FontAwesomeIcon icon={icon} className='icon' />
          <h2>{heading}</h2>
        </> :
        <>
          <div className='hovered-contents'>
            <h2>{subheading}</h2>
            <p>
              {children}
            </p>
          </div>
        </>
        }
      </div>
    </>
  );
}

export default HoverableCard;
