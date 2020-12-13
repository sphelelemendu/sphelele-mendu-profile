import React from "react";
import bootstrap from 'bootstrap';
import reactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink} from 'react-router-dom';
import NavLinkStyle from './NavItems.css';


const navItem =(props)=>(
    <li className='navbar-item'>

        <NavLink className= "nav-link"  exact={props.exactValue} to={props.link}> {props.children}</NavLink>
    
    </li>
);

export default navItem;