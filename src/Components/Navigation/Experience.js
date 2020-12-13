import 'bootstrap/dist/css/bootstrap.css';
import books from '../../assets/books.jpeg';
import experienceStyle from './Experience.css';
import CardTemplate from './CardTemplate';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUniversity, faSchool, faLaptopCode, faMale, faUserNinja, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Carousel from './Carousel';
import cardTemplate from './CardTemplate';
const experience = () => {
    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-12 ">
                    <div className="background-image d-flex flex-row-reverse">
                        <img src={books} alt="books" className="img-fluid  img-thumbnail" />
                        <div className="what-i-learned mw-50">
                            <h4>What I learned </h4>
                            <p>I have taken a few contract positions during my undergraduate studies.
                            I learned some important principles like accountability, ethicality,meeting deadlines among others.
                            It also gave me an insight of working and engaging in a professional environment</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="row mb-4 ">
                <div className="col-6 adjustCol">
                    
                    <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy" icon={faBriefcase} />} title="DATACENTRIX">
                        <h6 className="text-uppercase font-weight-bold">GRADUATE SOFTWARE DEVELOPER</h6>
                        <p>
                            In my current role I have gained exposure to full-stack web development, MVC, process automation,
                            designing and building models and web services and consuming server side resources and developing the view.
                        </p>
                    </CardTemplate>
               
                    
                </div>
            </div>
            <div className="row justify-content-end mb-4">
                <div className="col-6 adjustCol">

                    <CardTemplate className="text-left" faIcon={<FontAwesomeIcon className="fa-trophy" icon={faUniversity} />} title="University of KwaZulu Natal">
                        <h6 className="text-uppercase font-weight-bold">Mathematics Supplementary Instructions Leader</h6>
                        <p>
                            Taught first years basics of programming in python and java.Conducted tutorial services for
                            students to provide academic support in computer programming. Motivated students towards
                        </p>

                    </CardTemplate>
                </div>

            </div>
            <div className="row justify-content-start">
                <div className="col-6 adjustCol">

                    <CardTemplate className="text-left" faIcon={<FontAwesomeIcon className="fa-trophy" icon={faUniversity} />} title="University of KwaZulu Natal">
                        <h6 className="text-uppercase font-weight-bold">Mathematics Supplementary Instructions Leader</h6>
                        <p>
                            Led discussions and activities centred around course content. The content included Calculus for
                            first years and Discret mathematics for second years.
                        </p>

                    </CardTemplate>
                </div>

            </div>
        </div>
    )
}

export default experience;