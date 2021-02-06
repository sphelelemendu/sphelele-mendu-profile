import React, { Component } from 'react';
import NavItems from './NavItems';
import bootstrap from 'bootstrap';
import reactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import mypic from '../../assets/sphelelemendupic.jpg'
import FooterStyle from './Footer.css';
import HomeStyle from "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { faTrophy, faUniversity, faSchool, faLaptopCode, faMale, faRocket } from '@fortawesome/free-solid-svg-icons';
class Home extends Component {

    render() {
        return (
            <div className="container-fluid">

                <div className="row text-center">
                    <div className="col-md-6 m-auto header">
                        <div className="row h-25" >
                            <div className="col-md-12">
                                Software Engineer 
                          </div>
                        </div>
                        <div className="row msg">
                            <div className="col-md-12">
                                I am passionate software developer. A hard-working individual who loves to tackle challenges. I persue perfection in all tasks and projects. Self-motivated and a quick learner who can work under pressure as leader and as a team player.
                                My strongest personal attribute are enthusiasm, solution focused, and my ability and eagerness to learn new technologies.
                          </div>
                        </div>

                    </div>

                    {/* the image part */}
                    <div className=" col-md-6 text-right blur">

                        <img src={mypic} className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;