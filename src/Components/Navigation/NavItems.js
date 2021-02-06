import React from "react";
import NavItem from './NavItem';
import 'bootstrap/dist/css/bootstrap.css';
const navItems =()=>(
    <ul className='navbar-nav ml-auto'>
        <NavItem link='/' exactValue={true}>Home</NavItem>
        <NavItem link='/education'>Education</NavItem>
        <NavItem link='/experience'>Experience</NavItem>
        <NavItem  link='/projects'>Projects</NavItem>
    </ul>
);

export default navItems;