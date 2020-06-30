import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Draggable from 'react-draggable';
import dragHandlers from 'react-draggable'
import { Lines } from 'react-preloaders';
// import Loader1 from './Loader1'

class Meeting extends Component{



    render(){
        return(
            <div className="body">
              <React.Fragment>
            {/* <YourApp /> */}
            <Lines  time={10} />

          </React.Fragment>
            
            <img src="/backgrond.png" className="img-ci"/>
<nav className="navbar navbar-expand-lg navbar-dark">
<a className="navbar-brand" href="#"><span className="logo-lo">K</span> KINRGY</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav ml-auto">
    <a className="nav-item nav-link active" href="#">05:25 PM</a>
  
  </div>
</div>
</nav>

<Draggable {...dragHandlers}>
<div className="show">
   
     
   
       <div className="row">
         <div className="col-xl-12">
           <Link to="/meetingdetail">
           <img src="/minimize-pngrepo-com.png" class="img-minimize" />
           </Link>
         </div>
           <div className="col-xl-12">
           <iframe width="100%" height="220" src="https://www.youtube.com/embed/tveIjnSG_8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

           </div>
           <div className="col-xl-2" style={{marginLeft: '25px'}}><p className="time">5:25AM</p></div>
           <div className="col-xl-6">
               <p className="head-calnder">Quick Session (45 Min)</p>
               <p className="para-calender">Michael Schermer + 3 oyhers</p>
           </div>
          
           <div className="col-xl-3">
           <Link to="/meetingdetail">
               <p className="color-s-c pink"> NOW</p>
               </Link>
           </div>
          
       </div>
      
  
</div> 
        </Draggable>




<div className="bottom">
          <ul>
            <Link to="/Calender">  <li><img src="/calendaralt.png" className="img-fluid img-custom"/></li></Link>
            <Link to="/">  <li><img src="/Grey.png" className="img-fluid img-custom"/></li></Link>
            <Link to="/">  <li><img src="/Group10.png" className="img-fluid img-custom"/></li></Link>
          </ul>
      </div>

          </div>
     
        )
    }
}

export default Meeting