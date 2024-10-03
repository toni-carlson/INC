import React from 'react';
import './HomePageHeader.scss';
import PageHeader from '../../page_header/PageHeader.js';
import { orgName } from '../../constants';

function HomePageHeader() {
  return (
    <div className="section header home-page-header">
        <div className="background-dim-overlay"></div>
        <PageHeader />
        <div className="header-content">
            <div className="cursive-font welcome" style={{ fontFamily: 'Ms Madi' }}>Welcome to</div>
            <h1 className="welcome-org-name">
              { orgName }
            </h1>
            <div className="cursive-font small" style={{ fontFamily: 'Ms Madi' }}>
                Repairing&nbsp;minds. Rebuilding&nbsp;lives. Restoring&nbsp;hope.
            </div>
        </div>
    </div>
  );
}

export default HomePageHeader;
