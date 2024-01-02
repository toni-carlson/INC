import React from 'react';
import './HomePage.css';
import PageHeader from '../../page_header/PageHeader.js';
import { orgName } from '../../constants';

function HomePageHeader() {
  return (
    <div className="section header">
        <div className="background-dim-overlay"></div>
        <PageHeader />
        <div className="header-content">
            <div className="cursive-font welcome">Welcome to</div>
            <h1 className="welcome-message">
                { orgName }
            </h1>
            <div className="cursive-font small">
                Repairing&nbsp;minds. Rebuilding&nbsp;lives. Restoring&nbsp;hope.
            </div>
        </div>
    </div>
  );
}

export default HomePageHeader;
