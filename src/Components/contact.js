import React, { Component } from 'react';
import industry_bg1 from '../assets/img/main/industry_bg.png';
import * as $ from 'jquery';
import { Link} from 'react-router-dom';
import axios from 'axios';

var industry_bg = {
    backgroundImage: `url(${industry_bg1})`
  };
class contact extends Component {

        componentDidMount(){ 
            setTimeout(function () {
                $(".d-c-sec1 .contact-text h1").css({
                    "left":"0px",
                    "opacity":"1",
                    "transition":"1s"
                });
        }, 1000);
        setTimeout(function () {
            $(".d-c-sec1 svg").css({
                "opacity":"1",
                "transition":"1s"
            });
        }, 2000);
        
        setTimeout(function () {
            $(".d-c-sec1 svg").css({
                "opacity":"1",
                "transition":"1s"
            });
        }, 2200);
        
        setTimeout(function () {
            $(".d-c-sec1 .contact-text h2").css({
                "opacity":"1",
                "transition":"2s"
            });
        }, 2500);
        
        setTimeout(function () {
            $(".d-c-sec1 .contact-text h3").css({
                "opacity":"1",
                "transition":"2s"
            });
        }, 2800);
        
/** form validations */

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
    var phone = $(".phonenumber").val();
    if (phone.length < 10) {
        $(".phone1").fadeIn();
    }
    else if (phone.length > 10) {
        $(".phone1").fadeOut();
        return false;
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

    var data = new FormData();
    data.append("subject", "ContactUs");


    var form_data = $('#contactform').serializeArray();
    $.each(form_data, function (key, input) {
        data.append(input.name, input.value);
    });

    $.ajax({
        type: "POST",
        url: "https://nb3.botjet.ai/public/deepforge",
        data: data,
        cache: false,
        contentType: false,
        processData: false, 
        success: function () {
            $("#contactform")[0].reset();
              console.log(data,"response");
              // add thank you message code here
            //  $('#tymsg').modal('show');
            //   setTimeout(function() {$('#tymsg').modal('hide');}, 7000);
        },
    });
    return false;

});  

        }
        


  render() {

    return (
    <div>
           <div className="about_bg">
       <div className="container section_container">
       <div className="innerPagehead about text-center p-0">
                    <h1>CONTACT US</h1>
                    <div className="border1 ml-auto mr-auto border2"></div>
                    <h2>Let's Engage. We are always there for you.  </h2>
                    <h6>At Deepforge AI, we build “The Conversational Experiences”</h6>
                  </div>
       </div>
       </div>
       {/* contact form */}
       <div className="container section_container">
       <div className="row section_padding">
<div className="col-lg-6 col-md-6 col-xs-12 p-0">
    {/* <div style={partner_form_img1}> */}
  <div className="contact_left ">
  <div class="common_head contact_left_text">
    <h3 className="mb-3">Say Hello to Deepforge AI</h3>
    <p class="text2">Tell us a few things about yourself and we'll
get back to you right away.</p>
 <p className="mt-0">We’re happy to answer your questions about how our products,
solutions and agent services can help create on-demand
conversational experiences for your customers with our AI-
powered Conversational User Interfaces to attract and retain
customers with personalized, predictive and effortless customer
experiences.</p>
</div>
  </div>
  </div>

               <div class="col-lg-6 col-md-6 col-xs-12 d-c-sec1 p-0">
            <div class=" b-top">
            <form id="contactform" role="form" data-toggle="validator">
               
                <div class="form-group">
                <div class="row">
                            <div class="col-12 col-sm-6">
                                    <input placeholder="First Name*" name="firstName" type="text" class="form-control nospace firstName" id="fname" required/>
                                    <div class="fname alert">Please enter your first name</div>    
                                </div>
                            <div class="col-12 col-sm-6">
                                    <input placeholder="Last Name*" name="lastName" type="text" class="form-control lastName nospace" id="lname" required/>
                                    <div class="lname alert">Please enter your last name</div>    
                            </div>
                    </div>
                </div> 
                <div class="form-group">
                        <div class="row">
                                    <div class="col-12 col-sm-12">
                                            <input name="email" placeholder="Company Email*" type="email" class="form-control nospace" 
                                            id="email" required/>
                                            <div class="emailalert alert" >Please enter a valid company mail</div>
                                            <div class="emailalert1 alert" >Please enter email</div>
                                        </div>
                            </div>
                </div>
                <div class="form-group">
                        <div class="row">
                                    <div class="col-12 col-sm-6">
                                            <input name="mobileNumber" placeholder="Mobile Number*" 
                                            type="text" maxlength="15" class="form-control nospace phonenumber" id="mnumber" required/>
                                            <div class="phonealert alert">No letters should be entered</div><div class="phone1 alert">Minimum 10 digits are required</div>
                                        </div>
                                    <div class="col-12 col-sm-6">
                                            <input name="company" placeholder="Company*" 
                                            type="text" class="form-control nospace cname nonumber" id="Company" required/>
                                            <div class="cname1 alert" >Please enter your company name</div>
                                    </div>
                            </div>
                </div>

                <div class="form-group">
                        <div class="row">
                                    <div class="col-12 col-sm-12">
                                            <textarea name="message" class="form-control message nospace" id="textarea" 
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
</div></div>
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

export default contact;

















