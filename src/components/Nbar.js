import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../assets/css/Nav.css'

class Nbar extends Component {
    render() {
        return (
            <div>
               <div className="navContainer">
                    <ul>
                        <li > <Link id='navList' to='../'>Home</Link> </li>
                        <li > <Link id='navList' to='../About'>About</Link> </li>
                        <li ><Link id='navList' to='../Services'>Services</Link></li>
                        <li ><Link id='navList' to='../Mission'>Mission</Link></li>
                        <li ><Link id='navList' to='../Team'>Team</Link></li>
                        <li ><Link id='navList' to='../Contact'>Contact</Link></li>
                    </ul>
               </div>
            </div>
        );
    }
}

export default Nbar;