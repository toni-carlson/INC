import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
              <HashLink key={index} to={'/whowehelp#' + info.heading.replaceAll(" ", "-").toLowerCase()}>
                {info.heading}
              </HashLink>
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
