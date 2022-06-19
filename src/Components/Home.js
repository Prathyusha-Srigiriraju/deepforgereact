import React, { Component } from 'react';

import home_bg from '../assets/img/main/home_bg.png';
import banner_img from '../assets/img/main/banner_img.png';

import discover_tab_img from '../assets/img/main/discover_tab_img.png';
import distribute_tab_img from '../assets/img/main/distribute_tab_img.png';
import design_tab_img from '../assets/img/main/design_tab_img.png';
import develope_tab_img from '../assets/img/main/develope_tab_img.png';
import omnichannelp_img from '../assets/img/main/omnichannelp_img.png';
import knowledge_img from '../assets/img/main/knowledge_img.png';
import our_platform_is_domain_agnostic1 from '../assets/img/main/our_platform_is_domain_agnostic1.png';
import platform_img3 from '../assets/img/main/platform_img3.png';
import media1 from '../assets/img/main/media1.png';
import travel from '../assets/img/main/travel.png';
import education1 from '../assets/img/main/education1.png';
import industry_bg1 from '../assets/img/main/industry_bg.png';

import * as $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

  var banner_bg1 = {
	// backgroundImage: `url(${home_banner})`
	// background:"#00023E"
  };
  var home_banner = {
	backgroundImage: `url(${home_bg})`,
	height:"100%",
	width:"100%",

  };
  var industry_bg = {
    backgroundImage: `url(${industry_bg1})`
  };

class Home extends Component {

	state1= {
        responsive:{
            0: {
				items: 1,
				stagePadding:0,
				autoplay: true,
  autoplayHoverPause: true,
  navText: [
	'<i class="fa fa-angle-left" aria-hidden="true"></i>',
	'<i class="fa fa-angle-right" aria-hidden="true"></i>'
],
            },
            450: {
                items: 1,
            },
            600: {
				items: 1,
				
            },
            1000: {
				items: 2,
				autoplay: false,
  autoplayHoverPause: false,
  navText: [
	'<i class="fa fa-angle-left" aria-hidden="true"></i>',
	'<i class="fa fa-angle-right" aria-hidden="true"></i>'
],
            },
		},
		// nav:true,
	
	}
	state= {
        responsive:{
            0: {
				items: 1,
				stagePadding:0,
				navText: [
					'<i class="fa fa-angle-left" aria-hidden="true"></i>',
					'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
				
            },
            450: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
		},
		autoHeight : true,
    transitionStyle:"fade"
    }

    componentDidMount() {
        $('.scroll-down').click( function(){
            $('html,body').animate({scrollTop: $("#approach").offset().top-100},'slow');
        });  
        $('.left-arrow').click(function(){
          if($(".rotateslider-item").hasClass("prev")){
              setTimeout(function(){
                  $(".rotateslider-container .rotateslider-item.prev").css(
                  { 
                      "transistion": "1s",
                      "background":"-webkit-linear-gradient(left, #1890ED, #FFFFFF)",
                      "background":"-moz-linear-gradient(left, #1890ED, #FFFFFF)",
                      "background":"linear-gradient(to right, #1890ED, #FFFFFF)"
                  }
                  );
              }, 200);
          }
          if($(".rotateslider-item").hasClass("now")){
              setTimeout(function(){
              $(".rotateslider-container .rotateslider-item.now").css("background","white");
          }, 300);
          }
          if($(".rotateslider-item").hasClass("next")){
              setTimeout(function(){
                  $(".rotateslider-container .rotateslider-item.next").css(
                  { 
                      "transistion": "1s",
                      "background":"-webkit-linear-gradient(right, #1890ED, #FFFFFF)",
                      "background":"-moz-linear-gradient(right, #1890ED, #FFFFFF)",
                      "background":"linear-gradient(to left, #1890ED, #FFFFFF)"
                    
                  }
                  );
              }, 200);
          }
      });
  
      $('.right-arrow').click(function(){
          if($(".rotateslider-item").hasClass("prev")){
              setTimeout(function(){
                  $(".rotateslider-container .rotateslider-item.prev").css(
                  { 
                      "transistion": "1s",
                      "background":"-webkit-linear-gradient(left, #1890ED, #FFFFFF)",
                      "background":"-moz-linear-gradient(left, #1890ED, #FFFFFF)",
                      "background":"linear-gradient(to right, #1890ED, #FFFFFF)"
                  }
                  );
              }, 200);
          }
          if($(".rotateslider-item").hasClass("now")){
              setTimeout(function(){
                  $(".rotateslider-container .rotateslider-item.now").css("background","white");
              }, 300);
          }
          if($(".rotateslider-item").hasClass("next")){
              setTimeout(function(){
                  $(".rotateslider-container .rotateslider-item.next").css(
                  { 
                      "transistion": "1s",
                      "background":"-webkit-linear-gradient(right, #1890ED, #FFFFFF)",
                      "background":"-moz-linear-gradient(right, #1890ED, #FFFFFF)",
                      "background":"linear-gradient(to left, #1890ED, #FFFFFF)"
                    
                  }
                  );
              }, 200);
          }
      });
  
  
        /*
* Teletype jQuery Plugin
* @version 0.1.6
*
* @author Steve Whiteley
* @see http://teletype.rocks
* @see https://github.com/stvwhtly/jquery-teletype-plugin
*
* Copyright (c) 2015 Steve Whiteley
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
( function ( $ ) {
	$.fn.teletype = function( options ) {
		var settings = $.extend( {}, $.fn.teletype.defaults, options );
		var object = this,
			self = $( this ),
			output = null,
			current = { 
				string: '',
				index: 0,
				position: 0,
				loop: 0
			};
		var next = function() {
			current.index++;
			if ( current.index >= settings.text.length ) {
				current.index = 0;
				current.loop++;
				if ( settings.loop !== false && ( settings.loop == current.loop ) ) {
					return false;
				}
			}
			current.position = 0;
			setCurrentString();
			if ( typeof( settings.callbackNext ) == 'function' ) {
				settings.callbackNext( current, object );
			}
			return true;
		};
		var type = function() {
			if ( settings.prefix && current.position === 0 ) {
				if ( current.loop === 0 && current.index === 0 ) {
					$( '<span />' ).addClass( 'teletype-prefix' ).html( settings.prefix ).prependTo( self );
				}
			}
			var letters = current.string.split( '' ),
				letter = letters[current.position],
				start = current.position + 1;
			if ( letter == '^' || letter == '~' ) {
				var end = current.string.substr( start ).search( /[^0-9]/ );
				if ( end == -1 ) {
					end = current.string.length;
				}
				var value = current.string.substr( start, end );
				if ( $.isNumeric( value ) ) {
					current.string = current.string.replace( letter + value, '' );
					if ( letter == '^' ) {
						window.setTimeout( function() {
							window.setTimeout( type, delay( settings.typeDelay ) );
						}, value );
					} else {
						var index = current.position - value;
						current.string = current.string.substr( 0, index - 1 ) + current.string.substr( current.position - 1 );
						window.setTimeout( function() {
							backspace( Math.max( index, 0 ) );
						}, delay( settings.backDelay ) );
					}
					return;
				}
			} else if ( letter == '\\' ) {
				var nextChar = current.string.substr( start, 1 );
				if ( nextChar == 'n' ) {
					current.position++;
					letter = '<br />';
				}
			}
			if ( letter !== undefined ) {
				output.html( output.html() + letter );
			}
			current.position++;
			if ( current.position < current.string.length ) {
				window.setTimeout( type, delay( settings.typeDelay ) );
			} else if ( settings.preserve === false ) {
				window.setTimeout( function() {
					window.setTimeout( backspace, delay( settings.backDelay ) );
				}, settings.delay );
			} else {
				output.html( output.html() + '<span class="teletype-prefix">' + settings.prefix + '</span>' );
				if ( next() ) {
					window.setTimeout( function() {
						window.setTimeout( type, delay( settings.typeDelay ) );
					}, settings.delay );
				} else if ( typeof( settings.callbackFinished ) == 'function' ) {
					settings.callbackFinished( object );
				}
			}
			if ( typeof( settings.callbackType ) == 'function' ) {
				settings.callbackType( letter, current, object );
			}
		};
		var backspace = function( stop ) {
			if ( !stop ) {
				stop = 0;
			}
			if ( current.position > stop ) {
				output.html( output.html().slice( 0, -1 ) );
				window.setTimeout( function() {
					backspace( stop );
				}, delay( settings.backDelay ) );
				current.position--;
			} else {
				if ( stop === 0 ) {
					if ( next() === false ) {
						return;
					}
				}
				window.setTimeout( type, delay( settings.typeDelay ) );
			}
		};
		var delay = function( speed ) {
			var time = parseInt( speed );
			if ( settings.humanise ) {
				time += Math.floor( Math.random() * 200 );
			}
			return time;
		};
		var setCurrentString = function() {
			current.string = settings.text[current.index].replace(/\n/g, "\\n");
		}
		this.setCursor = function( cursor ) {
			$('.teletype-cursor', self).text( cursor );
		};
		return this.each( function() {
			setCurrentString();
			self.addClass( 'teletype' ).empty();
			output = $( '<span />' ).addClass( 'teletype-text' ).appendTo( self );
			if ( settings.cursor ) {
				var cursor = $( '<span />' )
					.addClass( 'teletype-cursor' )
					.appendTo( self );
				object.setCursor( settings.cursor );
				setInterval ( function() {
                  if ( settings.smoothBlink ) {
				    cursor.animate( { opacity: 0 } ).animate( { opacity: 1 } );
			      } else {
                      cursor.delay(500).fadeTo(0,0).delay(500).fadeTo(0,1);
                  }
				}, settings.blinkSpeed );
			}
			type();
		} );
	};
	$.fn.teletype.defaults = {
		text: [ 'one', 'two', 'three' ],
		typeDelay: 100,
		backDelay: 50,
		blinkSpeed: 1000,
		delay: 2000,
		cursor: '|',
		preserve: false,
		prefix: '',
		loop: 0,
		humanise: true,
		smoothBlink: true,
		callbackNext: null,
		callbackType: null,
		callbackFinished: null
	};
}( $ ) );

        $(document).ready(function() {
            
            $( '.type-text' ).each( function() {
                var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
                $( this ).empty().attr( 'title', '' ).teletype( {
                  text: $.map( items.split( ';' ), $.trim ),
                  typeDelay: 2, // Minimum delay, in ms, between typing characters.
                  backDelay: 2, // Minimum delay, in ms, between deleting characters.
                  blinkSpeed: 100, // Interval, in ms, that the cursor will flash.
                  delay: 100, // Time in ms to pause before deleting the current text.
                  preserve: false, // Prevent auto delete of the current string and begin outputting the next string.
                  loop: 0, // Number of times to loop through the output strings, for unlimited use 0.
                  humanise: true, // Add a random delay before each character to represent human interaction.
                  smoothBlink: true, // Set the curser to a solid blink or smooth blink effect.
                  callbackNext: null,
                  callbackType: null,
                  callbackFinished: null
                });
                });
        
        });
       
     // navigation on click //
    // js
   

	
      }
  render() {

    return (
        <div className="animate-sec">
<div style={home_banner} class="home_bg">
<div class="container banner_cntainer banner_text">
<div className="row">
    <div className="col-lg-5 col-md-5 col-xs-12 pl-0">
    <img src={banner_img} alt="Deepforge-Ai" className="banner_image img-fluid"/>
    </div>
    <div className="col-lg-7 col-md-7 col-xs-12 header_text banner_bg">
    <h1 class="rw-words-1">
   <span class="first-line">We live on the <br className="br1"></br> digital frontline&nbsp;
            
    <span class="type-text fbold" title="enabling^1000; adopting^2000; accelerating^2000; ">
    </span>
    <br></br>  <span class="text2">AI-led technology shifts.</span> 
    </span>    
    
</h1>

<p class="scrollDown">Learn more about our services and how we can help jumpstart your AI journey.</p>
<div class="">
    <Link to="/contact-us"><button class="transistion secondary_btn">We Are Ready – Let’s Talk!</button></Link>
</div>
{/* <div style={home_banner} className="home_banner"></div> */}
    </div>
</div>



<div class="scroll-down">
<span></span>
</div>
</div>
 
</div>
{/* services */}
<div id="approach"></div>
<div class="navigate sr-active"></div>
<div class="section_padding services">
<div class="container-fluid">
        <div class="common_head text-center">
    <h3>Transform your Traditional Messaging into Conversational Experiences.</h3>
    <p class="text2">Customers talk with your brand using Deepforge AI powered conversational digital agents. No boring menus 
 <br></br> or multiple-choice hoops to jump through. No hassle, just the answer the customers are looking for.</p>
</div>
<h4 className="platform_text text-center">Approach </h4>
<div className="section_head text-center">
<h2>The way we drive the journey of your AI adoption.</h2>
{/* <p>Lorem ipsum is placeholder text commonly used</p> */}
</div>


</div>
{/* services tabs */}
<div className="container section_container">
	<div class="d-none d-sm-none d-md-block">
		<div class="row services_row">
			<div class="col-lg-3 col-xs-12 p-0">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Discover<p>We discuss-understand-analyze your business to work on ideas that accomplish the goal you desire. </p></a>
						<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Design<p>We design a bespoke solution to serve your bespoke business needs.</p></a>
						<a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Develop<p>We transform the design into reality with whatever it takes technically.</p></a>
						<a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Distribute<p>We test, deploy, maintain, and improve the developed design.</p></a>
					</div>
				</nav>
                </div>
                <div class="col-lg-9">
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
						<div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-12">
                                <img src={discover_tab_img} alt="discover" className="img_fluid"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12">
                           <div className="tabs_text">
                           <p>For Conversational AI enablement to be successful, it should be a factor in enterprise readiness and follow a rigorous discovery process that validates business logic. We identify and prioritize integration opportunities to match the ability and willingness to transition to an AI-powered enterprise driving engaging customer conversations.	
</p>
                           <Link to="/approach/discover">
						   <button className="primary_btn btn_text">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div>
					</div>
					<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
					<div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-12">
                                <img src={design_tab_img} alt="design" className="img_fluid"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12">
                           <div className="tabs_text">
                           <p>With all the preliminary legwork done, our world-class design team takes off with some insights into crafting a Conversational AI experience that’s a pleasure to engage with. Extraordinary design in digital ingenuity is crucial and will ultimately help you to exceed your customer expectations.
</p>
                           <Link to="/approach/design">
						   <button className="primary_btn btn_text">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div>
					</div>
					<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
					<div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-12">
                                <img src={develope_tab_img} alt="develop" className="img_fluid"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12">
                           <div className="tabs_text">
                           <p>Transforming your design into reality. From a simple informational chatbot or voiceBot to a more advanced bot requiring ‘Natural Language Processing’ and complex integrations, we develop the CDA's which are both simple to use and nimble in nature no matter how complex or custom the requirements are.
</p>
						   <Link to="/approach/develop">
						   <button className="primary_btn btn_text">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div>
					</div>
					<div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
					<div className="row">
                            <div className="col-lg-5 col-md-5 col-xs-12">
                                <img src={distribute_tab_img} alt="distribute" className="img_fluid"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12">
                           <div className="tabs_text">
                           <p>Bringing the conversational digital agent to life, enhance your brand value by engaging with your customers effectively and in real-time on any digital channel. It’s time to train, test, deploy, and maintain your conversational agents. Considering “Change is only Constant,” the conversational agents will always be in tweak-train-test-track mode.
</p>
                           <Link to="/approach/distribute">
						   <button className="primary_btn btn_text">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div>
					</div>
				</div>
			
			</div>
		</div>
		</div>
		<div className="services_row d-block d-sm-block d-md-none m-0 mt-3 carousal_res">
		<OwlCarousel className="owl-theme platform_carousel" stagePadding={0} nav={true} margin={0} autoHeight={true} loop={true} responsive={this.state.responsive} > 
<div className={'item'}>
	<div class="nav-tabs">
<a class="nav-item nav-link active p-0" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Discover<p>We discuss-understand-analyze your business to work on ideas that accomplish the goal you desire. 
</p></a>
</div>
<div class="tab-content">
					
						<div className="row mt-3">
                            <div className="col-lg-5 col-md-5 col-xs-12 p-0">
                                <img src={discover_tab_img} alt="Deepforge-Ai" className="img_fluid mt-0"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12 p-0">
                           <div className="tabs_text pl-0">
                           <p>For Conversational AI enablement to be successful, it should be a factor in enterprise readiness and follow a rigorous discovery process that validates business logic. We identify and prioritize integration opportunities to match the ability and willingness to transition to an AI-powered enterprise driving engaging customer conversations.	 </p>
                           <Link to="/approach/discover" class="">
						   <button className="primary_btn btn_text d-flex align-items-center mb-4">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div>
						</div>
	</div>
	<div className={'item'}>
	<div class="nav-tabs">
	<a class="nav-item nav-link active p-0" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Design<p>We design a bespoke solution to serve your bespoke business needs. </p></a>
						
</div><div class="tab-content">
	<div className="row mt-3">
                            <div className="col-lg-5 col-md-5 col-xs-12 p-0">
                                <img src={design_tab_img} alt="Deepforge-Ai" className="img_fluid mt-0"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12 p-0">
                           <div className="tabs_text pl-0">
                           <p>With all the preliminary legwork done, our world-class design team takes off with some insights into crafting a Conversational AI experience that’s a pleasure to engage with. Extraordinary design in digital ingenuity is crucial and will ultimately help you to exceed your customer expectations.</p>
                           <Link to="/approach/design">
						   <button className="primary_btn btn_text d-flex align-items-center mb-4">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div></div>
	</div>
	<div className={'item'}>
	<div class="nav-tabs">
	<a class="nav-item nav-link active p-0" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Develop<p> We transform the design into reality with whatever it takes technically.
</p></a>
</div>
<div class="tab-content">
	<div className="row mt-3">
                            <div className="col-lg-5 col-md-5 col-xs-12 p-0">
                                <img src={develope_tab_img} alt="Deepforge-Ai" className="img_fluid mt-0"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12 p-0">
                           <div className="tabs_text pl-0">
                           <p>Transforming your design into reality. From a simple informational chatbot or voiceBot to a more advanced bot requiring ‘Natural Language Processing’ and complex integrations, we develop the CDA's which are both simple to use and nimble in nature no matter how complex or custom the requirements are.
</p>
						   <Link to="/approach/develop">
						   <button className="primary_btn btn_text d-flex align-items-center mb-4">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div></div>
	</div>
	<div className={'item'}>
	<div class="nav-tabs">
	<a class="nav-item nav-link active p-0" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Distribute<p>We test, deploy, maintain, and improve the developed design. 
</p></a>
</div><div class="tab-content">
	<div className="row mt-3">
                            <div className="col-lg-5 col-md-5 col-xs-12 p-0">
                                <img src={distribute_tab_img} alt="Deepforge-Ai" className="img_fluid mt-0"/>
                            </div>
                            <div className="col-lg-7 col-md-7 col-xs-12 p-0">
                           <div className="tabs_text pl-0">
                           <p>Bringing the conversational digital agent to life, enhance your brand value by engaging with your customers effectively and in real-time on any digital channel. It’s time to train, test, deploy, and maintain your conversational agents. Considering “Change is only Constant,” the conversational agents will always be in tweak-train-test-track mode.
</p>
                           <Link to="/approach/distribute">
						   <button className="primary_btn btn_text d-flex align-items-center mb-4">Know More</button>
						   </Link>
                           </div>
                            </div>
                        </div></div>
	</div>
	</OwlCarousel>
	{/* <div class="owl-theme">
        <div class="owl-controls">
            <div class="custom-nav owl-nav"></div>
        </div>
    </div> */}
		</div>
</div>
</div>
{/* platform starts */}
<div id="capabilities" class="pl-active"></div>
<div className="section_padding platform">
<div className="container section_container pr-0 carousal_res platform_res">
<h4 className="platform_text">Capabilities </h4>
<div className="section_head">
<h2>We build anything that is possible through<br></br> Conversational AI.</h2>
{/* <p>Lorem ipsum is placeholder text commonly used</p> */}
</div>
<OwlCarousel items={2} stagePadding={200}  className="owl-theme platform_carousel platform_web" nav={true} loop={true} margin={40} dots={true} responsive={this.state1.responsive} > 
<div className={'item'}>
		<img src={omnichannelp_img} alt="our-platform-is-omnichannel"/>
		<div className="card_body">
			<div className="card_body1">
		<h5>We Build Omnichannel Experiences</h5>
		<p>We can deploy our digital agents on any channel, any device, any platform where your customers are there. One-click channel integrations make digital agents easy to use and maintain.
</p>
</div>
		<Link to="/capabilities/we-build-omnichannel-experiences"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
		</div>
</div>
<div className={'item'}>
<img src={knowledge_img} alt="deep-vertical-domain-knowledge"/>
		<div className="card_body">
		<div className="card_body1">
		<h5>We Possess In-depth Vertical Domain Knowledge</h5>
		<p>With pre-built industry AI models and domain knowledge built by our experts, the time-to-market for our digital agents is far shorter than the standard industry time-to-market timeline. The ability to add more domain knowledge on the go makes these industry AI models even more powerful.
</p>
</div>
		<Link to="/capabilities/deep-vertical-domain-knowledge"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
		</div>
		</div>
<div className={'item'}>
<img src={platform_img3} alt="platform-with-robust-feature"/>
		<div className="card_body">
		<div className="card_body1">
		<h5>We Deliver Robust Experiences</h5>
		<p>We build digital agents with robust features to support complexity with excellent customer engagement and experience always delivered.
</p>
</div>
		<Link to="/capabilities/we-give-robust-experiences"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
		</div>
		</div>
<div className={'item'}>
<img src={our_platform_is_domain_agnostic1} alt="our-platform-is-domain-agnostic"/>
		<div className="card_body">
		<div className="card_body1">
		<h5>We Develop and Deliver Agnostic Experiences</h5>
		<p>We build agents that are domain-agnostic, continuously improving as we scale across different application domains. Our Conversational Digital Agents can be developed and deployed seamlessly across multiple industry verticals and horizontals.
</p>
</div>
		<Link to="/capabilities/we-develop-and-deliver-agnostic-experiences"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
		</div>
		</div>
		
</OwlCarousel>
</div>
</div>
<div id="usecases"></div>
<div class="uc-active"></div>
{/* usecases section */}
<div className="section_padding usecases">
<div className="container usecase_container">
<h4 className="platform_text text-center">Use Cases</h4>
<div className="section_head text-center">
<h2>You name it, We build it.
</h2>
<p>With our implementation expertise, you can deploy fully featured, automated customer engagement experiences for a plethora of business domains.
</p>
</div>
<div class="d-none d-sm-none d-md-block">
<div className="row usecase_row">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={media1} alt="media-and-entertainment" className="usecase_img"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Media and Entertainment</h5>
	<p>AI powered digital agents are gaining widespread adoption in the media and entertainment industry. AI assistants help brands reach a larger audience and engage better by being able to deliver personalized content to targeted audiences at a minimal cost, which is a high RoI driven case for the industry.
</p>
	<div className="d-flex align-items-center"><Link to="/usecases/media-and-entertainment"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
	<Link to="/industry-use-cases" className="platform_btn see_all">See All Use Cases</Link>
	</div>
	
</div>
	</div>
</div>
<div className="row usecase_row">
	<div className="col-lg-7 col-md-7 col-xs-12">
	<div className="usecase_text">
	<h5>Travel and Hospitality</h5>
	<p> Travel and hospitality companies can intensify customer connect and engagement using AI-powered conversational interfaces. They can deploy bots to automate, and personalize discovery, booking, reviews, payment, feedback and support processes.
</p>
	<div className="d-flex align-items-center"><Link to="/usecases/travel-and-hospitality"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
	<Link to="/industry-use-cases" className="platform_btn see_all">See All Use Cases</Link>
	</div>
</div>
	</div>
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<img src={travel} alt="travel-and-hospitality" className="usecase_img"/>
	</div>
</div>
<div className="row usecase_row">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={education1} alt="education" className="usecase_img"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Education</h5>
	<p>Conversational AI is quickly changing education and eLearning by bringing constructive change to the learning process and make it more efficient.<br></br>
AI assistants help students and parents be more organized by improving communications with the educational institutions and help newcomers with onboarding and being campus guides while extending 24X7 support to staff and students alike.</p>
<div className="d-flex align-items-center"><Link to="/usecases/education"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
	<Link to="/industry-use-cases" className="platform_btn see_all">See All Use Cases</Link>
	</div>
</div>
	</div>
</div>
</div>
<div class="d-block d-sm-block d-md-none carousal_res usecase_res">
<OwlCarousel className="owl-theme platform_carousel" stagePadding={0} margin={0} nav={true} autoHeight={true} loop={true} responsive={this.state.responsive} > 
<div className={'item'}>
<div className="row usecase_row">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={media1} alt="Deepforge-Ai" className="usecase_img"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Media and Entertainment</h5>
	<p>AI powered digital agents are gaining widespread adoption in the media and entertainment industry. AI assistants help brands reach a larger audience and engage better by being able to deliver personalized content to targeted audiences at a very little cost which is a high RoI driven case for the industry.
</p>
	<div className="d-flex align-items-center"><Link to="/usecases/media-and-entertainment"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
	<Link to="/industry-use-cases" className="platform_btn see_all">See All Use Cases</Link>
	</div>
</div>
	</div>
</div>
</div>
<div className={'item'}>
<div className="row usecase_row">
<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
	<img src={travel} alt="Deepforge-Ai" className="usecase_img"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
	<div className="usecase_text">
	<h5>Travel and Hospitality</h5>
	<p> Travel and hospitality companies can intensify customer connect and engagement using AI-powered conversational interfaces. They can deploy bots to automate, and personalize discovery, booking, reviews, payment, feedback and support processes.</p>
	<div className="d-flex align-items-center mb-3"><Link to="/usecases/travel-and-hospitality"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
	<Link to="/industry-use-cases" className="platform_btn see_all">See All Use Cases</Link>
	</div>
</div>
	</div>
	
</div>
</div>
<div className={'item'}>
<div className="row usecase_row">
	<div className="col-lg-5 col-md-5 col-xs-12 usecase_col">
<img src={education1} alt="Deepforge-Ai" className="usecase_img"/>
	</div>
	<div className="col-lg-7 col-md-7 col-xs-12">
<div className="usecase_text">
	<h5>Education</h5>
	<p>Conversational AI is quickly changing education and eLearning by bringing constructive change to the learning process and make it more efficient.<br></br>
AI assistants help students and parents be more organized by improving communications with the educational institutions and help newcomers with onboarding and being campus guides while extending 24X7 support to staff and students alike.</p>
<div className="d-flex align-items-center mb-3"><Link to="/usecases/education"><button className="primary_btn d-flex align-items-center platform_btn">Know More</button></Link>
	<Link to="/industry-use-cases" className="platform_btn see_all">See All Use Cases</Link>
	</div>
</div>
	</div>
</div>
</div>
</OwlCarousel>
</div>
</div>
<div className="uc-inactive"></div>
</div>

{/* industry */}
<div className="section_padding industry" style={industry_bg}>
<div className="container section_container">
<div className="row">
	<div className="col-lg-7 col-xs-12 pl-0">
	<div className="section_head industry_head">
<h2>We work in partnership with leading industry technology and service providers.</h2>
{/* <p>AI powered digital agents are gaining are gaining widespread adoption in the media and entertainment industry. AI assistants help brands reach a larger audience and engage</p> */}
</div>
	</div>
</div>
<div className="industry_btns">
<Link to="/partners"><button className="primary_btn d-flex align-items-center platform_btn">Become a Partner</button></Link>
{/* <Link to="/partner"><button className="primary_btn d-flex align-items-center platform_btn industry_btn ">Let’s Talk Partnerships</button></Link> */}

</div>
</div>
</div>
{/* maps */}
<div>
<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=1-65%2F15%2C%20G.Begumpet%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%2C%20India.%20500081&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a></div></div>
</div>
</div>
     
    );
  }
}

export default Home;
