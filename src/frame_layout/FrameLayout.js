import React from 'react';
import './FrameLayout.css';
import PageFooter from './../page_footer/PageFooter';
import PageHeader from './../page_header/PageHeader.js';

function FrameLayout({ customHeader, children }) {
    const hasCustomHeader = customHeader !== undefined;

  return (
    <div className='frame-layout'>
        {!hasCustomHeader && <PageHeader />}
        {hasCustomHeader && customHeader }
        <div className={hasCustomHeader ? '' : 'body-slot'}>
            { children }
        </div>
        <PageFooter />
    </div>
  );
}

export default FrameLayout;
