import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const Header = () => {
    return(
        <div style={{marginTop: '-65px', top: '0', height: '150px', backgroundColor: '#77F5B0', fontSize: '3em', color: '#F8F8F8'}}>
            <div style={{marginLeft: '5%'}}>
                <h1>Bookstore.</h1>
                <span style={{ marginTop: '-75px', display: 'flex', justifyContent: 'flex-start'}}>
                    <Link to="/" style={{fontSize: '30px', color: '#F8F8F8', marginRight: '15px'}}><MdHome  /></Link>
                    <Link to="/create" style={{textDecoration: 'none', fontSize: '25px', color: '#F8F8F8'}}>Kitap Ekle</Link>
                </span>
            </div>
        </div>
    );
}
export default withRouter(Header);