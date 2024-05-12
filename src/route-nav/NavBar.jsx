import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import axios from "axios";
import { UserContext, UserProvider } from '../auth/UserContext';



function NavBar({ logout }) {
    const {user} = useContext(UserContext);
    /* const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]); */



    return (
        
        <nav className="text-white py-4">
        <div className="flex justify-between items-center mx-auto px-4">
          <Link to="/home" className="text-xl font-bold text-white hover:text-gray-600">PT Spanish</Link>
          <div className="flex space-x-4">
            <NavLink exact to="/home" activeClassName="text-gray-600" className="text-white hover:text-gray-600">Home</NavLink>
            
            <NavLink to="/sections" activeClassName="text-gray-600" className="text-white hover:text-gray-600">Sections</NavLink>

            <NavLink to="/review" activeClassName="text-gray-600" className="text-white hover:text-gray-600">Review</NavLink>

            <Link to="/" onClick={logout} className="text-white hover:text-gray-600">Log out</Link>

                    
                </div>
            </div>
        </nav>
    );
 }
        
export default NavBar;