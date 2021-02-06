
import '../../CSS/App.css';
import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from 'react-router-dom'
import MainContent from '../../Main/Main';
class  App extends Component {
  render(){
    return (
      <BrowserRouter>
              <MainContent/>
      </BrowserRouter>
  );
  }

}

export default App;
