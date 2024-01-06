import React from 'react';
import './PageHeader.css';
import HeaderNavigation from './HeaderNavigation.js';
import Logo from '../images/white-logo-outlined.png';
import { orgName } from '../constants';

function PageHeader() {
  return (
     <header className='page-header-topbar'>
        <div className='background-dim-overlay'></div>
        <img 
          src={Logo} 
          alt={orgName + ' logo'}
          className='logo'
        />
        <h2 className='company-name'>
          { orgName }
        </h2>
        <HeaderNavigation />
     </header>
  );
}

export default PageHeader;
