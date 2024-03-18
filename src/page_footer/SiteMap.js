import React from 'react';
import './SiteMap.scss';
import { ailmentsInfo } from '../constants';

function SiteMap() {
  return (
    <nav className='site-map'>
        <div className='link-section'>
          <h3>
            <Link to='/'>Home</Link>
          </h3>
        </div>
        <div className='link-section'>
          <h3>
            <Link to='/whowehelp'>Who we help</Link>
          </h3>
          {
            ailmentsInfo.map((info, index) =>
              <Link key={index} to={'/whowehelp#' + info.heading.replaceAll(" ", "-").toLowerCase()}>
                {info.heading}
              </Link>
            )
          }
        </div>
        <div className='link-section'>
            <h3>
              <Link to='/contactus'>Contact us</Link>
            </h3>
        </div>
    </nav>
  );
}

export default SiteMap;
