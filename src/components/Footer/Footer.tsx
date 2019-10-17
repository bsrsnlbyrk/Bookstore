import React from 'react';

const Footer = () => {
    const year = new Date();
    return(
        <div style={{marginTop: '20px', top: '0', height: '50px', backgroundColor: '#77F5B0', color: '#F8F8F8'}}>
            <p style={{marginLeft: '5%'}}>All rights reserved.&copy; {year.getFullYear()}</p>
        </div>
    );
}
export default Footer;