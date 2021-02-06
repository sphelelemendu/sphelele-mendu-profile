import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink} from 'react-router-dom';
const navItem =(props)=>(
    <li className='navbar-item'>
        <NavLink className= "nav-link"  exact={props.exactValue} to={props.link}> {props.children}</NavLink>
    </li>
);
export default navItem;