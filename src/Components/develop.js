import React, { Component } from 'react';
import designPage_img from '../assets/img/main/designPage_img.png';
import develop_bg from '../assets/img/main/develop_bg.png';

import develope_tab_img from '../assets/img/main/develope_tab_img.png';
import design_icon from '../assets/img/main/design_icon.svg';
import discover_icon from '../assets/img/main/discover_icon.svg';
import distribute_icon from '../assets/img/main/distribute_icon.svg';
import df_symbol from '../assets/img/main/df_symbol.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
var develop_bnr = {
    backgroundImage: `url(${develop_bg})`
  };
class develop extends Component {
  render() {

    return (
        <div>
            <div className="innerPage" style={develop_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Approach > Develop</h1>
                    <div className="border1 border2"></div>
                    <h2>Develop Phase</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
               
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec">
               <div className="container section_container">
               <h6 className="text-center">Transforming your design into reality. From a simple informational chatbot or voiceBot to a more advanced bot requiring ‘Natural Language Processing’ and complex integrations, we develop the CDA's which are both simple to use and nimble in nature no matter how complex or custom the requirements are.
</h6>
               <div className="row innerpage_row align-items-center">
               <div className="col-lg-5 col-md-6 col-xs-12">
                   <img src={develope_tab_img} alt="develop"/>
                   </div>
                   <div className="col-lg-7 col-md-6 col-xs-12">
                       <ul>
                           <li><h5>Structuring the AI model
</h5>
                           <p>Based on the use-cases defined, the AI model for your conversational digital agent is developed by our team of developers with detailing on ML model, NLP, NN with the business intelligence in focus.
</p>
                           </li>
                           <li><h5>Designing the UI elements involved
</h5>
                           <p>UI elements are designed in sync with the designed flow and experience that should be delivered to the customer. We build digital agents with intuitive designs that complement the ease of use while ensuring it performs all its functions to the fullest.</p>
                           </li>
                           <li><h5>Designing the conversations   </h5>
                           <p>With the best possible user experience as a priority, our language and conversation designing experts design bespoke conversations to give digital agents the most natural design.
</p>
                           </li>
                           <li className="mb-0"><h5>Developing channel integrations
</h5>
                           <p>The digital agent is integrated into channels across messenger, Whatsapp, Slack, Google Assistant, Kaizala, and many more as per the requirements. </p>
                           </li>
                       </ul>
                   </div>
               </div>
               <div className="make_us p-0">
       <div className="">
               <div className="row">
         <div className="col-lg-4 col-md-4 col-xs-12">
           <div className="card">
            <img src={design_icon} alt="design" className=""/>
            <h4>Design</h4>
            <p className="services_para">With all the preliminary legwork done, our world-class design team takes off with some insights into crafting a Conversational AI experience that’s a pleasure to engage with. Extraordinary design in digital ingenuity is crucial and will ultimately help you to exceed your customer expectations.
</p>
            <Link to="/approach/design">
						   <button className="primary_btn btn_text d-flex align-items-center mx-auto mt-4 services_btn">Know More</button>
						   </Link>
           </div>
         </div>
         <div className="col-lg-4 col-md-4 col-xs-12">
         <div className="card">
            <img src={discover_icon} alt="discover" className=""/>
            <h4>Discover</h4>
            <p className="services_para">For Conversational AI enablement to be successful, it should be a factor in enterprise readiness and follow a rigorous discovery process that validates business logic. We identify and prioritize integration opportunities to match the ability and willingness to transition to an AI-powered enterprise driving engaging customer conversations.	</p>
            <Link to="/approach/discover">
						   <button className="primary_btn btn_text d-flex align-items-center mx-auto mt-4 services_btn">Know More</button>
						   </Link>
           </div>
           </div>
           <div className="col-lg-4 col-md-4 col-xs-12">
           <div className="card">
            <img src={distribute_icon} alt="distribute" className=""/>
            <h4>Distribute</h4>
            <p className="services_para">Bringing the conversational digital agent to life, enhance your brand value by engaging with your customers effectively and in real-time on any digital channel. It’s time to train, test, deploy, and maintain your conversational agents. Considering “Change is only Constant,” the conversational agents will always be in tweak-train-test-track mode.
</p>
            <Link to="/approach/distribute">
						   <button className="primary_btn btn_text d-flex align-items-center mx-auto mt-4 services_btn">Know More</button>
						   </Link>
           </div>
           </div>
         </div></div></div>
               <div className="container section_container">
               <div className="calltoaction_bg">
               <div className="section_head text-center calltoaction">
<h2>Start your Conversational AI journey now 
</h2>
<div class="callcatin_btn_div">
    <Link class="transistion secondary_btn callcatin_btn" to="/contact-us">Talk to Us</Link>
</div>
</div>    
               </div>
               </div>
               </div>
            </div>
        </div>
        );
    }
  }
  
  export default develop;