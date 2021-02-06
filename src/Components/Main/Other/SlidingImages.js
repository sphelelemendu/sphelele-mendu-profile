import ManplayingChess from '../../../Assets/man-playing-chess1.jpg';
import ServersSlide from '../../../Assets/servers-slide1.png';
import PlayImage from '../../../Assets/play-concentration1.jpg'

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
class SlideShow extends Component {
    intervalId=0;
    state = {
        image:0
    }
    startSlideShow =()=>{
        
        this.intervalId= setInterval(() => {
            console.log("The Interval ID is : "+this.intervalId);
            let currentImage= this.state.image;
            let nextImage = 1;
            if(currentImage>=3){
                nextImage=1;
            }else{
                nextImage=currentImage+1;
            }
            this.setState({image:nextImage});    
        }, 6000);
        
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    
    render() {
        
        let imageToRender=PlayImage;
        if (this.state.image === 0){
            this.startSlideShow();
        }
        if (this.state.image === 1) {
            console.log("Show image 1");
             imageToRender = PlayImage;
        }
        else if (this.state.image === 2) {
            console.log("Show image 2");
            imageToRender = ServersSlide;
        }
        else if(this.state.image===3) {
            console.log("Show image 3");
            imageToRender = ManplayingChess;
        }
        
        return (
            <div className="col-12 fade">
                <img src={imageToRender} className="img-fluid img-thumbnail" alt="Responsive image" />
            </div>
        );
    }

}

export default SlideShow;