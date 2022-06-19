import React, { Component } from 'react';
import deep_vertical_domain_knowledge_bg from '../assets/img/main/deep_vertical_domain_knowledge_bg.png';
import deep_vertical_domain_knowledge_img from '../assets/img/main/deep_vertical_domain_knowledge_img.png';
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
var deep_vertical_domain_knowledge_bnr = {
    backgroundImage: `url(${deep_vertical_domain_knowledge_bg})`
  };
class deep_vertical_domain_knowledge extends Component {
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
            <div className="innerPage" style={deep_vertical_domain_knowledge_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Capabilities > We Possess In-depth Vertical Domain Knowledge 
</h1>
                    <div className="border1"></div>
                    <h2>We Possess In-depth Vertical Domain Knowledge 
</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
               
               </div>
             </div>
            </div>
            </div>
            <div className="innerpage_sec pb-0">
               <div className="container section_container">
               <h6 className="text-center">With pre-built industry AI models and domain knowledge built by our experts, the time-to-market for our digital agents is far shorter than the standard industry time-to-market timeline. The ability to add more domain knowledge on the go makes these industry AI models even more powerful.
</h6>
               <div className="row innerpage_row align-items-center">
               <div className="col-lg-5 col-md-6 col-xs-12">
                   <img src={deep_vertical_domain_knowledge_img} alt="deep-vertical-domain-knowledge"/>
                   </div>
                   <div className="col-lg-7 col-md-6 col-xs-12">
                       <ul>
                       {/* <img src={list_style} className="list_style img-fluid"/> */}
                           <li><h5>Ontology </h5>
                           <p>Our team of SMEs have the domain expertise to build the digital agents with apt ontology to provide the user with great experience even with colloquial inputs.
 </p>
                           </li>
                           <li><h5>Protocols</h5>
                           <p> We build conversational digital agents with care, to be sensitive towards different industry protocols for the right message to be delivered to the customer.
</p>
                           </li>
                           
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
		<img src={omnichannelp_img} width="100%" alt="our-platform-is-omnichannel"/>
		<div className="card_body">
            <div className="card_body1">
            <h5>We Build Omnichannel Experiences</h5>
		<p> 
        We can deploy our digital agents on any channel, any device, any platform where your customers are there. One-click channel integrations make digital agents easy to use and maintain.
</p>

            </div>
            <div className="d-flex align-items-center"><Link to="/capabilities/we-build-omnichannel-experiences"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
</div>

<div className="items">
<img src={platform_img3} width="100%" alt="platform-with-robust-features"/>
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
<div className="items">
<img src={our_platform_is_domain_agnostic1} width="100" alt="our-platform-is-domain-agnostic"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>We Develop and Deliver Agnostic Experiences

</h5>
		<p>
        We build agents that are domain-agnostic, continuously improving as we scale across different application domains. Our Conversational Digital Agents can be developed and deployed seamlessly across multiple industry verticals and horizontals.
</p></div>
<div className="d-flex align-items-center"><Link to="/capabilities/our-platform-is-domain-agnostic"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
		</div>
		</div>
		<div className="items">
<img src={knowledge_img} width="100" alt="deep-vertical-domain-knowledge"/>
		<div className="card_body">
        <div className="card_body1">
		<h5>We Possess In-depth Vertical Domain Knowledge 
 </h5>
		<p> With pre-built industry AI models and domain knowledge built by our experts, the time-to-market for our digital agents is far shorter than the standard industry time-to-market timeline. The ability to add more domain knowledge on the go makes these industry AI models even more powerful.
</p></div>
<div className="d-flex align-items-center"><Link to="/capabilities/deep-vertical-domain-knowledge"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link></div>
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
  
  export default deep_vertical_domain_knowledge;