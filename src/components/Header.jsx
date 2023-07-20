import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 

        <div className="header">
            <nav>
            <Link to="/">Home </Link>
            <Link to="/articles"> Articles</Link>
            </nav>
            </div>
     );
}
 
export default Header;