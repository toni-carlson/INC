import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLinks from './NavLinks';
import './MobileHeaderNavigation.css';

function MobileHeaderNavigation() {
    const container = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setTimeout(() => {
            setIsOpen(!isOpen);
        }, 50);
    }

    if (container.current && isOpen) {
        document.addEventListener('click', closeMenu);
        container.current.addEventListener('focusout', closeMenu);
    } else {
        document.removeEventListener('click', closeMenu);
        container.current?.removeEventListener('focusout', closeMenu)
    }

    function closeMenu(e) {
        const hasFocusLeft = e.relatedTarget && !container.current?.contains(e.relatedTarget);
        if (!container.current?.contains(e.target) || hasFocusLeft) {
            toggleMenu();
        }
    }

    return (
        <nav className='top-navigation-mobile' aria-label='main' ref={container}>
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
