import React from 'react';
import './FrameLayout.css';
import PageFooter from './../page_footer/PageFooter';
import PageHeader from './../page_header/PageHeader.js';

function FrameLayout({ customHeader, children }) {
  return (
    <div className="frame-layout">
        {customHeader === undefined && <PageHeader />}
        {customHeader !== undefined && customHeader }
        { children }
        <PageFooter />
    </div>
  );
}

export default FrameLayout;
