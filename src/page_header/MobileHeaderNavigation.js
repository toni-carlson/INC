import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLinks from './NavLinks';
import './MobileHeaderNavigation.css';

function MobileHeaderNavigation() {
    const container = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        container.current.classList.toggle('closed', !isOpen);
    },[isOpen]);

    return (
        <nav className='top-navigation-mobile' aria-label='main'>
            <button type='button' onClick={()=> setIsOpen(!isOpen)} aria-label='Menu' aria-expanded={isOpen} aria-controls='mobile-nav'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div id='mobile-nav' className='dropdown-menu' ref={container}>
                <NavLinks closeMenu={()=> setIsOpen(!isOpen)} />
            </div>
        </nav>
    );
}

export default MobileHeaderNavigation;
