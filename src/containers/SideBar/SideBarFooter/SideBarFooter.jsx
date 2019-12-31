import React from 'react';
import './SideBarFooter.scss'

export const SideBarFooter = () => {
    return (
        <>
            <div className='footer-block'>
                <div>About Press Copyright</div>
                <div>Creators Advertise</div>
                <div>Developers +MyTube</div>
                <div>Legal</div>
            </div>
            <div className='footer-block'>
                <div>Terms Privacy</div>
                <div>Policy & Safety</div>
                <div>Test new features</div>
            </div>
            <div className='footer-block'>
                <div>A Youtube clone purely  for educational purposes under fair use.</div>
            </div>
        </>
    );
}