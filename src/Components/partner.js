import React, { Component } from 'react';

import partner_banner from '../assets/img/main/partner_banner.png';
import partner_img from '../assets/img/main/partner_img.png';
import partner_form_img from '../assets/img/main/partner_form_img.png';
import Cognigy from '../assets/img/main/Cognigy.svg';
import Nuacem from '../assets/img/main/Nuacem.png';
import Ubisend from '../assets/img/main/Ubisend.svg';
import botxo from '../assets/img/main/botxo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
var deep_vertical_domain_knowledge_bnr = {
    backgroundImage: `url(${partner_banner})`
  };
  var partner_form_img1 = {
    backgroundImage: `url(${partner_form_img})`
  };
class partner extends Component {
    /** form validations */
    componentDidMount(){ 
$(".firstName").keyup(function (e) {
    var check = $(this).val();
    if (check.length < 1) {
        $(".fname").fadeIn();
    }
    else if (check.length > 0){
        $(".fname").fadeOut();
    }
});

$(".lastName").keyup(function (e) {
    var check = $(this).val();
    if (check.length < 1) {
        $(".lname").fadeIn();
    }
    else if (check.length > 0) {
        $(".lname").fadeOut();
    }
});
$("#email").keyup(function (e) {
    var email = $('#email').val();
    var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
    if ( !reg.test(email)) {
        $(".emailalert").fadeIn();
        $(".emailalert1").fadeOut();
    }
    else{
        $(".emailalert").fadeOut();
    }
    if(email < 1 ){
        $(".emailalert1").fadeIn();
        $(".emailalert").fadeOut();
    }
});
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

$(".message").keyup(function (e) {
    var check = $(this).val();
    if (check.length < 1) {
        $(".messagealert").fadeIn();
    }
    else if (check.length > 0) {
        $(".messagealert").fadeOut();
    }
});

$(".phonenumber").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        return false;
    }
});

$(".phonenumber").keyup(function (e) {
    if ($(".phonenumber").val().length < 10) {
        $(".phone1").fadeIn();
    }
    else if ($(".phonenumber").val().length > 0) {
        $(".phone1").fadeOut();
    }
});

$(".cname").keyup(function (e) {
    var check = $(this).val();
    if (check.length < 1) {
        $(".cname1").fadeIn();
    }
    else if (check.length > 0) {
        $(".cname1").fadeOut();
    }
});

$(".nospace").keypress(function (event) {
    var key = event.keyCode;
    if (key === 32 && event.target.selectionStart === 0) {
        event.preventDefault();
    } else {

    }
});
$(".nonumber").keydown(function (e) {
    var key = e.keyCode;
    if (key >= 48 && key <= 57) {
        e.preventDefault();
    }
});

$(function () {
    $('input[type=email]').on('keypress', function (e) {
        if (e.which == 32)
            return false;
    });
});
$('.thank-you').click( function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});  

$("#contactform input  , #contactform textarea").keyup(function () {
    // console.log("form change called")
    var name = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val()
    var mobile = $("#mnumber").val()
    var cname = $("#Company").val()
    var message = $("#textarea").val()
    var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
 
    // console.log(name, lname , email, mobile, cname, message)
    if (name != '' && lname && email != '' && mobile != '' && cname != '' && message != '' && isValidEmailAddress(email) &&  mobile.length > 9 && reg.test(email)) {
        // console.log("HEllo from remove disable")
        $('.submit').prop("disabled", false);
    }
    else{
        $('.submit').prop("disabled", true);
    }
});

$('.submit').click( function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var mobile = $("#mnumber").val();
    var companyName = $("#Company").val();
    var message = $("#textarea").val()

    var dataString = { 
    "subject": "Partner", 
    "firstName": fname, 
    "lastName": lname,
    "email": email, 
    "mobileNumber": mobile, 
    "company": companyName, 
    "message": message }

    console.log(dataString);

    $.ajax({
        type: "POST",
        url: "https://api.deepforgeai.com/public/deepforge",
        data: dataString,
        success: function () {
            $(".d-c-sec1 form").fadeOut();
            $(".thank-you").fadeIn();
            $(".alert").hide()
            setTimeout(function () {
             $(".d-c-sec1 form").fadeIn();
             $(".thank-you").fadeOut();
             $("#contactform")[0].reset();
             $('.submit').prop("disabled", true);
         }, 7000);
        },
        error: function (jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Please Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
        }
    });
    return false;

});  
}
  render() {

    return (
        <div>
            <div className="innerPage" style={deep_vertical_domain_knowledge_bnr}>
            <div className="container section_container pr-0">
             <div className="row">
                 <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="innerPagehead">
                    <h1>Home > Partners</h1>
                    <div className="border1"></div>
                    <h2>Partners</h2>
                  </div>
                 </div>
                 <div className="col-lg-4 col-md-6 col-xs-12 p-0">
               
               </div>
             </div>
            </div>
            </div>
           
            <div className="innerpage_sec pb-0">
               <div className="container section_container">
               <h6 className="text-center">We are a reliable partner for your AI-led technology transformation. We believe in <span className="text_bold">You Win - We Win</span> philosophy.

</h6>
 {/* all partners */}
            <div className="">
            <div className="section_head text-center">
                <h5>Deepforge AI partners with an elite group of industry-leading Conversational AI platforms to deliver exceptional AI powered Conversational Experiences.
</h5>
<h2>Our Elite Partners
</h2>
</div>
<div className="row partner_row align-items-center elite_partners">
    <div className="col-lg-3 col-md-6 col-xs-12">
    <a href="https://www.cognigy.com/" target="_blank"><img src={Cognigy}/></a>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <a href="https://nuacem.com/" target="_blank"><img src={Nuacem}/></a>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <a href="https://www.botxo.ai/" target="_blank"><img src={botxo}/></a>
    </div>
    <div className="col-lg-3 col-md-6 col-xs-12">
    <a href="https://www.ubisend.com/" target="_blank"><img src={Ubisend}/></a>
    </div>
</div>
            </div>
            <div className="section_head text-center">
<h2>Why Partner with Us</h2>
</div>
               <div className="row innerpage_row align-items-center partner_row2 mb-0">
               <div className="col-lg-5 col-md-6 col-xs-12">
                   <img src={partner_img} alt="partner"/>
                   </div>
                   <div className="col-lg-7 col-md-6 col-xs-12">
                       <ul>
                       {/* <img src={list_style} className="list_style img-fluid"/> */}
                           <li><h5>Our Knowledge </h5>
                           <p>The advanced knowledge and expertise of our team won't let any solution be less than perfect.</p>
                           </li>
                           <li><h5>Time to Market</h5>
                           <p> We are dedicated to give you solutions with prebuilt ontology and our experience to provide you with a faster time to market.
</p>
                           </li>
                           <li><h5>Post-delivery Support</h5>
                           <p>We provide High-quality post-delivery support that includes maintenance, production support, and implied warranties.
</p>
                           </li>
                           <li><h5>Market Understanding</h5>
                           <p>We do in-depth market research to develop custom and prebuilt use cases to deliver the business goals rightly.
</p>
                           </li>
                       </ul>
                   </div>
               </div>
           
               </div>
            </div>
        {/* partners form */}
        <div className="row partner_form_row">
<div className="col-lg-6 col-md-6 col-xs-12 p-0">
    <div style={partner_form_img1}>
  <div className="contact_text">
  <h3>Partner with us to deliver outstanding Conversational AI experiences to your customers.</h3>
  </div>
  </div>
</div>
               <div class="col-lg-6 col-md-6 col-xs-12 d-c-sec1">
            <div class=" b-top">
            <form id="contactform" role="form" data-toggle="validator">
               
                <div class="form-group">
                <div class="row">
                            <div class="col-12 col-sm-6">
                                    <input placeholder="First Name*" type="text" class="form-control nospace firstName" id="fname" required/>
                                    <div class="fname alert">Please enter your first name</div>    
                                </div>
                            <div class="col-12 col-sm-6">
                                    <input placeholder="Last Name*" type="text" class="form-control lastName nospace" id="lname" required/>
                                    <div class="lname alert">Please enter your last name</div>    
                            </div>
                    </div>
                </div> 
                <div class="form-group">
                        <div class="row">
                                    <div class="col-12 col-sm-12">
                                            <input placeholder="Company Email*" type="email" class="form-control nospace" 
                                            id="email" required/>
                                            <div class="emailalert alert" >Please enter a valid company mail</div>
                                            <div class="emailalert1 alert" >Please enter email</div>
                                        </div>
                            </div>
                </div>
                <div class="form-group">
                        <div class="row">
                                    <div class="col-12 col-sm-6">
                                            <input placeholder="Mobile Number*" 
                                            type="text" maxlength="15" class="form-control nospace phonenumber" id="mnumber" required/>
                                            <div class="phonealert alert">No letters should be entered</div><div class="phone1 alert">Minimum 10 digits are required</div>
                                        </div>
                                    <div class="col-12 col-sm-6">
                                            <input placeholder="Company*" 
                                            type="text" class="form-control nospace cname nonumber" id="Company" required/>
                                            <div class="cname1 alert" >Please enter your company name</div>
                                    </div>
                            </div>
                </div>
                <div class="form-group">
                        <div class="row">
                                    <div class="col-12 col-sm-12">
                                            <textarea class="form-control message nospace" id="textarea" 
                                            placeholder="Message*" required></textarea>
                                            <div class="messagealert alert" >Please enter your message</div>
                                        </div>
                            </div>
                </div> 
                <button type="submit"  class="submit transistion secondary_btn" disabled> <span>Submit </span></button>
            </form>

            <div class="thank-you">
                    <h4 class="text-center">Thank you for contacting us.<p> We will revert at the earliest!</p></h4>
            </div>
        </div>

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
  
  export default partner;