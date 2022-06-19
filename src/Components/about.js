import React, { Component } from 'react';
import about_img from '../assets/img/main/about_img.png';
import work_img1 from '../assets/img/main/work_img1.png';
import work_img2 from '../assets/img/main/work_img2.png';
import work_img3 from '../assets/img/main/work_img3.png';
import work_img4 from '../assets/img/main/work_img4.png';
import quote from '../assets/img/main/quote.svg';
import df_symbol from '../assets/img/main/df_symbol.svg';
import { Link} from 'react-router-dom';
import arrow from '../assets/img/main/arrow.svg';
import arrow_b from '../assets/img/main/arrow_b.svg';
import * as $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

// var about_bg = {
//     backgroundImage: `url(${aboutbg})`
//   };
class about extends Component {

        componentDidMount(){ 
    
        }
        


  render() {

    return (
    <div>
       <div className="about_bg">
       <div className="container section_container">
       <div className="innerPagehead about text-center p-0">
                    <h1>ABOUT US</h1>
                    <div className="border1 ml-auto mr-auto border2"></div>
                    <h2>Transform your Traditional Messaging into Conversational Experiences</h2>
                    <h6>At Deepforge AI, we build “The Conversational Experiences”</h6>
                  </div>
       </div>
       </div>
       {/* about description */}
       <div className="about_description">
       <div className="container section_container pr-0">
         <div className="row">
           <div className="col-lg-7 col-md-6 col-xs-12 col_left">
            <h4>The <span>Leading Company</span> in <span>Conversational AI Services</span>, is here to help <span>Brands</span> to <span>Create</span> <p>Amazing Conversational Experiences</p> and meet their <span className="goals">CX Goals</span>.</h4>
            <p className="description">As we witness the paradigm shift in the consumer interaction space, customers expect natural, simple and intuitive experiences on a new and convenient conversational user interface.</p>
           </div>
           <div className="col-lg-5 col-md-6 col-xs-12 p-0">
            <img src={about_img} className="d-flex ml-auto about_img" alt="about"/>
           </div>
         </div>
         </div>
       </div>
       {/* work with */}
       <div className="work pb-0">
          <div className="container section_container pr-0">
           <div className="row">
             <div className="col-lg-9 col-xs-12">
             <div className="work_head">
          <h3>Work With Us</h3>
          <h2>Join us on the journey of building exceptional conversational experiences and unmatched customer satisfaction for leading brands.</h2>
           </div>
             </div>
             <div className="col-lg-3 col-xs-12">
               
             </div>
           </div>
           </div>
           <div className="container section_container p-0">
           <div className="row mt-5">
           <div className="col-lg-7 col-xs-12 p-0">
            <img src={work_img1} className="work_img1 img-fluid" alt="Deepforge-ai"/>
            <div className="workimage_quote">
             <h4>Talent wins games, but teamwork and<br></br> intelligence win championships.</h4>
            <div className="d-flex align-items-center">
            <h5>– Michael Jordan</h5>
            <img src={quote} className="img-fluid" alt="quote"/>
            </div>
            </div>
           </div>
           <div className="col-lg-5 col-xs-12 p-0">
            <img src={work_img2} className="work_img2 img-fluid" alt="Deepforge-ai"/>
            <div className="hiring_text">
             <h4>we are hiring</h4>
             <p>We are always in the lookout for talented and passionate people of all backgrounds. If you are interested to explore opportunities with us, email your latest profile to</p>
             <a href="mailto:careers@deepforgeai.com?subject=Testing mail!"><h6>careers@deepforgeai.com</h6></a>
            </div>
           </div>
           </div>
           <div className="d-flex">
           <div className="">
            <img src={work_img3} className="img-fluid" alt="Deepforge-ai"/>
           </div>
           <div className="">
            <img src={work_img4} className="img-fluid" alt="Deepforge-ai" />
           </div>
           </div>
          </div>
       </div>
       {/* what make us */}
       {/* <div className="make_us">
       <div className="container section_container">
       <div className="section_head text-center">
<h2>What Make Us So Different?</h2>
<p>Lorem ipsum is placeholder text commonly used</p>
</div>
<div class="d-none d-sm-none d-md-block">
         <div className="row">
         <div className="col-lg-4 col-md-4 col-xs-12">
           <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>HACKOUTS</h4>
            <p>Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
         </div>
         <div className="col-lg-4 col-md-4 col-xs-12">
         <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>TEAM WORK</h4>
            <p>Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
           </div>
           <div className="col-lg-4 col-md-4 col-xs-12">
           <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>NO NONSENSE. NO BS.</h4>
            <p>Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
           </div>
         </div>
         <div className="row row2">
         <div className="col-lg-4 col-md-4 col-xs-12">
           <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>PLAYFUL ENVIRONMENT</h4>
            <p>Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
         </div>
         <div className="col-lg-4 col-md-4 col-xs-12">
         <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>JETSPEED GROWTH</h4>
            <p>Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
           </div>
           <div className="col-lg-4 col-md-4 col-xs-12">
           <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>CHANGE THE WORLD</h4>
            <p>Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
           </div>
         </div>
         </div>
         {/* mobile */}
         {/* <div class="make_us p-0 mt-3">
         <div class="d-block d-sm-block d-md-none">
         <OwlCarousel className="owl-theme platform_carousel row" items={1} stagePadding={0} margin={0} autoHeight={true} loop={true} > 
<div className={'item'}>
<div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>HACKOUTS</h4>
            <p class="p-0">Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
  </div>
  <div className={'item'}>
  <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>TEAM WORK</h4>
            <p class="p-0">Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
  </div>
  <div className={'item'}>
  <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>NO NONSENSE. NO BS.</h4>
            <p class="p-0">Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
  </div>
  <div className={'item'}>
  <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>PLAYFUL ENVIRONMENT</h4>
            <p>Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
  </div>
  <div className={'item'}>
  <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>JETSPEED GROWTH</h4>
            <p class="p-0">Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
  </div>
  <div className={'item'}>
  <div className="card">
            <img src={df_symbol} className="" alt="Deepforge-ai"/>
            <h4>JETSPEED GROWTH</h4>
            <p class="p-0">Team outing are boring. At Keka we do regular Hackouts, where we go out to a riverside or woods to hack away stuff. Its fun!</p>
           </div>
  </div>
  </OwlCarousel>
         </div>
         </div>
         </div> */}
       {/* </div>  */}
       {/* openings */}
       {/* <div className="openings">
        <div className="container section_container">
        <div className="section_head text-center">
<h2>Current Openings</h2>
<p>Lorem ipsum is placeholder text commonly used</p>
</div>
<div className="d-none d-sm-none d-md-block">
		<div class="row services_row openings_row">
			<div class="col-lg-3 p-0">
				<nav>
					<div class="nav nav-tabs nav-fill opening_tabs" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Machine Learning, NLP</a>
						<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Product</a>
						<a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Operations</a>
						<a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Sales & Business Development</a>
					</div>
				</nav>
                </div>
                <div class="col-lg-9">
				<div class="tab-content" id="nav-tabContent">
					<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
			
                           <div className="tabs_text mt-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card mb-0">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
                           
						   </Link>
               </div>
                          </div>
                        </div>
					</div>
					<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
					
          <div className="tabs_text mt-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card mb-0">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
                           
						   </Link>
               </div>
                          </div>
                        </div>					</div>
					<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
				
                           
          <div className="tabs_text mt-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card mb-0">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
                           
						   </Link>
               </div>
                          </div>
                        </div>
					</div>
					<div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
				
          <div className="tabs_text mt-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card mb-0">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
                          
						   </Link>
               </div>
                          </div>
                        </div>
					</div>
				</div>
			
			</div>
		</div>
    </div>
    <div className="d-block d-sm-block d-md-none services_row openings_row mt-3">
    <OwlCarousel className="owl-theme platform_carousel" items={1} stagePadding={0} margin={0} autoHeight={true} loop={true}  > 
<div className={'item'}>
 <div className="nav-tabs opening_tabs">
 <a class="nav-item nav-link active p-0 mt-0" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Machine Learning, NLP</a>
 </div>
 <div className="tabs_text mt-0 pl-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                        </div>
  </div>
  <div className={'item'}>
 <div className="nav-tabs opening_tabs">
 <a class="nav-item nav-link active pl-0" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Product</a>
					
 </div>
 <div className="tabs_text mt-0 pl-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                        </div>
 </div>
 <div className={'item'}>
 <div className="nav-tabs opening_tabs">
 <a class="nav-item nav-link active pl-0" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Operations</a>
						
 </div>
 <div className="tabs_text mt-0 pl-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                        </div>
 </div>
 <div className={'item'}>
 <div className="nav-tabs opening_tabs">
 <a class="nav-item nav-link active pl-0" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Sales & Business Development</a>
 </div>
 <div className="tabs_text mt-0 pl-0">
                          <div className="card">
                            <div className="cards">
                            <h6>Technical Lead Architect</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Senior Machine Learning Engineer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                          <div className="card">
                            <div className="cards">
                            <h6>Conversational AI Developer - Intern</h6>
                            <Link to="/" className="platform_btn see_all p-0">
                            Apply now
						   </Link>
               </div>
                          </div>
                        </div>
 </div>
  </OwlCarousel>
    </div>
</div>
     
       </div> */}
    </div>
           );
  }
}

export default about;
