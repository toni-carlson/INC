import React from 'react';
import './PageFooter.css';
import SiteMap from './SiteMap.js';
import FbLogo from '../images/facebook-icon.png';

function PageFooter() {
  return (
     <footer className='page-footer'>
        <SiteMap />
        <br /><br />
        <a href='https://www.facebook.com/IntegrativeMindConnections/' className='fb-link'>
            <img src={FbLogo} className='fb-logo' alt='Facebook' />
            Facebook
        </a>
        <br /><br />
        &copy; Integrative Neurofeedback and Counseling, LLC, All Rights Reserved.
     </footer>
  );
}

export default PageFooter;
