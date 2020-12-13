import React from "react";
import {Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './Navigation';
import Education from './Education';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';
import Home from './Home';

const main =(props)=>(
   <div className="min-vw-100 min-vh-100">
       <Navigation className="fixed-top" />
       <Route path='/' exact component={Home} />
       <Route path='/education' exact component={Education} />
       <Route path='/experience' exact component = {Experience}/>
       <Route path='/projects' exact component = {Projects}/>
       <Footer/>
   </div>
    
);

export default main;