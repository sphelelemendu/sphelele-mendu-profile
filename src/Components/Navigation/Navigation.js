import React ,{Component} from 'react';
import NavItems from './NavItems';
import 'bootstrap/dist/css/bootstrap.css';
class Navigation extends Component {
    render(){
        return(
            <nav className='navbar navbar-expand-sm  navbar-dark' style={{backgroundColor:"black"}}>
                <a href='./' className='navbar-brand'>Sphelele Mendu Profile</a>
                <button className='navbar-toggler' data-toggle='collapse' data-target='#navId'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div  className='collapse  navbar-collapse' id="navId">
                <NavItems/>
                </div>
            </nav>
        )
    }
}
export default Navigation;