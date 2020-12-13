
import 'bootstrap/dist/css/bootstrap.css';
import bigImage from '../../assets/servers.png';
import EducationStyle from './Education.css';
import CardTemplate from './CardTemplate';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUniversity, faSchool, faLaptopCode, faMale } from '@fortawesome/free-solid-svg-icons';
import SlideShow from './SlidingImages';
import cardTemplate from './CardTemplate';
import skillsStyle from './SkillsListItems.css';
import skillsListItem from './SkillsListItem';

const education = (props) => (

    <div className="container-fluid">
        <div className='row mb-4 ' >
            <div className="col-12 text-center">
                <img src={bigImage} className="img-fluid img-thumbnail" alt="Responsive image" />
            </div>
        </div>
        <div className="row mb-4">

            <div className="col-md-6" >
                <div className="row h-100">
                    <div className="col-md-12">
                        <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy" icon={faTrophy} />} title="MY AWARDS AND ACHIEVEMENTS">

                            <ul className="list-group " >
                                <li className="list-group-item  bg-transparent" >Sibusisiwe High School Top Achiever with 86% average</li>
                                <li className="list-group-item  bg-transparent">Data Structures Merit Certificate</li>
                                <li className="list-group-item  bg-transparent">Systems Analysis and Design Merit Certificate</li>
                                <li className="list-group-item  bg-transparent">Computer Organisation and architecture Merit Certificate</li>
                                <li className="list-group-item  bg-transparent" >Deans Commendation</li>

                            </ul>

                        </CardTemplate>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row mb-4" >
                            <div className="col-md-12">
                                <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy" icon={faSchool} />} title="SIBUSISIWE COMP TECH HIGH SCHOOL">
                                    I acquired National Senior Certificate. I majored in physical sciences, mathematics, life sciences, accounting and geography.
                        </CardTemplate>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy align-self-center" icon={faUniversity} />} title="UNIVERITY OF KWAZULU NATAL">
                                    I acquired understanding of fundamental mathematical and scientific principles behind computer science, as
                                    well as the important practical skills required.I now understand how to critically analyze problems,
                                    apply logical problem solving, design and implement solution and
                                    further assess the correctness and efficiency of the solutions.
                        </CardTemplate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row text-center mb-4">
            <SlideShow />
        </div>
        <div className="row mb-4">

        </div>
        <div className="row">
            <div className="col-12 mb-4">
                <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy align-self-center" icon={faLaptopCode} />} title="FRONT-END">
                    <ul className="list-group" >

                        <li className="list-group-item text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">HTML5 </p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>


                                </div>
                            </div>

                        </li>
                        <li className="list-group-item   text-left text-uppercase">
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">CSS 3 </p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase">
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">BOOTSTRAP 4</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase">
                            <div className="row">
                                <div className=" col-6">
                                    <p className=" mb-0">JAVASCRIPT(ES6)</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">JQUERY</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">REACT</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                    </ul>
                </CardTemplate>
            </div>
            <div className="col-12 mb-4">
                <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy align-self-center" icon={faLaptopCode} />} title="BACK-END">


                    <ul className="list-group " >

                        <li className="list-group-item   text-left text-uppercase " >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">SQL</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">SQL SERVER/MYSQL</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">SSMS/WORKBENCH</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">C#</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">ASP.NET MVC</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase">
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">ENTITY-FRAMEWORK</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">JAVA SE/JAVAFX</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">PBM DEVELOPMENT</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                    </ul>


                </CardTemplate>
            </div>
            <div className="col-12">
                <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy align-self-center" icon={faMale} />} title="PERSONAL SKILLS">

                    <ul className="list-group " >

                        <li className="list-group-item   text-left text-uppercase " >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">Object-Oriented Thinking</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">complex problem solving</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">critical and logical thinking</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">Leadership and teamwork</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase" >
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">Adaptability and flexibility</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>
                        <li className="list-group-item   text-left text-uppercase">
                            <div className="row ">
                                <div className=" col-6">
                                    <p className=" mb-0">Written and Verbal Communication</p>
                                </div>
                                <div className="text-center col-6">
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="activeDot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>


                                </div>
                            </div>
                        </li>

                    </ul>

                </CardTemplate>
            </div>
        </div>

    </div>
);

export default education;