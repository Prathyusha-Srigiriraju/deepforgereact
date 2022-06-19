import React, { Component } from 'react';
import designPage_img from '../assets/img/main/designPage_img.png';
import distribute_bg from '../assets/img/main/distribute_bg.png';
import distribute_tab_img from '../assets/img/main/distribute_tab_img.png';
import calltoactin_bg from '../assets/img/main/calltoactin_bg.png';
import design_icon from '../assets/img/main/design_icon.svg';
import develop_icon from '../assets/img/main/develop_icon.svg';
import discover_icon from '../assets/img/main/discover_icon.svg';
import df_symbol from '../assets/img/main/df_symbol.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
var distribute_bnr = {
    backgroundImage: `url(${distribute_bg})`
  };
class distribute extends Component {
  render() {

    return (
        <div>
            <div className="innerPage" style={distribute_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Approach > Distribute</h1>
                    <div className="border1 border2"></div>
                    <h2>Distribute Phase</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
              
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec">
               <div className="container section_container">
               <h6 className="text-center">Bringing the conversational digital agent to life, enhance your brand value by engaging with your customers effectively and in real-time on any digital channel. It’s time to train, test, deploy, and maintain your conversational agents. Considering “Change is only Constant,” the conversational agents will always be in tweak-train-test-track mode.
</h6>
               <div className="row innerpage_row align-items-center">
               <div className="col-lg-5 col-md-6 col-xs-12">
                   <img src={distribute_tab_img} alt="distribute"/>
                   </div>
                   <div className="col-lg-7 col-md-6 col-xs-12">
                       <ul>
                           <li><h5>Training the conversational digital agent to be intelligent
</h5>
                           <p>The digital agents are trained with our expertise in ontology, collaboratively with your domain experts.</p>
                           </li>
                           <li><h5>Internal testing of the Whole system</h5>
                           <p>The conversational digital agent is tested in stand-alone mode and as a whole by our team to identify the edge cases and enhance the experience.
</p>
                           </li>
                           <li><h5>You Test, We train</h5>
                           <p>The conversational digital agent is shared with your team to test the digital agent and make the best even better.
</p>
                           </li>
                           <li className="mb-0"><h5>Optimizing the bot with frequent train-test-track cycles</h5>
                           <p>Post-deployment, our experts test, train, and track the digital agent outputs for any enhancements.

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
            <img src={discover_icon} alt="discover" className=""/>
            <h4>Discover</h4>
            <p className="services_para">For Conversational AI enablement to be successful, it should be a factor in enterprise readiness and follow a rigorous discovery process that validates business logic. We identify and prioritize integration opportunities to match the ability and willingness to transition to an AI-powered enterprise driving engaging customer conversations.	</p>
            <Link to="/approach/discover">
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
  
  export default distribute;