import React from 'react';
import './SiteMap.css';
import { ailmentsInfo } from '../constants';

function SiteMap() {
  return (
    <nav className='site-map'>
        <div className='link-section'>
          <h3><a href='/'>Home</a></h3>
        </div>
        <div className='link-section'>
          <h3><a href='/whowehelp'>Who we help</a></h3>
          {
            ailmentsInfo.map((info, index) =>
              <a
                key={index}
                href={'/whowehelp#' + info.heading.replaceAll(" ", "-").toLowerCase()}
              >
                {info.heading}
              </a>
            )
          }
        </div>
        <div className='link-section'>
            <h3><a href='/contactus'>Contact us</a></h3>
        </div>
    </nav>
  );
}

export default SiteMap;
