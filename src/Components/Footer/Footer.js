import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FaFacebook, FaLinkedin} from 'react-icons/fa';
class Footer extends Component {
    render(  ) {
        console.log(FaLinkedin);
        return (
            <footer className="container-fluid mt-2"  style={{backgroundColor:"black"}}>
                <div className="row text-center">
                    <div className="col-12 mb-4">
                        <a href = "https://www.linkedin.com/in/sphelele-mendu-648164164" className="fa button fa-linkedin">
                                <i>< FaLinkedin/></i>
                            </a>
                        <a href = "#" className="fa fa-facebook" style={{width:'107px',height:'107px'}}>
                            <i className="">
                                <FaFacebook/>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <p style={{color:"#fff"}}><i>sphelelemendu@gmail.com 0681847419</i> </p>
                </div>
            </footer>
        )
    }
}
export default Footer;