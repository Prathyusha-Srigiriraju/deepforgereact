import React, { Component } from 'react';
import designPage_img from '../assets/img/main/designPage_img.png';
import discover_bg from '../assets/img/main/discover_bg.png';
import calltoactin_bg from '../assets/img/main/calltoactin_bg.png';
import design_tab_img from '../assets/img/main/design_tab_img.png';
import arrow from '../assets/img/main/arrow.svg';
import develop_icon from '../assets/img/main/develop_icon.svg';
import discover_icon from '../assets/img/main/discover_icon.svg';
import distribute_icon from '../assets/img/main/distribute_icon.svg';
import arrow_b from '../assets/img/main/arrow_b.svg';
import df_symbol from '../assets/img/main/df_symbol.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
var calltoactin_bg1 = {
  backgroundImage: `url(${calltoactin_bg})`
};
var design_bnr = {
  backgroundImage: `url(${discover_bg})`
};
class design extends Component {
  render() {

    return (
        <div>
            <div className="innerPage" style={design_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Approach > Design</h1>
                    <div className="border1 border2"></div>
                    <h2>Design Phase</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
                {/* <img src={designPage_img}/> */}
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec">
               <div className="container section_container">
               <h6 className="text-center">With all the preliminary legwork done, our world-class design team takes off with some insights into crafting a Conversational AI experience that’s a pleasure to engage with. Extraordinary design in digital ingenuity is crucial and will ultimately help you to exceed your customer expectations.
</h6>
               <div className="row innerpage_row align-items-center">
               <div className="col-lg-5 col-md-6 col-xs-12">
                   <img src={design_tab_img} alt="design"/>
                   </div>
                   <div className="col-lg-7 col-md-6 col-xs-12">
                       <ul>
                           <li><h5>Sketching the task flow and structuring the inputs
</h5>
                           <p>We design flows based on the use-cases with a holistic consideration.
 </p>
                           </li>
                           <li><h5>Defining the channels of integration
</h5>
                           <p>We deploy the conversational digital agents at the places that your customers spend most of their time in the digital ecosystem to reduce the overall engagement TAT.
</p>
                           </li>
                           <li><h5>Designing the ML model
</h5>
                           <p>We design the ML model for your conversational digital agent based on the use-cases, channels of integration, and the languages that the digital agent would speak.</p>
                           </li>
                           <li className="mb-0"><h5>Publishing the design guide
</h5>
                           <p>The design guide is prepared based on use-cases, UI elements, channels of integration, and language capabilities. This design guide is shared with our engineers and your team for any enhancements.
</p>
                           </li>
                       </ul>
                   </div>
               </div>
               <div className="make_us p-0">
       <div className="">
               <div className="row">
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
            <img src={develop_icon} alt="develop" className=""/>
            <h4>Develop</h4>
            <p className="services_para">Transforming your design into reality. From a simple informational chatbot or voiceBot to a more advanced bot requiring ‘Natural Language Processing’ and complex integrations, we develop the CDA's which are both simple to use and nimble in nature no matter how complex or custom the requirements are.
</p>
            <Link to="/approach/develop">
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
  
  export default design;