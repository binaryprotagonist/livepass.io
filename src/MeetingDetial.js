import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Countdown from 'react-countdown-now';
import { Lines } from 'react-preloaders';


class MeetingDetial extends Component{
    render(){
        return(
          
<div className="container-fluid custom-po-a">
<React.Fragment>
            {/* <YourApp /> */}
            {/* <Lines time={80} /> */}
          </React.Fragment>
  <div className="row">
    <div className="col-md-9 p-0 width-custom" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
    <nav className="navbar navbar-expand-lg navbar-dark">
<a className="navbar-brand" href="#"><span className="logo-lo">K</span> KINRGY</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav ml-auto">
    <a className="nav-item nav-link active" href="#"><Countdown date={Date.now() + 10000000} /></a>
    
  
  </div>
</div>
</nav>
      <div className="video_section">
        {/* <div className="video_btn">12k live</div> */}
        <iframe width="727" height="409" src="https://www.youtube.com/embed/tveIjnSG_8s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div className="col-md-3 p-0 bg_panel" style={{maxWidth: '20%'}}>
      <div className="right_panel row">
        <div className="setting_section">
          <div className="setting_1">
            <div>
              <img className="img_iconss" src="/imgs/White.png" />
            </div>
            <div>
              <img className="img_iconss" src="/imgs/white1.png" />
            </div>
          </div>
          <div className="setting_2">
              <Link to="/meeting">
            <img className="img_iconss" src="/imgs/Dismiss.png" />
            </Link>
          </div>
        </div>
        <div className="message_section">
          <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> Jane cooper</div>
              <div className="comments">I am get them to play at my cousins party.</div>
            </div>
          </div>
          <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> wade warron</div>
              <div className="comments">So cool! Awesome view as possible.</div>
            </div>
          </div>
          <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title">Esther Howard</div>
              <div className="comments">My favorite band of all time! This is so great!</div>
            </div>
          </div>
          <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> Cameron Williamson</div>
              <div className="comments">The latest album was solid. check it out if you have'nt.</div>
            </div>
          </div>
          <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> Brooklyn Simmons</div>
              <div className="comments">What guitar is david using?</div>
            </div>
          </div>
          <div className="message_div">
            <span className="font_iconsss">
                <img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> Leslie Alexander</div>
              <div className="comments">I think its a Yamaha F335 Accoustic guitar.</div>
            </div>
          </div>
          <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title">Esther Howard</div>
              <div className="comments">My favorite band of all time! This is so great!</div>
            </div>
          </div>
          {/* <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> Cameron Williamson</div>
              <div className="comments">The latest album was solid. check it out if you have'nt.</div>
            </div>
          </div> */}
          {/* <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> Brooklyn Simmons</div>
              <div className="comments">What guitar is david using?</div>
            </div>
          </div> */}
          {/* <div className="message_div">
            <span className="font_iconsss"><img src="/Avatar.png" class="img-custom1" /></span>
            <div className="messages">
              <div className="title"> Title</div>
              <div className="comments">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti totam, doloremconsectetur, adipisicing elit.</div>
            </div>
          </div> */}
        </div>
        <div className="typing_section">
          <div className="message_typing">Typing messages.. </div>
          <div className="message_icon">
            <img className="img_iconss" src="/imgs/Back-Blue-Arrow.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default MeetingDetial;