import 'bootstrap/dist/css/bootstrap.css';
import CardTemplate from '../Other/CardTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja} from '@fortawesome/free-solid-svg-icons';
import Carousel from '../Other/Carousel';
const project = ()=>{
    return(
        <div className="container-fluid">
        <div className="row mb-4">
            <div className="col-12">
            <Carousel/>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-12">
                <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy" icon={faUserNinja}/>} title="Crispy (.NET Ninja)">
                    <p>
                        Movie Rental Application, Using C#, ASP.NET MVC, Entity Framework,Identity Framework, Wep Api 2, Restfull Api.
                    </p>
                </CardTemplate>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <CardTemplate faIcon={<FontAwesomeIcon className="fa-trophy" icon={faUserNinja} />}  title="THE BUILDING MANAGEMENT SYSTEM(Java)">
                    <p>The system automates the management of important building entities including tenants,rooms, staff, security and events
                    With this project I have become more comfortable working with java, javafx library, UI design, common java API's, File processing, Data structures. 
                    I have created database with MySql and mysql workbench as visual database design tool.
                    </p>
                </CardTemplate>
            </div>

        </div>
    </div>
    )
}

export default project;