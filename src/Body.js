import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'


class Body extends Component{
    render(){
        return(
            // <Loader type="Rings" color="#00BFFF" height={80} width={80} />

            <div className="body">
            
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



<div className="bottom">
            <ul>
              <Link to="/calender">  <li><img src="/calendaralt.png" className="img-fluid img-custom"/></li></Link>
              <Link to="/">  <li><img src="/Grey.png" className="img-fluid img-custom"/></li></Link>
              <Link to="/">  <li><img src="/Group10.png" className="img-fluid img-custom"/></li></Link>
            </ul>
        </div>

            </div>
       

        )
    }
}

export default Body;