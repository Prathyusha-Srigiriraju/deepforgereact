import React, { Component } from 'react';


import Route from 'react-router-dom/Route';

import { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';

// import Home from './Components/Home';

import menu from './assets/img/main/menu.svg';
import conversation from './assets/img/main/conversation.svg';
import footer_bg from './assets/img/main/footer_bg.png';
import footer_logo from './assets/img/main/footer_logo.png';
import linkedin_button from './assets/img/main/linkedin_button.svg';
import facebook_logobutton from './assets/img/main/facebook_logobutton.svg';
import twitter_logobutton from './assets/img/main/twitter_logobutton.svg';
import location from './assets/img/main/location.svg';
import mail from './assets/img/main/mail.svg';
 
import { BrowserRouter as Router , Switch} from 'react-router-dom'
// import * as $ from 'jquery';

import ScrollToTop from './Components/ScrollToTop';

import notfound from './Components/notfound';

import {Helmet} from "react-helmet";
import { withRouter } from 'react-router'

import { Link} from 'react-router-dom'
import * as $ from 'jquery';
const Home = React.lazy(() => import('./Components/Home'));
const about = React.lazy(() => import('./Components/about'));
const contact = React.lazy(() => import('./Components/contact'));
const design = React.lazy(() => import('./Components/design'));
const develop = React.lazy(() => import('./Components/develop'));
const distribute = React.lazy(() => import('./Components/distribute'));
const discover = React.lazy(() => import('./Components/discover'));
const our_platform_is_omnichannel = React.lazy(() => import('./Components/our_platform_is_omnichannel'));
const our_platform_is_domain_agnostic = React.lazy(() => import('./Components/our_platform_is_domain_agnostic'));
const deep_vertical_domain_knowledge = React.lazy(() => import('./Components/deep_vertical_domain_knowledge'));
const platform_with_robust_features = React.lazy(() => import('./Components/platform_with_robust_features'));
const privacypolicy = React.lazy(() => import('./Components/privacypolicy'));
const mediaandentertainment = React.lazy(() => import('./Components/mediaandentertainment'));
const travelandhospitality = React.lazy(() => import('./Components/travelandhospitality'));
const real_estate = React.lazy(() => import('./Components/real_estate'));
const retailandecommerce = React.lazy(() => import('./Components/retailandecommerce'));
const education_usecase = React.lazy(() => import('./Components/education_usecase'));
const healthcare = React.lazy(() => import('./Components/healthcare'));
const financial_services = React.lazy(() => import('./Components/financial_services'));
const allusecases = React.lazy(() => import('./Components/allusecases'));
const partner = React.lazy(() => import('./Components/partner'));
const what_we_do = React.lazy(() => import('./Components/what_we_do'));
const terms = React.lazy(() => import('./Components/terms'));



var  footer_bg1= {
  backgroundImage: `url(${footer_bg})`
};
class App extends Component {
  
  constructor(props){
    super(props);
   
    this.state = {
      getintouchText : "Talk to us now!",
      changeNavigation : false,
     
  }
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location ) => {
      // console.log(location.action)
   
      if(location.pathname === "/"){
        this.setState({ changeNavigation:  false  });
      //  console.log(this.state.changeNavigation)
      
      }
      if(location.pathname !== "/"){
        $(".header_nav a:nth-child(1), .header_nav a:nth-child(2) , .header_nav a:nth-child(3)").removeClass("active");
        this.setState({ changeNavigation:  true  });
        //console.log(this.state.changeNavigation)
      }
    

    });
  }
  componentWillUnmount() {
      this.unlisten();
  }

  componentDidMount() {
  

      if(this.props.history.location.pathname === "/"){
        this.setState({ changeNavigation:  false  });
        //console.log(this.state.changeNavigation,"reload")
      }
      if(this.props.history.location.pathname !== "/"){
    
        this.setState({ changeNavigation:  true  });
        //console.log(this.state.changeNavigation,"reload")
      }

      // navigation on click //
    // js
   

$(window).scroll(function () {
    showHeader();
      
});

function showHeader() { 
    var sticky = $('header'),
    scroll = $(window).scrollTop();
if (scroll >= 1) {
    $(".logo").addClass("logoleft");
    $(".logo2").addClass("logoleft");
    $(".dropnav").addClass("navright");
    sticky.addClass('fixedbg');
}
else {
    $(".logo").removeClass("logoleft");
    $(".dropnav").removeClass("navright");
    sticky.removeClass('fixedbg');
}
}


$(document).ready(function() {
    


 

    showHeader();

    $(".logo-transform").attr("transform","translate(15204.166 4779.416)"); 

    setTimeout(function () {
        $(".sideLogo").css({"opacity":"1","transistion":"1s"}); 
}, 1000);


    $('.scrollTop').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
    });

   
    $(document).on('click', 'a[href^="#approach"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-80
        }, 1000);
    });
    $(document).on('click', 'a[href^="#usecases"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-80
        }, 1000);
    });
    
    $(document).on('click', 'a[href^="#capabilities"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-80
        }, 1000);
    });

    $('.scroll-downs').click( function(){
        $('html,body').animate({scrollTop: $("#approach").offset().top},'slow');
    });  

    // $('.nav-tabs').click( function(){
    //     $('html,body').animate({scrollTop: $(".d-h-sec2 .text2").offset().top},'slow');
    // });  

    
/** mobile menu */

if ($(window).width() < 991) {
  $('.navbar-toggler1').click(function(){
     $("#navbarSupportedContent").addClass("menu")
   });
   $('.closebtn').click(function(){
       $('header').css( "z-index","99");
     $("#navbarSupportedContent").removeClass("menu")
   });
   $('.nav-link').click(function(){
     $('header').css( "z-index","99");
     $("#navbarSupportedContent").removeClass("menu")
   });
   $('.dropdown-item').click(function(){
    $('header').css( "z-index","99");
    $("#navbarSupportedContent").removeClass("menu")
  });
   $('.navbar-toggler1').click(function(){
     $("#navbarSupportedContent").removeClass("header")
   });
}
if ($(window).width() > 991) {

  $('body').on('mouseenter mouseleave','.dropdown-hover',function(e){
    let dropdown=$(e.target).closest('.dropdown-hover');
     dropdown.addClass('show');
     
   setTimeout(function(){
         dropdown[dropdown.is(':hover')?'addClass':'removeClass']('show');
         $('.dropdown-item').click(function(){
          $(".dropdown-menu").removeClass("show")
          //console.log("hhhhh")
        });
     },300);
  });
};

$(window).scroll(function () {

  // showHeader();
  $('.sr-active').each( function(){
   
    var imagePos = $(this).offset().top-80;
    var topOfWindow = $(window).scrollTop();
    if ( topOfWindow  >= imagePos ) {   
       $(".header_nav li:nth-child(2) a").addClass("active");
    }
    else{
      $(".header_nav li:nth-child(2) a").removeClass("active");
    }
  }); 

  // $('.pl-active').each( function(){
  //   var imagePos = $(this).offset().top-80;
  //   var topOfWindow = $(window).scrollTop();
  //   if ( topOfWindow  >= imagePos ) {
  //     $(".header_nav li:nth-child(2) a").removeClass("active");
  //     $(".header_nav li:nth-child(3) a").addClass("active");
  //   }
  //   else{   
  //     $(".header_nav li:nth-child(3) a").removeClass("active");
  //   }
  // }); 

  $('.uc-active').each( function(){
    var imagePos = $(this).offset().top-100;
    var topOfWindow = $(window).scrollTop();
    if ( topOfWindow  >= imagePos ) {
       $(".header_nav li:nth-child(2) a").removeClass("active");
       $(".header_nav li:nth-child(5) a").addClass("active");
    }
    else{
      $(".header_nav li:nth-child(5) a").removeClass("active");
    }
  });  
  $('.uc-inactive').each( function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if ( topOfWindow  >= imagePos ) {
      $(".header_nav li:nth-child(5) a").removeClass("active");
    }
  
  });   
});

 });
  }
  



  render() {

   
    
    return (  
 
      <ScrollToTop>
       
      <div className="App">

      <Helmet>
     
      <title> Deepforge AI - Conversational AI for Enterprises | Intelligent Digital Agents </title>

      <meta charSet="utf-8" />
      <meta name="description" content="A React.js application" />
       <meta property="og:locale" content="en_US"/> 
       <meta property="og:type" content="website"/> 
    

      {/* <meta name="p:domain_verify" content="1b4c9393f15822dea1e7fcc0843b1a19"/> 
      <meta property="og:url" content="https://nuacem.com/"/>
      <meta property="og:site_name" content="Nuacem AI"/>  */}
    </Helmet>

        <div>
            {this.state.changeNavigation == false? 
  <header class="transistion header1">
  <div class="container logo-container transistion">
  <nav class="navbar navbar-expand-lg p-0">
  <NavLink to="/" className="navbar-brand p-0 logo scrollTop"><svg class="header_logo" xmlns="http://www.w3.org/2000/svg" width="255.58" height="36.535" viewBox="0 0 255.58 36.535"><defs></defs><g transform="translate(-15136 -4778)"><path class="a sideLogo" d="M26.791,33.814V29.048a2.685,2.685,0,1,1,5.369,0v4.766a2.685,2.685,0,1,1-5.369,0ZM35.5,29.048a2.685,2.685,0,1,1,2.685,2.721A2.7,2.7,0,0,1,35.5,29.048ZM16.606,22.993a2.721,2.721,0,0,1,0-5.442H42.274a2.721,2.721,0,0,1,0,5.442ZM2.685,14.217a2.721,2.721,0,0,1,0-5.442h44.99a2.721,2.721,0,0,1,0,5.442Zm5.4-8.776A2.7,2.7,0,0,1,5.4,2.721,2.7,2.7,0,0,1,8.08,0H42.274a2.7,2.7,0,0,1,2.685,2.721,2.7,2.7,0,0,1-2.685,2.721Z" transform="translate(15136 4778)"/><g class="logo-transform" transform="translate(15137.166 4779.416)"><path class="b" d="M-197.7,2924.16h-6.786a.328.328,0,0,0-.328.328v21.688a.328.328,0,0,0,.328.328h6.786c7.691,0,12.22-4.135,12.22-11.187S-190.065,2924.16-197.7,2924.16Zm-.152,18.118h-1.983a.328.328,0,0,1-.328-.328v-13.207a.328.328,0,0,1,.328-.328h1.983c5.015,0,7.66,2.523,7.66,6.932C-190.187,2939.725-192.8,2942.278-197.848,2942.278Z" transform="translate(204.81 -2923.4)"/><path class="b" d="M-39.049,2974.66c-4.59,0-7.751,3.435-7.751,8.057a7.555,7.555,0,0,0,7.935,7.965,8.037,8.037,0,0,0,6.3-2.5.329.329,0,0,0-.031-.48l-2.547-2.068a.332.332,0,0,0-.457.042A4.166,4.166,0,0,1-38.775,2987c-2.075,0-3.273-.983-3.494-2.725a.33.33,0,0,1,.325-.375H-32.2a.328.328,0,0,0,.328-.328v-1.1C-31.874,2978.247-34.215,2974.66-39.049,2974.66Zm2.413,6.415h-5.3a.326.326,0,0,1-.325-.367,2.968,2.968,0,0,1,3.065-2.673,2.8,2.8,0,0,1,2.891,2.679A.327.327,0,0,1-36.636,2981.075Z" transform="translate(67.533 -2967.274)"/><path class="b" d="M88.141,2974.66c-4.59,0-7.751,3.435-7.751,8.057a7.555,7.555,0,0,0,7.933,7.965,8.038,8.038,0,0,0,6.3-2.5.33.33,0,0,0-.031-.48l-2.547-2.068a.332.332,0,0,0-.457.042A4.166,4.166,0,0,1,88.415,2987c-2.075,0-3.273-.983-3.494-2.725a.33.33,0,0,1,.325-.375h9.741a.328.328,0,0,0,.328-.328v-1.1C95.316,2978.247,92.975,2974.66,88.141,2974.66Zm2.413,6.415h-5.3a.326.326,0,0,1-.325-.367,2.968,2.968,0,0,1,3.065-2.673,2.8,2.8,0,0,1,2.891,2.679A.327.327,0,0,1,90.554,2981.075Z" transform="translate(-42.967 -2967.274)"/><path class="b" d="M223.285,2974.66a5.467,5.467,0,0,0-4.337,1.792.131.131,0,0,1-.231-.067l-.139-1.132a.328.328,0,0,0-.325-.289h-3.395a.328.328,0,0,0-.328.328v21.748a.327.327,0,0,0,.328.328h3.812a.327.327,0,0,0,.328-.328V2989.3a.131.131,0,0,1,.224-.092,5.609,5.609,0,0,0,4.062,1.469c4.1,0,6.87-3.375,6.87-7.995S227.389,2974.66,223.285,2974.66Zm-1.094,12.13h-.046a3.2,3.2,0,0,1-3.147-3.217v-1.806a3.2,3.2,0,0,1,3.026-3.212l.167,0c2.036,0,3.465,1.581,3.465,4.135C225.656,2985.208,224.227,2986.789,222.19,2986.789Z" transform="translate(-159.506 -2967.274)"/><path class="b" d="M353.385,2919.185a6.325,6.325,0,0,0-3.318-.815c-3.8,0-6.141,2.644-6.141,6.354v1.009a.328.328,0,0,1-.328.328h-2.019a.328.328,0,0,0-.328.328v3.114a.328.328,0,0,0,.328.328H343.6a.328.328,0,0,1,.328.328v10.987a.328.328,0,0,0,.328.328h3.813a.328.328,0,0,0,.328-.328v-10.987a.328.328,0,0,1,.328-.328h2.809a.328.328,0,0,0,.328-.328v-3.114a.328.328,0,0,0-.328-.328h-2.809a.328.328,0,0,1-.328-.328v-1.253c0-1.367.7-2.219,1.914-2.219a2.68,2.68,0,0,1,1.432.4.325.325,0,0,0,.472-.144l1.3-2.917A.326.326,0,0,0,353.385,2919.185Z" transform="translate(-269.598 -2918.37)"/><path class="b" d="M439,2974.66a8.012,8.012,0,1,0,8.147,8.057A7.836,7.836,0,0,0,439,2974.66Zm0,12.13c-2.067,0-3.587-1.732-3.587-4.073,0-2.371,1.521-4.165,3.587-4.165,2.1,0,3.618,1.793,3.618,4.165C442.614,2985.057,441.095,2986.789,439,2986.789Z" transform="translate(-347.494 -2967.274)"/><path class="b" d="M582.438,2974.737a5.063,5.063,0,0,0-3.9,2.043.131.131,0,0,1-.237-.058l-.189-1.406a.327.327,0,0,0-.325-.285h-3.367a.328.328,0,0,0-.328.328v14.757a.328.328,0,0,0,.328.328h3.813a.328.328,0,0,0,.328-.328v-7.074a3.852,3.852,0,0,1,3.667-3.873l.193,0h.037a.328.328,0,0,0,.328-.328v-3.772A.329.329,0,0,0,582.438,2974.737Z" transform="translate(-471.886 -2967.34)"/><path class="b" d="M661.887,2974.964h-3.395a.329.329,0,0,0-.327.289l-.138,1.126a.131.131,0,0,1-.232.066,5.455,5.455,0,0,0-4.337-1.785c-4.073,0-6.87,3.315-6.87,7.844s2.8,7.843,6.87,7.843a5.543,5.543,0,0,0,4.064-1.463.131.131,0,0,1,.223.093v.853a3.75,3.75,0,0,1-3.952,3.952,5.727,5.727,0,0,1-4.363-2.09.328.328,0,0,0-.471-.008l-2.452,2.454a.328.328,0,0,0-.005.458,9.441,9.441,0,0,0,7.352,3.077c5.047,0,8.361-3.009,8.361-7.935v-14.446A.328.328,0,0,0,661.887,2974.964Zm-4.141,8.273a3.2,3.2,0,0,1-3.028,3.215c-.054,0-.109,0-.164,0-2.036,0-3.435-1.52-3.435-3.951s1.4-3.952,3.435-3.952l.164,0a3.2,3.2,0,0,1,3.028,3.216Z" transform="translate(-534.718 -2967.274)"/><path class="b" d="M794.292,2974.66c-4.591,0-7.752,3.435-7.752,8.057a7.555,7.555,0,0,0,7.935,7.965,8.037,8.037,0,0,0,6.3-2.5.328.328,0,0,0-.031-.48l-2.547-2.068a.33.33,0,0,0-.455.042,4.171,4.171,0,0,1-3.174,1.332c-2.074,0-3.272-.983-3.494-2.725a.33.33,0,0,1,.325-.375h9.741a.328.328,0,0,0,.328-.328v-1.1C801.466,2978.247,799.125,2974.66,794.292,2974.66Zm2.412,6.415h-5.3a.326.326,0,0,1-.325-.367,2.968,2.968,0,0,1,3.065-2.673,2.8,2.8,0,0,1,2.891,2.679A.327.327,0,0,1,796.7,2981.075Z" transform="translate(-656.46 -2967.274)"/><path class="b" d="M1029.6,2943.472l-10.565-22.262h-.13l-10.565,22.262a.328.328,0,0,0,.3.468h4.371a.328.328,0,0,0,.3-.2l1.29-3.064a.327.327,0,0,1,.3-.2h8.137a.328.328,0,0,1,.3.2l1.29,3.064a.327.327,0,0,0,.3.2h4.371A.327.327,0,0,0,1029.6,2943.472Zm-8.3-6.615h-4.665a.328.328,0,0,1-.3-.455l2.333-5.518a.327.327,0,0,1,.6,0l2.333,5.518A.329.329,0,0,1,1021.3,2936.857Z" transform="translate(-849.129 -2920.837)"/><path class="b" d="M1192.354,2924.16h-4a.328.328,0,0,0-.328.328v21.688a.328.328,0,0,0,.328.328h4a.328.328,0,0,0,.328-.328v-21.687A.328.328,0,0,0,1192.354,2924.16Z" transform="translate(-1005.268 -2923.4)"/></g></g></svg></NavLink>
   <div class="navbar-toggler1"><img src={menu} alt="menu"/></div>
  

  <div class="menu-sec" id="navbarSupportedContent">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <ul class="navbar-nav ml-auto header_nav">
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Home</a> */}
      </li>
      <li class="nav-item dropdown dropdown-slide dropdown-hover d-none d-sm-none d-md-block">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Conversational AI <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#approach">Approach</a>
          <a class="dropdown-item" href="#capabilities">Capabilities </a>
        </div>
      </li>
      <li class="nav-item dropdown d-block d-sm-block d-md-none">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Conversational AI <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#approach">Approach</a>
          <a class="dropdown-item" href="#capabilities">Capabilities </a>
        </div>
      </li>

      <li class="nav-item">
      <a class="nav-link" href="/what-we-do"> What We Do </a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#usecases"> Use Cases </a>
      </li >
     
      <li class="nav-item dropdown dropdown-slide dropdown-hover d-none d-sm-none d-md-block">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Company <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/who-we-are">Who We Are</a>
          <a class="dropdown-item" href="/partners">Partners </a>
          <a class="dropdown-item" href="/contact-us">Contact Us</a>
        </div>
      </li>
      <li class="nav-item dropdown d-block d-sm-block d-md-none">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Company <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/who-we-are">Who We Are</a>
          <a class="dropdown-item" href="/partners">Partners </a>
          <a class="dropdown-item" href="/contact-us">Contact Us</a>
        </div>
      </li>
     
     <li class="nav-item my-0">
     <div class="nav-link my-0 border">  </div>
     </li>
     {/* <li class="nav-item">
      <NavLink class="nav-link" to="/"><img src={menu}/> </NavLink>
      </li > */}
     <li class="nav-item mr-0">
     <NavLink class="nav-link m-0" to="/contact-us"><button className="primary_btn navbar_btn d-flex align-items-center">Let’s Talk <img src={conversation} alt="chat-icon" className="conversation_icon"/></button> </NavLink>
     </li>
    </ul>
   
  </div>
</nav>
 
  </div>
</header>        
                :
                <header class="transistion">
                <div class="container logo-container transistion">
                <nav class="navbar navbar-expand-lg p-0">
                 <NavLink to="/" className="navbar-brand p-0 logo scrollTop"><svg class="header_logo" xmlns="http://www.w3.org/2000/svg" width="255.58" height="36.535" viewBox="0 0 255.58 36.535"><defs></defs><g transform="translate(-15136 -4778)"><path class="a sideLogo" d="M26.791,33.814V29.048a2.685,2.685,0,1,1,5.369,0v4.766a2.685,2.685,0,1,1-5.369,0ZM35.5,29.048a2.685,2.685,0,1,1,2.685,2.721A2.7,2.7,0,0,1,35.5,29.048ZM16.606,22.993a2.721,2.721,0,0,1,0-5.442H42.274a2.721,2.721,0,0,1,0,5.442ZM2.685,14.217a2.721,2.721,0,0,1,0-5.442h44.99a2.721,2.721,0,0,1,0,5.442Zm5.4-8.776A2.7,2.7,0,0,1,5.4,2.721,2.7,2.7,0,0,1,8.08,0H42.274a2.7,2.7,0,0,1,2.685,2.721,2.7,2.7,0,0,1-2.685,2.721Z" transform="translate(15136 4778)"/><g class="logo-transform" transform="translate(15137.166 4779.416)"><path class="b" d="M-197.7,2924.16h-6.786a.328.328,0,0,0-.328.328v21.688a.328.328,0,0,0,.328.328h6.786c7.691,0,12.22-4.135,12.22-11.187S-190.065,2924.16-197.7,2924.16Zm-.152,18.118h-1.983a.328.328,0,0,1-.328-.328v-13.207a.328.328,0,0,1,.328-.328h1.983c5.015,0,7.66,2.523,7.66,6.932C-190.187,2939.725-192.8,2942.278-197.848,2942.278Z" transform="translate(204.81 -2923.4)"/><path class="b" d="M-39.049,2974.66c-4.59,0-7.751,3.435-7.751,8.057a7.555,7.555,0,0,0,7.935,7.965,8.037,8.037,0,0,0,6.3-2.5.329.329,0,0,0-.031-.48l-2.547-2.068a.332.332,0,0,0-.457.042A4.166,4.166,0,0,1-38.775,2987c-2.075,0-3.273-.983-3.494-2.725a.33.33,0,0,1,.325-.375H-32.2a.328.328,0,0,0,.328-.328v-1.1C-31.874,2978.247-34.215,2974.66-39.049,2974.66Zm2.413,6.415h-5.3a.326.326,0,0,1-.325-.367,2.968,2.968,0,0,1,3.065-2.673,2.8,2.8,0,0,1,2.891,2.679A.327.327,0,0,1-36.636,2981.075Z" transform="translate(67.533 -2967.274)"/><path class="b" d="M88.141,2974.66c-4.59,0-7.751,3.435-7.751,8.057a7.555,7.555,0,0,0,7.933,7.965,8.038,8.038,0,0,0,6.3-2.5.33.33,0,0,0-.031-.48l-2.547-2.068a.332.332,0,0,0-.457.042A4.166,4.166,0,0,1,88.415,2987c-2.075,0-3.273-.983-3.494-2.725a.33.33,0,0,1,.325-.375h9.741a.328.328,0,0,0,.328-.328v-1.1C95.316,2978.247,92.975,2974.66,88.141,2974.66Zm2.413,6.415h-5.3a.326.326,0,0,1-.325-.367,2.968,2.968,0,0,1,3.065-2.673,2.8,2.8,0,0,1,2.891,2.679A.327.327,0,0,1,90.554,2981.075Z" transform="translate(-42.967 -2967.274)"/><path class="b" d="M223.285,2974.66a5.467,5.467,0,0,0-4.337,1.792.131.131,0,0,1-.231-.067l-.139-1.132a.328.328,0,0,0-.325-.289h-3.395a.328.328,0,0,0-.328.328v21.748a.327.327,0,0,0,.328.328h3.812a.327.327,0,0,0,.328-.328V2989.3a.131.131,0,0,1,.224-.092,5.609,5.609,0,0,0,4.062,1.469c4.1,0,6.87-3.375,6.87-7.995S227.389,2974.66,223.285,2974.66Zm-1.094,12.13h-.046a3.2,3.2,0,0,1-3.147-3.217v-1.806a3.2,3.2,0,0,1,3.026-3.212l.167,0c2.036,0,3.465,1.581,3.465,4.135C225.656,2985.208,224.227,2986.789,222.19,2986.789Z" transform="translate(-159.506 -2967.274)"/><path class="b" d="M353.385,2919.185a6.325,6.325,0,0,0-3.318-.815c-3.8,0-6.141,2.644-6.141,6.354v1.009a.328.328,0,0,1-.328.328h-2.019a.328.328,0,0,0-.328.328v3.114a.328.328,0,0,0,.328.328H343.6a.328.328,0,0,1,.328.328v10.987a.328.328,0,0,0,.328.328h3.813a.328.328,0,0,0,.328-.328v-10.987a.328.328,0,0,1,.328-.328h2.809a.328.328,0,0,0,.328-.328v-3.114a.328.328,0,0,0-.328-.328h-2.809a.328.328,0,0,1-.328-.328v-1.253c0-1.367.7-2.219,1.914-2.219a2.68,2.68,0,0,1,1.432.4.325.325,0,0,0,.472-.144l1.3-2.917A.326.326,0,0,0,353.385,2919.185Z" transform="translate(-269.598 -2918.37)"/><path class="b" d="M439,2974.66a8.012,8.012,0,1,0,8.147,8.057A7.836,7.836,0,0,0,439,2974.66Zm0,12.13c-2.067,0-3.587-1.732-3.587-4.073,0-2.371,1.521-4.165,3.587-4.165,2.1,0,3.618,1.793,3.618,4.165C442.614,2985.057,441.095,2986.789,439,2986.789Z" transform="translate(-347.494 -2967.274)"/><path class="b" d="M582.438,2974.737a5.063,5.063,0,0,0-3.9,2.043.131.131,0,0,1-.237-.058l-.189-1.406a.327.327,0,0,0-.325-.285h-3.367a.328.328,0,0,0-.328.328v14.757a.328.328,0,0,0,.328.328h3.813a.328.328,0,0,0,.328-.328v-7.074a3.852,3.852,0,0,1,3.667-3.873l.193,0h.037a.328.328,0,0,0,.328-.328v-3.772A.329.329,0,0,0,582.438,2974.737Z" transform="translate(-471.886 -2967.34)"/><path class="b" d="M661.887,2974.964h-3.395a.329.329,0,0,0-.327.289l-.138,1.126a.131.131,0,0,1-.232.066,5.455,5.455,0,0,0-4.337-1.785c-4.073,0-6.87,3.315-6.87,7.844s2.8,7.843,6.87,7.843a5.543,5.543,0,0,0,4.064-1.463.131.131,0,0,1,.223.093v.853a3.75,3.75,0,0,1-3.952,3.952,5.727,5.727,0,0,1-4.363-2.09.328.328,0,0,0-.471-.008l-2.452,2.454a.328.328,0,0,0-.005.458,9.441,9.441,0,0,0,7.352,3.077c5.047,0,8.361-3.009,8.361-7.935v-14.446A.328.328,0,0,0,661.887,2974.964Zm-4.141,8.273a3.2,3.2,0,0,1-3.028,3.215c-.054,0-.109,0-.164,0-2.036,0-3.435-1.52-3.435-3.951s1.4-3.952,3.435-3.952l.164,0a3.2,3.2,0,0,1,3.028,3.216Z" transform="translate(-534.718 -2967.274)"/><path class="b" d="M794.292,2974.66c-4.591,0-7.752,3.435-7.752,8.057a7.555,7.555,0,0,0,7.935,7.965,8.037,8.037,0,0,0,6.3-2.5.328.328,0,0,0-.031-.48l-2.547-2.068a.33.33,0,0,0-.455.042,4.171,4.171,0,0,1-3.174,1.332c-2.074,0-3.272-.983-3.494-2.725a.33.33,0,0,1,.325-.375h9.741a.328.328,0,0,0,.328-.328v-1.1C801.466,2978.247,799.125,2974.66,794.292,2974.66Zm2.412,6.415h-5.3a.326.326,0,0,1-.325-.367,2.968,2.968,0,0,1,3.065-2.673,2.8,2.8,0,0,1,2.891,2.679A.327.327,0,0,1,796.7,2981.075Z" transform="translate(-656.46 -2967.274)"/><path class="b" d="M1029.6,2943.472l-10.565-22.262h-.13l-10.565,22.262a.328.328,0,0,0,.3.468h4.371a.328.328,0,0,0,.3-.2l1.29-3.064a.327.327,0,0,1,.3-.2h8.137a.328.328,0,0,1,.3.2l1.29,3.064a.327.327,0,0,0,.3.2h4.371A.327.327,0,0,0,1029.6,2943.472Zm-8.3-6.615h-4.665a.328.328,0,0,1-.3-.455l2.333-5.518a.327.327,0,0,1,.6,0l2.333,5.518A.329.329,0,0,1,1021.3,2936.857Z" transform="translate(-849.129 -2920.837)"/><path class="b" d="M1192.354,2924.16h-4a.328.328,0,0,0-.328.328v21.688a.328.328,0,0,0,.328.328h4a.328.328,0,0,0,.328-.328v-21.687A.328.328,0,0,0,1192.354,2924.16Z" transform="translate(-1005.268 -2923.4)"/></g></g></svg></NavLink>
                 <div class="navbar-toggler1"><img src={menu}/></div>
  

  <div class="menu-sec" id="navbarSupportedContent">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <ul class="navbar-nav ml-auto header_nav">
                    <li class="nav-item ">
                      {/* <a class="nav-link" href="#">Home</a> */}
                    </li>
                    <li class="nav-item dropdown dropdown-slide dropdown-hover d-none d-sm-none d-md-block">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Conversational AI <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/#approach">Approach</a>
          <a class="dropdown-item" href="/#capabilities">Capabilities </a>
        </div>
      </li>
      <li class="nav-item dropdown d-block d-sm-block d-md-none">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Conversational AI <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/#approach">Approach</a>
          <a class="dropdown-item" href="/#capabilities">Capabilities </a>
        </div>
      </li>
      <li class="nav-item">
                    <NavLink class="nav-link" to="/what-we-do">What We Do </NavLink>
                    </li >
                    <li class="nav-item">
                    <a class="nav-link" href="/#usecases"> Use Cases </a>
                    </li >
                   
                    <li class="nav-item dropdown dropdown-slide dropdown-hover d-none d-sm-none d-md-block">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Company <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/who-we-are">Who We Are</a>
          <a class="dropdown-item" href="/partners">Partners </a>
          <a class="dropdown-item" href="/contact-us">Contact Us</a>
        </div>
      </li>
      <li class="nav-item dropdown d-block d-sm-block d-md-none">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Company <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/who-we-are">Who We Are</a>
          <a class="dropdown-item" href="/partners">Partners </a>
          <a class="dropdown-item" href="/contact-us">Contact Us</a>
        </div>
      </li>
                   
                   <li class="nav-item my-0">
                   <div class="nav-link my-0 border">  </div>
                   </li>
                   {/* <li class="nav-item">
                    <NavLink class="nav-link" to="/"><img src={menu}/> </NavLink>
                    </li > */}
                   <li class="nav-item mr-0">
                   <NavLink class="nav-link m-0" to="/contact-us"><button className="primary_btn navbar_btn d-flex align-items-center">Let’s Talk <img src={conversation} alt="chat-icon" className="conversation_icon"/></button> </NavLink>
                   </li>
                  </ul>
                 
                </div>
              </nav>
               
                </div>
              </header>           }
            </div>
         
            <Suspense fallback={<div>loading first comp...</div>}>
            <Switch >
            <Route  exact path="/"  component={Home}  />
            <Route  exact path="/who-we-are"  component={about}  />
            <Route  exact path="/approach/design"  component={design}  />
            <Route  exact path="/privacy-policy"  component={privacypolicy}  />
            <Route  exact path="/approach/develop"  component={develop}  />
            <Route  exact path="/approach/discover"  component={discover}  />
            <Route  exact path="/approach/distribute"  component={distribute}  />
            <Route  exact path="/capabilities/we-develop-and-deliver-agnostic-experiences"  component={our_platform_is_domain_agnostic}  />
            <Route  exact path="/capabilities/we-possess-in-depth-vertical-domain-knowledge"  component={deep_vertical_domain_knowledge}  />
            <Route  exact path="/capabilities/we-give-robust-experiences"  component={platform_with_robust_features}  />
            <Route  exact path="/capabilities/we-build-omnichannel-experiences"  component={our_platform_is_omnichannel}  />
            <Route  exact path="/usecases/media-and-entertainment"  component={mediaandentertainment}  />
            <Route  exact path="/industry-use-cases"  component={allusecases}  />
            <Route  exact path="/usecases/travel-and-hospitality"  component={travelandhospitality}  />
            <Route  exact path="/usecases/real-estate"  component={real_estate}  />
            <Route  exact path="/usecases/retail-ecommerce"  component={retailandecommerce}  />
            <Route  exact path="/usecases/healthcare"  component={healthcare}  />
            <Route  exact path="/usecases/banking-financial-services"  component={financial_services}  />

            <Route  exact path="/usecases/education"  component={education_usecase}  />
            <Route  exact path="/partners"  component={partner}  />
            <Route  exact path="/what-we-do"  component={what_we_do}  />
            <Route  exact path="/contact-us"  component={contact}  />
            <Route  exact path="/terms-and-conditions"  component={terms}  />
            <Route  path="" component={notfound} />
            

            </Switch>
            </Suspense>
            {this.state.changeNavigation == false? 
             <footer>
             <div style={footer_bg1} className="section_padding footer_bg">
             <div className="container section_container">
             <div className="row">
          <div className="col-lg-4 col-md-12 col-xs-12 pl-0">
                <img src={footer_logo} className="footer_logo"/>
                <p className="footer_text">Deepforge AI is the leading software development agency dedicated to the design and development of conversational user interfaces, chat bots/voice bots and RPA solutions.  We are preferred partners for many leading Conversational AI and RPA platform providers delivering stunning Conversational Automation experiences to the Enterprises.

        </p>
                </div>
                <div className="col-lg-8 col-md-12 col-xs-12">
                <div className="row">
                <div className="col-lg-3 col-md-4 col-xs-12">
                    <ul>
                        <li className="course">Conversational AI</li>
                        <a href="#approach"><li>Approach</li></a>
                        <a href="#capabilities"><li>Capabilities</li></a>
                        <Link to="what-we-do"><li>What We Do</li></Link>
                        <Link to="/industry-use-cases"><li>Use Cases</li></Link>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12">
                <ul>
                        <li className="course">Company</li>
                        <Link to="/who-we-are"><li>Who We Are</li></Link>
                        <Link to="/partners"><li>Partners</li></Link>
                        {/* <Link to=""><li>Resources</li></Link> */}
                        <Link to="/contact-us"><li>Contact Us</li></Link>
                    </ul>
                </div>
                <div className="col-lg-5 col-md-4 col-xs-12">
                <ul className="contact_links">
                        <li className="course">Contact</li>
                        <li>For Sales</li>
                        <a href="mailto:sales@deepforgeai.com" className="a1"><li><img src={mail} className="location"/>sales@deepforgeai.com</li></a>
                        <li>For Support</li>
                        
                        <a href="mailto:support@deepforgeai.com" className="a1"><li><img src={mail} className="location"/>support@deepforgeai.com</li></a>
                       
                        <li>Location</li>
                        <li  className="a1"><img src={location} className="location"/>1-65/15, G.Begumpet, Madhapur, Hyderabad, Telangana, India. 500081</li>
                    </ul>
                </div>
                </div>
                </div>
                </div>
             </div>
             </div>
             <div className="copy_rights">
             <div className="container section_container">
             <div className="d-flex align-items-center copy_flex">
                 <p>© Copyright 2020 Deepforge AI. All Rights Reserved.</p>
               <div className="d-flex align-items-center copy_flex1">
                <div className="d-flex align-items-center policy_link">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <p className="policy"></p>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </div>
                <a href="https://www.linkedin.com/company/deepforgeai/" target="_blank"><img src={linkedin_button}/></a>
                <a href="https://www.facebook.com/deepforgeai/" target="_blank"><img src={facebook_logobutton}/></a>
                <a href="https://twitter.com/DeepforgeAI" target="_blank"><img src={twitter_logobutton}/></a>
               </div>
             </div>
            </div>
             </div>
        </footer>
            :
            <footer>
     <div style={footer_bg1} className="section_padding footer_bg">
     <div className="container section_container">
     <div className="row">
	<div className="col-lg-4 col-md-12 col-xs-12 pl-0">
        <img src={footer_logo} className="footer_logo"/>
        <p className="footer_text">Deepforge AI is the leading software development agency dedicated to the design and development of conversational user interfaces, chat bots/voice bots and RPA solutions.  We are preferred partners for many leading Conversational AI and RPA platform providers delivering stunning Conversational Automation experiences to the Enterprises.

</p>
        </div>
        <div className="col-lg-8 col-md-12 col-xs-12">
        <div className="row">
        <div className="col-lg-3 col-md-4 col-xs-12">
            <ul>
                <li className="course">Conversational AI</li>
                <a href="/#approach"><li>Approach</li></a>
                <a href="/#capabilities"><li>Capabilities</li></a>
                <Link to="what-we-do"><li>What We Do</li></Link>
                <Link to="/industry-use-cases"><li>Use Cases</li></Link>
            </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12">
        <ul>
                <li className="course">Company</li>
                <Link to="/who-we-are"><li>Who We Are</li></Link>
                <Link to="/partners"><li>Partners</li></Link>
                {/* <Link to=""><li>Resources</li></Link> */}
                <Link to="/contact-us"><li>Contact Us</li></Link>
            </ul>
        </div>
        <div className="col-lg-5 col-md-4 col-xs-12">
        <ul className="contact_links">
                        <li className="course">Contact</li>
                        <li>For Sales</li>
                        <a href="mailto:sales@deepforgeai.com" className="a1"><li><img src={mail} className="location"/>sales@deepforgeai.com</li></a>
                        <li>For Support</li>
                        
                        <a href="mailto:support@deepforgeai.com" className="a1"><li><img src={mail} className="location"/>support@deepforgeai.com</li></a>
                       
                        <li>Location</li>
                        <li  className="a1"><img src={location} className="location"/>1-65/15, G.Begumpet, Madhapur, Hyderabad, Telangana, India. 500081</li>
                    </ul>
        </div>
        </div>
        </div>
        </div>
     </div>
     </div>
     <div className="copy_rights">
     <div className="container section_container">
     <div className="d-flex align-items-center copy_flex">
                 <p>© Copyright 2020 Deepforge AI. All Rights Reserved.</p>
               <div className="d-flex align-items-center copy_flex1">
                <div className="d-flex align-items-center policy_link">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <p className="policy"></p>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </div>
                <a href="https://www.linkedin.com/company/deepforgeai/" target="_blank"><img src={linkedin_button}/></a>
                <a href="https://www.facebook.com/deepforgeai/" target="_blank"><img src={facebook_logobutton}/></a>
                <a href="https://twitter.com/DeepforgeAI" target="_blank"><img src={twitter_logobutton}/></a>
               </div>
             </div>
    </div>
     </div>
</footer>
            }
          
      </div>
     
      </ScrollToTop>
    );
  }
}





export default  withRouter(App);