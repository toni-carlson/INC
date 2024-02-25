import React from 'react';
import MediaQuery from 'react-responsive';
import { orgName } from '../constants';
import Logo from '../images/white-logo-outlined.png';
import NavLinks from './NavLinks';
import MobileHeaderNavigation from './MobileHeaderNavigation.js';
import './PageHeader.css';

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
        <MediaQuery minWidth={1130}>
          <div className='top-navigation'>
            <NavLinks />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1130}>
          <MobileHeaderNavigation />
        </MediaQuery>
     </header>
  );
}

export default PageHeader;
