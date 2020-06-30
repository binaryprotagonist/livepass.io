import React, {Component} from 'react'
import './App.css';
import Loader from 'react-loader-spinner'
// import Body from './Body'
import Calender from './Calender'
import Meeting from './Meeting'
import MeetingDetial from './MeetingDetial'
import Session from './Session'
import {BrowserRouter, Router, Route} from "react-router-dom";


class App extends Component{
  render(){
    return(
 
      <BrowserRouter>
     
      
      
      {/* <Route exact path="/" component={Body}/> */}
      <Route exact path="/" component={Calender}/>
      <Route exact path="/meeting" component={Meeting}/>
      <Route exact path="/meetingdetail" component={MeetingDetial}/>
      <Route exact path="/session" component={Session}/>
      
     
      </BrowserRouter>

    )

  }
}

export default App;
