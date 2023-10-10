import React from 'react';
import './PageHeader.css';
import HeaderNavigation from './HeaderNavigation.js';
import Logo from '../images/white-logo-outlined.png';

function PageHeader() {
  return (
     <header className="page-header-topbar">
        <img 
            src={Logo} 
            alt='Integrative Neurofeedback and Couseling logo'
            className='logo'
        />
        <h2 className="company-name">
            Integrative Neurofeedback and Counseling
        </h2>
        <HeaderNavigation />
     </header>
  );
}

export default PageHeader;
