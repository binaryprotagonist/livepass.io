import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Meeting from './Meeting'
//import { Lines } from 'react-preloaders';

class Session extends Component{
    state = {
        minutes: 1,
        seconds: 56
      }
    render(){
        const { minutes, seconds } = this.state
        return(
            <div className="body">
            {/* <React.Fragment>
                        <YourApp />
                        <Lines time={800} />
                      </React.Fragment> */}
                       
                        
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
            
            <div className="show">
               <ul>
                   <Link to="/meeting">
                   <li>
                       <div className="row">
                           <div className="col-xl-2"><p className="time">5:25AM</p></div>
                           <div className="col-xl-7">
                               <p className="head-calnder">Quick Session (45 Min)</p>
                               <p className="para-calender">Michael Schermer + 3 oyhers</p>
                           </div>
                           <div className="col-xl-3">
                               <p className="color-s-c" style={{marginRight:'30px'}}> { minutes }:{ seconds }  <i className="fa fa-angle-right custom-icon"></i></p>
                           </div>
                       </div>
                   </li>
                   </Link>
                   <li>
                       <div className="row">
                           <div className="col-xl-2"><p className="time">5:25AM</p></div>
                           <div className="col-xl-7">
                               <p className="head-calnder">Quick Session (45 Min)</p>
                               <p className="para-calender">Michael Schermer + 3 oyhers</p>
                           </div>
                           <div className="col-xl-3">
                               <p className="color-s-c" style={{marginRight:'30px'}}>  <i className="fa fa-angle-right custom-icon"></i></p>
                           </div>
                       </div>
                   </li>
                   <li>
                       <div className="row">
                           <div className="col-xl-2"><p className="time">5:25AM</p></div>
                           <div className="col-xl-7">
                               <p className="head-calnder">Quick Session (45 Min)</p>
                               <p className="para-calender">Michael Schermer + 3 oyhers</p>
                           </div>
                           <div className="col-xl-3">
                               <p className="color-s-c" style={{marginRight:'30px'}}> <i className="fa fa-angle-right custom-icon"></i> </p>
                           </div>
                       </div>
                   </li>
                   
               </ul>
            </div> 
            
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

export default Session;