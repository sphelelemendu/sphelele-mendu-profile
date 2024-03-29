import bootstrap from 'bootstrap';
import reactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import LoginImage from '../../assets/loginUI.png';
import HomePage from '../../assets/homePage.png';
import MenuImage from '../../assets/menuUI.png'
const carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={LoginImage} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={HomePage} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={MenuImage} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}
export default carousel;