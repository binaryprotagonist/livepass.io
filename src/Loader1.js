import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'



class Loader1 extends Component{
    render(){
        return(
            <Loader
            type="Grid"
            color="#171919"
            height={100}
            width={100}
            timeout={2000}>
            

            <div className="show">
   <ul>
       <li>
           <div className="row">
               <div className="col-xl-2"><p className="time">5:25AM</p></div>
               <div className="col-xl-6">
                   <p className="head-calnder">Quick Session (45 Min)</p>
                   <p className="para-calender">Michael Schermer + 3 oyhers</p>
               </div>
               <div className="col-xl-3">
                   <p className="color-s-c">UP NEXT  <i className="fa fa-angle-right custom-icon"></i></p>
               </div>
           </div>
       </li>
       <li>
           <div className="row">
               <div className="col-xl-2"><p className="time">5:25AM</p></div>
               <div className="col-xl-6">
                   <p className="head-calnder">Quick Session (45 Min)</p>
                   <p className="para-calender">Michael Schermer + 3 oyhers</p>
               </div>
               <div className="col-xl-3">
                   <p className="color-s-c">UP NEXT  <i className="fa fa-angle-right custom-icon"></i></p>
               </div>
           </div>
       </li>
       <li>
           <div className="row">
               <div className="col-xl-2"><p className="time">5:25AM</p></div>
               <div className="col-xl-6">
                   <p className="head-calnder">Quick Session (45 Min)</p>
                   <p className="para-calender">Michael Schermer + 3 oyhers</p>
               </div>
               <div className="col-xl-3">
                   <p className="color-s-c">UP NEXT <i className="fa fa-angle-right custom-icon"></i> </p>
               </div>
           </div>
       </li>
       
   </ul>
</div> 
   
</Loader>
        )
    }
}

export default Loader1;