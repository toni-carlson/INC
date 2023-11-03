import React from 'react';
import './HomePage.css';
import PageHeader from '../../page_header/PageHeader.js';

function HomePageHeader() {
  return (
    <div className="section header">
        <div className="background-dim-overlay"></div>
        <PageHeader />
        <div className="header-content">
            <div className="cursive-font welcome">Welcome to</div>
            <h1 className="welcome-message">
                Integrative Neurofeedback and&nbsp;Counseling
            </h1>
            <div className="cursive-font small">
                Repairing&nbsp;Minds. Rebuilding&nbsp;Lives. Restoring&nbsp;Hope.
            </div>
        </div>
    </div>
  );
}

export default HomePageHeader;
