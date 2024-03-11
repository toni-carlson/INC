import React from 'react';
import MediaQuery from 'react-responsive';
import { orgName } from '../constants';
import Logo from '../images/white-logo-outlined.png';
import NavLinks from './NavLinks';
import MobileHeaderNavigation from './MobileHeaderNavigation.js';
import './PageHeader.scss';

function PageHeader() {
  return (
     <header className='page-header'>
        <div className='header-dim-overlay'></div>
        <img
          src={Logo}
          alt={orgName + ' logo'}
          className='logo'
        />
        <h2 className='company-name'>
          { orgName }
        </h2>
        <MediaQuery minWidth={1000}>
          <nav className='top-navigation' aria-label='main'>
            <NavLinks />
          </nav>
        </MediaQuery>
        <MediaQuery maxWidth={1000}>
          <MobileHeaderNavigation />
        </MediaQuery>
     </header>
  );
}

export default PageHeader;
