import React, { Component } from 'react';
import designPage_img from '../assets/img/main/designPage_img.png';
import discover_img from '../assets/img/main/discover_img.png';
import discover_bg from '../assets/img/main/discover_bg.png';
import design_icon from '../assets/img/main/design_icon.svg';
import develop_icon from '../assets/img/main/develop_icon.svg';
import distribute_icon from '../assets/img/main/distribute_icon.svg';
import df_symbol from '../assets/img/main/df_symbol.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
var discover_bnr = {
    backgroundImage: `url(${discover_bg})`
  };
class discover extends Component {
  render() {

    return (
        <div>
            <div className="innerPage" style={discover_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Approach > Discover</h1>
                    <div className="border1 border2"></div>
                    <h2>Discover Phase</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
               
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec">
               <div className="container section_container">
               <h6 className="text-center">For Conversational AI enablement to be successful, it should be a factor in enterprise readiness and follow a rigorous discovery process that validates business logic. We identify and prioritize integration opportunities to match the ability and willingness to transition to an AI-powered enterprise driving engaging customer conversations. </h6>
               <div className="row innerpage_row align-items-center">
               <div className="col-lg-5 col-md-5 col-xs-12">
                   <img src={discover_img} alt="discover"/>
                   </div>
                   <div className="col-lg-7 col-md-7 col-xs-12">
                       <ul>
                           <li><h5>Defining and understanding the stage of AI adoption
</h5>
                           <p>We assess your technological maturity and readiness for AI-driven automation of your business operations, from analyzing your use case to developing a digital agent and ensuring its positive user buy-in.
 </p>
                           </li>
                           <li><h5>Defining your digital agent persona</h5>
                           <p>Based on the business understanding and the stage of AI adoption, our team of experts now define the digital agent persona, with a holistic approach towards users, prospects, customers, and the business use cases.
</p>
                           </li>
                           <li><h5>Defining your conversational digital agent roadmap</h5>
                           <p>We plan a long-term AI strategy to create a scalable AI roadmap that works comprehensively towards your business.
</p>
                           </li>
                           <li className="mb-0"><h5>Complete your discovery plan </h5>
                           <p>Our AI consultants create a blueprint of the business use-cases based on the current stage of AI adoption and the long-term AI strategy, including the channels of engagement.
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
            <p className="services_para">With all the preliminary legwork done, our world-class design team takes off with some insights into crafting a Conversational AI experience that???s a pleasure to engage with. Extraordinary design in digital ingenuity is crucial and will ultimately help you to exceed your customer expectations.
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
            <p className="services_para">Transforming your design into reality. From a simple informational chatbot or voiceBot to a more advanced bot requiring ???Natural Language Processing??? and complex integrations, we develop the CDA's which are both simple to use and nimble in nature no matter how complex or custom the requirements are.
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
            <p className="services_para">Bringing the conversational digital agent to life, enhance your brand value by engaging with your customers effectively and in real-time on any digital channel. It???s time to train, test, deploy, and maintain your conversational agents. Considering ???Change is only Constant,??? the conversational agents will always be in tweak-train-test-track mode.
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
  
  export default discover;