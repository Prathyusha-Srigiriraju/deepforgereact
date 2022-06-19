import React, { Component } from 'react';
import platform_with_robust_features_bg from '../assets/img/main/platform_with_robust_features_bg.png';
import platform_with_robust_features_img from '../assets/img/main/platform_with_robust_features_img.png';

import calltoactin_bg from '../assets/img/main/calltoactin_bg.png';
import arrow from '../assets/img/main/arrow.svg';
import arrow_b from '../assets/img/main/arrow_b.svg';
import list_style from '../assets/img/main/list_style.svg';
import omnichannelp_img from '../assets/img/main/omnichannelp_img.png';
import our_platform_is_domain_agnostic1 from '../assets/img/main/our_platform_is_domain_agnostic1.png';
import knowledge_img from '../assets/img/main/knowledge_img.png';
import platform_img3 from '../assets/img/main/platform_img3.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
var platform_with_robust_features_bnr = {
    backgroundImage: `url(${platform_with_robust_features_bg})`
  };
class platform_with_robust_features extends Component {
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
            <div className="innerPage" style={platform_with_robust_features_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Capabilities > We Deliver Robust Experiences</h1>
                    <div className="border1"></div>
                    <h2>We Deliver Robust Experiences</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
               
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec pb-0">
               <div className="container section_container">
               <h6 className="text-center"> 
               We build digital agents with robust features to support complexity with excellent customer engagement and experience always delivered.

</h6>
               <div className="row innerpage_row align-items-center">
               <div className="col-lg-5 col-md-6 col-xs-12">
                   <img src={platform_with_robust_features_img} alt="platform-with-robust-features"/>
                   </div>
                   <div className="col-lg-7 col-md-6 col-xs-12">
                       <ul className="cap_list">
                       {/* <img src={list_style} className="list_style img-fluid"/> */}
                           <p>Our experts can handle simple FAQs to complex workflows with a plethora of advanced features to support simple and complex business cases. To enable rapid deployment and ROI for organisations, we build digital agents that come with feature-rich and pre-trained knowledge bundles to get going immediately.
                           </p>
                           <p className="mt-3">Reactive and Proactive Experiences :We build both reactive and proactive engagement experiences. While in reactive engagement, customers find the query resolution and information with ease; In proactive experience, we enable the digital agent to reach out to customers proactively to boost the engagement.
</p>
                       </ul>
                   </div>
               </div>
           
               </div>
            </div>
            {/* platform starts */}

            <div className="section_padding platform platform_sub">
<div className="container section_container platform_container inner_case">

<OwlCarousel className="owl-theme platform_carousel mt-0 platform_web" loop={true} margin={40} dots={false} responsive={this.state.responsive} > 
<div className="items">
		<img src={omnichannelp_img} alt="Deepforge-Ai" width="100%"/>
		<div className="card_body">
            <div className="card_body1">
            <h5>We Build Omnichannel Experiences
</h5>
		<p>  
        We can deploy our digital agents on any channel, any device, any platform where your customers are there. One-click channel integrations make digital agents easy to use and maintain.
</p>
            </div>
            <div className="d-flex align-items-center"><Link to="/capabilities/we-build-omnichannel-experiences"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
</div>
<div className="items">
<img src={knowledge_img} alt="Deepforge-Ai" width="100"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>We Possess In-depth Vertical Domain Knowledge 
 </h5>
		<p>With pre-built industry AI models and domain knowledge built by our experts, the time-to-market for our digital agents is far shorter than the standard industry time-to-market timeline. The ability to add more domain knowledge on the go makes these industry AI models even more powerful.
</p></div>
<div className="d-flex align-items-center"><Link to="/capabilities/deep-vertical-domain-knowledge"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>

<div className="items">
<img src={our_platform_is_domain_agnostic1} alt="Deepforge-Ai" width="100"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>We Develop and Deliver Agnostic Experiences
</h5>
		<p>
        We build agents that are domain-agnostic, continuously improving as we scale across different application domains. Our Conversational Digital Agents can be developed and deployed seamlessly across multiple industry verticals and horizontals.
</p></div>
<div className="d-flex align-items-center"><Link to="/capabilities/we-develop-and-deliver-agnostic-experiences"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
        <div className="items">
<img src={platform_img3} alt="Deepforge-Ai" width="100%"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>We Deliver Robust Experiences

</h5>
		<p> 
        We build digital agents with robust features to support complexity with excellent customer engagement and experience always delivered.
</p></div>
<div className="d-flex align-items-center"><Link to="/capabilities/we-give-robust-experiences"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
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
  
  export default platform_with_robust_features;