import React from "react";
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../Components/Navigation/Navigation';
import Education from '../Components/Main/Education/Education';
import Projects from '../Components/Main/Projects/Projects';
import Experience from '../Components/Main/Experience/Experience';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Main/Home/Home';

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