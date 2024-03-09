import React, { useState } from 'react';
import './HoverableCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function HoverableCard({icon, heading, subheading, children}) {
  const headingFormatted = heading.replaceAll(" ", "-").toLowerCase();
  const [isHovered, setIsHovered] = useState(false);

  window.addEventListener("load", () => {
    if (window.location.href.indexOf(headingFormatted) > -1) {
      setIsHovered(true);
    }
  });

  function toggleCard() {
    setTimeout(() => {
      setIsHovered(!isHovered);
    }, 100);
  }

  function handleKeydown(e) {
    const currentContents = e.currentTarget.querySelector('.hovered-contents p');

    // scroll contents
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
        id={headingFormatted}
        className={'hoverable-container' + (isHovered ? ' hovered' : '')}
        tabIndex="0"
        role='presentation'
        onClick={isHovered ? null : toggleCard}
        onKeyDown={handleKeydown}
        ref={card => card && isHovered && card.focus()}
      >
        { !isHovered ?
          <>
            <FontAwesomeIcon icon={icon} className='icon' />
            <h2>{heading}</h2>
          </> :
          <div className='hovered-contents'>
            <div className='contents-header'>
              <h3>{subheading}</h3>
              <button
                className='close-button'
                onClick={toggleCard}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
                <span className='close-label'>Close</span>
              </button>
            </div>
            <p>
              {children}
            </p>
          </div>
        }
      </div>
    </>
  );
}

export default HoverableCard;
