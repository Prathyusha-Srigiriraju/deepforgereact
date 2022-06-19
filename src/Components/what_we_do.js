import React, { Component } from 'react';
import what_do_banner from '../assets/img/main/what_do_banner.png';
import plan from '../assets/img/main/plan.png';
import con_ai from '../assets/img/main/con_ai.png';
import digital_plan from '../assets/img/main/digital_plan.png';
import AA_logo from '../assets/img/main/AA_logo.svg';
import Blueprism_logo from '../assets/img/main/Blueprism_logo.svg';
import Dialogflow_logo from '../assets/img/main/Dialogflow_logo.svg';
import ibm from '../assets/img/main/ibm.png';
import kofax_logo from '../assets/img/main/kofax_logo.svg';
import Microsoft_logo from '../assets/img/main/Microsoft_logo.svg';
import UiPath_Logo from '../assets/img/main/UiPath_Logo.png';
import WitAI from '../assets/img/main/WitAI.png';
import Cognigy from '../assets/img/main/Cognigy.svg';
import Nuacem from '../assets/img/main/Nuacem.png';
import Ubisend from '../assets/img/main/Ubisend.svg';
import botxo from '../assets/img/main/botxo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
var usecase_bnr = {
    backgroundImage: `url(${what_do_banner})`
  };
class what_we_do extends Component {
	
  render() {

    return (
        <div>
            <div className="innerPage" style={usecase_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-8 col-xs-12">
                 <div className="innerPagehead">
                    <h1>Home > What we do</h1>
                    <div className="border1"></div>
                    <h2>What We Do</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0 ">
               
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec">
               <div className="container section_container">
              
               <div className="section_head text-center mb-3">
<h2> We Lead AI Technology Shifts</h2>

</div>
<div className="section_head">
<h5 className="text-center">We are Deepforge AI, forging, accelerating, enabling AI technology shifts to automate business processes and enhance customer experience.
</h5>
</div>

<h6 className="text-center mt-3">We are domain agnostic omnichannel AI experience providers with in-depth vertical domain knowledge and efficient, motivated, and dedicated conversational AI experts. 
</h6>



               <div className="row usecase_row align-items-center">
			  
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
		
<img src={con_ai} className="usecase_img" alt="media-and-entertainment"/>
</div>
	
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text wedo_text">
	<h5>Conversational AI</h5>
	<p>We build digital agents through conversational AI integrating robust features in multiple channels like Slack, Whatsapp, Kaizala, etc. with the domain expertise to simplify business processes and provide excellent customer engagement and experience.

</p>
    <ul className="partner_list partner_list2">
                       {/* <img src={list_style} className="list_style img-fluid"/> */}
                           <li><h5 className="mt-0">Machine Learning </h5>
                           <p>We build ML patterns and solutions that help machines learn quickly to simplify human tasks.
</p>
                           </li>
                           <li><h5 className="mt-0">Deep Learning  </h5>
                           <p>Our AI experts help digital agents learn to mimic human behavior and understanding through deep learning.
</p>
                           </li>
                           <li><h5 className="mt-0">Voice Experience</h5>
                          <p>We build out-of-the-box voice solutions that help your contact center and IVR with great customer engagement. </p>
                           </li>
                           <li className="mb-0"><h5 className="mt-0">Natural Language Processing </h5>
                          <p>Our experts work on natural language processing to make digital agents look natural, that they look.
</p>
                           </li>
                       </ul>
	
</div>
	</div>
</div>
<div className="row usecase_row align-items-center">
<div className="d-block d-sm-block d-md-none mx-auto">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<img src={plan} className="usecase_img" alt="education"/>
	</div>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
	<div className="usecase_text wedo_text">
	<h5>AI Strategy Planning
</h5>
	<p>Our strategy experts help businesses enable AI led technology shifts with long-term goals aligned with the vision and mission of the business.

<br></br>
Strategy planning starts with understanding your business goals and mission, designing, developing, and maintaining a digital plan in accordance with them.
</p>
<ul className="partner_list partner_list2">
                       {/* <img src={list_style} className="list_style img-fluid"/> */}
                           <li><h5 className="mt-0">Digital Transformation </h5>
                           <p>We lead your company in transforming digitally, reaching everyone everywhere. 
</p>
                           </li>
                           <li>
                           <h5 className="mt-0">AI Audit </h5>
                           <p>We analyse, understand, and statistically map the AI enablement in your company. 
</p>
                           </li>
                           <li>
                           <h5 className="mt-0">AI Expansion</h5>
                           <p>We aspire to expand and scale AI into the overall operations of your company to leverage its benefits.
</p>
                           </li>
                           <li>
                           <h5 className="mt-0">Delivering ROI</h5>
                           <p> We run the test-optimize cycle, until we are satisfied with the returns achieved by you. 
</p>
                           </li>
                           <li className="mb-0">
                           <h5 className="mt-0">Customer Experience</h5>
                           <p> A great customer experience is always the focus of any development we do. 
</p>
                           </li>
                           </ul>
</div>
	</div>
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<div className="d-none d-sm-none d-md-block">
	
	<img src={plan} className="usecase_img" alt="education"/>
	</div>
	</div>
</div>
<div className="row usecase_row align-items-center">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={digital_plan} className="usecase_img" alt="real-estate"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text wedo_text">
	<h5>Digital Customer Engagement and Experience Solutions</h5>
	<p>We understand the critical points of customer experience and digital engagement.

<br></br>
Our experts start at understanding your business and the possible channels of engagement. A plan is designed, developed and tested till the expected value is delivered with your brand’s personality and tone of voice.
</p>
	<ul className="partner_list partner_list2">
    <li>
                           <h5 className="mt-0">Digital Engagement</h5>
                           <p>We Empower you towards engaging your customers digitally to enhance your reach and customer satisfaction. </p>
                           </li>
                           <li><h5 className="mt-0">Omnichannel</h5>
                           <p> We integrate communication at the digital place, your customers spend most of their time. 
</p>
                           </li>
                           <li><h5 className="mt-0">Customer Experience</h5>
                           <p>Consistency, the right tone of the messages at the right time is the key to customer experience, and we build that. 
</p></li>
                           <li><h5 className="mt-0">24*7 Availability</h5>
                           <p> We build agents and engagement solutions that are available any time your customers need them.</p>
                           </li>
    </ul>
</div>
	</div>
</div>


            
               </div>
            </div>
{/* tools */}
<div className="tools section_padding">
  <div className="container section_container"> 
<div className="section_head text-center mb-3">
<h2>Tools We Use For Conversational AI Development</h2>
<p>Our partner Bot frameworks, NLP Engines and RPA Platforms we specialize in for Conversational Automation development services.</p>
</div>
<div className="row partner_row align-items-center elite_partners mb-0 tool">
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={Nuacem}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={Cognigy}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={botxo}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={Ubisend}/>
    </div>
</div>
<div className="row partner_row align-items-center elite_partners mb-0 tool">
   
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={Dialogflow_logo}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={ibm}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={Microsoft_logo}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={WitAI}/>
    </div>
    
   
   
</div>
<div className="row partner_row align-items-center elite_partners mb-0 tool">
    
   
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={UiPath_Logo}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={AA_logo}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={Blueprism_logo}/>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <img src={kofax_logo}/>
    </div>
   
</div>

</div>
</div>
            <div className="container section_container">
               <div className="calltoaction_bg mt-0">
               <div className="section_head text-center calltoaction">
               <h2>Looking for a reliable partner for your Conversational AI project? 
 <br></br> Get In Touch With Us Today.</h2>
<div class="callcatin_btn_div">
    <Link class="transistion secondary_btn callcatin_btn" to="/contact-us">Talk to Us</Link>
</div>
</div>    
               </div>
               </div>
        </div>
        );
    }
  }
  
  export default what_we_do;