import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div >
        <header className="comp">
           
           <NavLink to="/"><img src="../../Blog.png" width="350px" height="52px" /></NavLink> 
           <NavLink to="/admin" className='admin'>ADMIN</NavLink>
        </header>
        
    </div>
);

export default Header;