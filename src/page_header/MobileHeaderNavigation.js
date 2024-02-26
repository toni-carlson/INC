import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLinks from './NavLinks';
import './MobileHeaderNavigation.css';

function MobileHeaderNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setTimeout(() => {
            setIsOpen(!isOpen);
        }, 50);
    }

    return (
        <nav className='top-navigation-mobile' aria-label='main'>
            <button type='button' onClick={toggleMenu} aria-label='Menu' aria-expanded={isOpen} aria-controls='mobile-nav'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            { isOpen &&
                <div id='mobile-nav' className='dropdown-menu'>
                    <NavLinks closeMenu={toggleMenu} />
                </div>
            }
        </nav>
    );
}

export default MobileHeaderNavigation;
