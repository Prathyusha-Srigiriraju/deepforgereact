import React, { Component } from 'react';
import travelandhospitality_bg from '../assets/img/main/travelandhospitality_bg.png';
import travelandhospitality_img from '../assets/img/main/travelandhospitality_img.png';

import omnichannelp_img from '../assets/img/main/omnichannelp_img.png';
import knowledge_img from '../assets/img/main/knowledge_img.png';
import platform_img3 from '../assets/img/main/platform_img3.png';
import media_img from '../assets/img/main/media_img.png';
import travel_img from '../assets/img/main/travel_img.png';
import financial_img from '../assets/img/main/financial_img.png';
import education_img from '../assets/img/main/education_img.png';
import healthcare_img from '../assets/img/main/healthcare_img.png';
import realestate_img from '../assets/img/main/realestate_img.png';
import ecommerce_img from '../assets/img/main/ecommerce_img.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
var travelandhospitality_bnr = {
    backgroundImage: `url(${travelandhospitality_bg})`
  };
class travelandhospitality extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
                nav:true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],	
            },
            450: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
                nav:true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
            },
		},
        
    }
  render() {

    return (
        <div>
            <div className="innerPage" style={travelandhospitality_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Use cases > Travel and Hospitality</h1>
                    <div className="border1 border2"></div>
                    <h2>Travel and Hospitality</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
                
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec pb-0">
               <div className="container section_container">
               <h6 className="text-center">Travel and hospitality companies can intensify customer connect and engagement using AI-powered conversational interfaces. They can deploy bots to automate, and personalize discovery, booking, reviews, payment, feedback and support processes.
</h6>
               <div className="row innerpage_row align-items-center">
               <div className="col-lg-5 col-md-6 col-xs-12">
                   <img src={travelandhospitality_img} alt="travel-and-hospitality"/>
                   </div>
                   <div className="col-lg-7 col-md-6 col-xs-12 d-flex">
                       <ul>
                       {/* <img src={list_style} className="list_style img-fluid"/> */}
                           <li><h5>Booking assistance </h5>
                           </li>
                           <li><h5>24*7 Customer Support </h5>
                           </li>
                           <li><h5>Room Bookings </h5>
                           </li>
                           <li><h5>Check-ins and related services </h5>
                           </li>
                          
                       </ul>
                       <ul className="ml-5">
                       {/* <img src={list_style} className="list_style img-fluid"/> */}
                       <li className=""><h5>Hotel Directory</h5>
                           </li>
                           <li><h5>Baggage Tracking & Claims

 </h5>
                           </li>
                           <li><h5>Personal Assistant and Concierge Services </h5>
                           </li>
                          
                           <li className="mb-0"><h5>Complaint and Feedback management</h5>
                           </li>
                       </ul>
                   </div>
                   <p className="text-center mx-auto talk_text">We understand one size does not fit all. Have a bespoke bot use case for your next project?  <Link to="/contact-us">Let's Talk!</Link></p>
               </div>
           
               </div>
            </div>
            {/* platform starts */}
            <div className="section_padding platform platform_sub">
<div className="container section_container platform_container inner_case">

<OwlCarousel items={3} className="owl-theme platform_carousel mt-0 platform_web" loop={true} margin={40} responsive={this.state.responsive}> 
<div className="items">
		<img src={education_img} alt="Deepforge-Ai" width="100%"/>
		<div className="card_body">
            <div className="card_body1">
            <h5>Education</h5>
		<p>Conversational AI is quickly changing education and eLearning by bringing constructive change to the learning process and make it more efficient.
AI assistants help students and parents be more organized by improving communications with the educational institutions and help newcomers with onboarding and being campus guides while extending 24X7 support to staff and students alike.
</p>
            </div>
            <div className="d-flex align-items-center"><Link to="/usecases/education" ><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
</div>
<div className="items">
<img src={financial_img} alt="Deepforge-Ai" width="100"/>
		<div className="card_body">
        <div className="card_body1">
        <h5>Banking and Financial Services 
</h5>
		<p>Conversational assistants bring two-way, relational interactions to digital banking channels. Financial services companies can reduce service costs and improve customer satisfaction by deploying bots for simple banking transactions and tier-1 support resolution.</p></div>
		<div className="d-flex align-items-center"><Link to="/usecases/banking-financial-services"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
<div className="items">
<img src={realestate_img} alt="Deepforge-Ai" width="100%"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>Real Estate
</h5>
		<p>Real estate industry is making headway into using Conversational AI and transforming customer support and experience segments. AI assistants and chat agents can engage, nurture, and convert buyers and sellers into clients. Sales and Marketing teams are seemingly successful as qualified lead volumes increase and spam hassle goes down.</p></div>
		<div className="d-flex align-items-center"><Link to="/usecases/real-estate"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
<div className="items">
<img src={ecommerce_img} alt="Deepforge-Ai" width="100"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>Retail and Ecommerce
</h5>
		<p>Retail and Ecommerce companies can use conversational selling to increase wallet share and customer satisfaction. Intelligent voice and chat assistants delivering personalized shopping experiences and 24/7 support can drive digital sales for e-tailers.</p></div>
		<div className="d-flex align-items-center"><Link to="/usecases/retail-ecommerce"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
        <div className="items">
<img src={healthcare_img} alt="Deepforge-Ai" width="100"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>Healthcare
</h5>
<p> AI assistants enable personalized care while lowering the overall cost of care. Healthcare organizations delivering conversational care via chatbots and voice assistants are seeing improvements in patient experience, care management and medical staff productivity.</p></div>
		<div className="d-flex align-items-center"><Link to="/usecases/healthcare"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
      
        <div className="items">
<img src={media_img} alt="Deepforge-Ai" width="100"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>Media and Entertainment
</h5>
<p>AI powered digital agents are gaining widespread adoption in the media and entertainment industry. AI assistants help brands reach a larger audience and engage better by being able to deliver personalized content to targeted audiences at a very little cost which is a high RoI driven case for the industry.
</p></div >
<div className="d-flex align-items-center"><Link to="/usecases/media-and-entertainment"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
        <div className="items">
<img src={travel_img} alt="Deepforge-Ai" width="100"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>Travel and Hospitality

</h5>
<p>Travel and hospitality companies can intensify customer connect and engagement using AI-powered conversational interfaces. They can deploy bots to automate, and personalize discovery, booking, reviews, payment, feedback and support processes.</p></div>
		<div className="d-flex align-items-center"><Link to="/usecases/travel-and-hospitality"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
		
</OwlCarousel>
</div>
</div>
<div className="container section_container">
               <div className="calltoaction_bg">
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
  
  export default travelandhospitality;