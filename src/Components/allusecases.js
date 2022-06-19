import React, { Component } from 'react';
import designPage_img from '../assets/img/main/designPage_img.png';
import usecases_bg from '../assets/img/main/usecases_bg.png';
import media1 from '../assets/img/main/media1.png';
import healthcare2 from '../assets/img/main/healthcare2.png';
import travel from '../assets/img/main/travel.png';
import education1 from '../assets/img/main/education1.png';
import realestate1 from '../assets/img/main/realestate1.png';
import ecommerce1 from '../assets/img/main/ecommerce1.png';
import financial1 from '../assets/img/main/financial1.png';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
var usecase_bnr = {
    backgroundImage: `url(${usecases_bg})`
  };
class allusecases extends Component {
	
  render() {

    return (
        <div>
            <div className="innerPage" style={usecase_bnr}>
            <div className="container section_container pr-0">
			<div className="row">
                 <div className="col-lg-8 col-md-8 col-xs-12">
                 <div className="innerPagehead">
                    <h1>Home > Use cases</h1>
                    <div className="border1"></div>
                    <h2>Industry Use Cases</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0 ">
               
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec">
               <div className="container section_container">
               <div className="row usecase_row mt-0">
			  
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
		
<img src={media1} className="usecase_img" alt="media-and-entertainment"/>
</div>
	
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Media & Entertainment</h5>
	<p>AI powered digital agents are gaining are gaining widespread adoption in the media and entertainment industry. AI assistants help brands reach a larger audience and engage better by being able to deliver personalized content to targeted audience at a very little cost which is a high RoI driven case for the industry.</p>
	<div className="d-flex align-items-center"><Link to="/usecases/media-and-entertainment"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
	
	</div>
	
</div>
	</div>
</div>
<div className="row usecase_row">
<div className="d-block d-sm-block d-md-none mx-auto">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<img src={education1} className="usecase_img" alt="education"/>
	</div>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
	<div className="usecase_text">
	<h5>Education</h5>
	<p>Conversational AI is quickly changing education and eLearning by bring constructive change to the learning process and make it more efficient.
AI assistants help students and parents be more organized by improving communications with the educational institutions and help newcomers
with onboarding and being campus guides while extending
24X7 support to staff and students alike.</p>
<div className="d-flex align-items-center"><Link to="/usecases/education"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
</div>
	</div>
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<div className="d-none d-sm-none d-md-block">
	
	<img src={education1} className="usecase_img" alt="education"/>
	</div>
	</div>
</div>
<div className="row usecase_row">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={realestate1} className="usecase_img" alt="real-estate"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Real Estate</h5>
	<p>Real estate industry is making headway into using Conversational AI and transforming customer support and experience segments. AI assistants and chat agents can engage, nurture, and convert buyers and sellers into clients. Sales and Marketing teams are seemingly successful as qualified lead volumes increase and spam hassle goes down.</p>
	<div className="d-flex align-items-center"><Link to="/usecases/real-estate"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
</div>
	</div>
</div>
<div className="row usecase_row">
<div className="d-block d-sm-block d-md-none mx-auto">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<img src={ecommerce1} className="usecase_img" alt="retail-ecommerce"/>
	</div>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
	<div className="usecase_text">
	<h5>Retail & Ecommerce</h5>
	<p>Retail and Ecommerce companies can use conversational selling to increase wallet share and customer satisfaction. Intelligent voice and chat assistants delivering personalized shopping experiences and 24/7 support can drive digital sales for e-tailers.</p>
	<div className="d-flex align-items-center"><Link to="/usecases/retail-ecommerce"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
</div>
	</div>
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<div className="d-none d-sm-none d-md-block">
	
	<img src={ecommerce1} className="usecase_img" alt="retail-ecommerce"/>
	</div>
	</div>
	
</div>
<div className="row usecase_row">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={healthcare2} className="usecase_img" alt="healthcare"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Healthcare</h5>
	<p>AI assistants enable personalized care while lowering the overall cost of care. Healthcare organizations delivering conversational care via chatbots and voice assistants are seeing improvements in patient experience, care management and medical staff productivity.</p>
	<div className="d-flex align-items-center"><Link to="/usecases/healthcare"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
</div>
	</div>
</div>
<div className="row usecase_row">
<div className="d-block d-sm-block d-md-none mx-auto">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<img src={financial1} className="usecase_img" alt="/banking"/>
	</div>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
	<div className="usecase_text">
	<h5>Banking and Financial Services</h5>
	<p>Conversational assistants bring two-way, relational interactions to digital banking channels. Financial services companies can reduce service costs and improve customer satisfaction by deploying bots for simple banking transactions and tier-1 support resolution.</p>
	<div className="d-flex align-items-center"><Link to="/usecases/banking-financial-services"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
</div>
	</div>
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<div className="d-none d-sm-none d-md-block">
	
	<img src={financial1} className="usecase_img" alt="/banking"/>
	</div>
	</div>
	
</div>
<div className="row usecase_row">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={travel} className="usecase_img" alt="travel-and-hospitality"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Travel & Hospitality</h5>
	<p>Travel and hospitality companies can intensify customer connect and engagement using AI-powered conversational interfaces. They can deploy bots to automate, and personalize discovery, booking, reviews, payment, feedback and support processes.</p>
	<div className="d-flex align-items-center"><Link to="/usecases/travel-and-hospitality"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
</div>
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
  
  export default allusecases;