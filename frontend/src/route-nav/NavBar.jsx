import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUser } from '../auth/UserContext';
import LoginHandler from "../auth/LoginHandler";



function NavBar() {
    const {user} = useUser();
    const { logout } = LoginHandler();
    /* const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]); */



    return (
        
        <nav className="text-white py-4">
        <div className="flex justify-between items-center mx-auto px-4">
          <Link to="/home" className="text-xl font-bold text-white hover:text-gray-600">PT Spanish</Link>
          <div className="flex space-x-4">
            <NavLink to="/home" 
            className={({isActive } )=> (isActive ? 'text-gray-600' : "text-white hover:text-gray-600" )}>Home</NavLink>
            
            <NavLink to="/sections" className={({ isActive }) => (isActive ? 'text-gray-600' : 'text-white hover:text-gray-600')}>Sections</NavLink>

            <NavLink to="/review" className={({ isActive }) => (isActive ? 'text-gray-600' : 'text-white hover:text-gray-600')}>Review</NavLink>

            <Link to="/" onClick={logout} className="text-white hover:text-gray-600">Log out</Link>

                    
                </div>
            </div>
        </nav>
    );
 }
        
export default NavBar;