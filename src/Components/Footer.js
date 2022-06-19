import React, { Component } from 'react';
import footer_bg from '../assets/img/main/footer_bg.png';
import footer_logo from '../assets/img/main/footer_logo.png';
import linkedin_button from '../assets/img/main/linkedin_button.svg';
import facebook_logobutton from '../assets/img/main/facebook_logobutton.svg';
import twitter_logobutton from '../assets/img/main/twitter_logobutton.svg';
import location from '../assets/img/main/location.svg';
import mail from '../assets/img/main/mail.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
var  footer_bg1= {
    backgroundImage: `url(${footer_bg})`
  };
class Footer extends Component {
  render() {

    return (
      
      <footer>
     <div style={footer_bg1} className="section_padding footer_bg">
     <div className="container section_container">
     <div className="row">
	<div className="col-lg-4 col-md-12 col-xs-12 pl-0">
        <img src={footer_logo} className="footer_logo"/>
        <p className="footer_text">At Deepforge AI, we are Conversational AI implementers specialized in conversational digital agents and automation solutions for enterprises to create engaging conversations with both internal and external customers.
</p>
        </div>
        <div className="col-lg-8 col-md-12 col-xs-12">
        <div className="row">
        <div className="col-lg-3 col-md-4 col-xs-12">
            <ul>
                <li className="course">Conversational AI</li>
                <Link to="#approach"><li>Approach</li></Link>
                <a href="#capabilities"><li>Capabilities</li></a>
                <Link to="what-we-do"><li>What We Do</li></Link>
                <Link to="/allusecases"><li>Use Cases</li></Link>
            </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12">
        <ul>
                <li className="course">Company</li>
                <Link to="/who-we-are"><li>Who We Are</li></Link>
                <Link to="/partner"><li>Partnership</li></Link>
                <Link to=""><li>Resources</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
        <div className="col-lg-5 col-md-4 col-xs-12">
        <ul>
                <li className="course">Contact</li>
                <li>For Support</li>
                <a href="mailto:sales@deepforgeai.com"><li><img src={mail} className="location"/>sales@deepforgeai.com</li></a>
                <li>Hyderabad</li>
                <li><img src={location} className="location"/>1-65/15, G.Begumpet, Madhapur, Hyderabad, Telangana, India. 500081</li>
            </ul>
        </div>
        </div>
        </div>
        </div>
     </div>
     </div>
     <div className="copy_rights">
     <div className="container section_container">
     <div className="d-flex align-items-center">
         <p>© Copyright 2020 Deepforge AI. All Rights Reserved.</p>
       <div className="d-flex align-items-center">
        <a href="https://www.linkedin.com/company/deepforgeai/" target="_blank"><img src={linkedin_button}/></a>
        <a href="https://www.facebook.com/deepforgeai/" target="_blank"><img src={facebook_logobutton}/></a>
        <a href="https://twitter.com/DeepforgeAI" target="_blank"><img src={twitter_logobutton}/></a>
       </div>
     </div>
    </div>
     </div>
</footer>

    );
  }
}

export default Footer;
