import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const Header = () => {
    return(
        <div className="header-wrapper">
            <div>
                <h1>Bookstore.</h1>
                <span className="header-navigation">
                    <Link to="/" className="header-navigation home"><MdHome  /></Link>
                    <Link to="/create" className="header-navigation create">Kitap Ekle</Link>
                </span>
            </div>
        </div>
    );
}
export default withRouter(Header);