import React from 'react';
import './PageFooter.css';
import SiteMap from './SiteMap.js';
import FbLogo from '../images/facebook-icon.png';
import { orgName } from '../constants';

function PageFooter() {
  return (
     <footer className='page-footer'>
        <SiteMap />
        <a
            href='https://www.facebook.com/IntegrativeMindConnections/'
            target='blank'
            className='fb-link'
         >
            <img src={FbLogo} className='fb-logo' alt='Facebook' />
            Facebook
        </a>
        <span>&copy; { orgName }, LLC, All Rights Reserved.</span>
     </footer>
  );
}

export default PageFooter;
