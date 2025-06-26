import React from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import  Aos from 'aos';
import "aos/dist/aos.css";


export default function Contactus() {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    }, []);

    function sendEmail(e) {

    const success = document.getElementById("success");
    const button = document.getElementById("send_message");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif') //change with your api
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }

    return(
      <div className="container">
            <div className="row">
                    <div className="col-lg-10 offset-lg-1"
                            data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                            >
                            
                            {/* Contact Information */}
                            <div className="row mb-5">
                                <div className="col-lg-4">
                                    <div className="contact-info-box text-center">
                                        <i className="fa fa-map-marker fa-2x mb-3" style={{color: '#00d4ff'}}></i>
                                        <h5>Visit Our Gaming Hub</h5>
                                        <p>42 Albion Street<br/>
                                        Leeds, West Yorkshire<br/>
                                        LS2 8NP, United Kingdom</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-info-box text-center">
                                        <i className="fa fa-phone fa-2x mb-3" style={{color: '#00d4ff'}}></i>
                                        <h5>Call Us</h5>
                                        <p>+44 (0) 113 847 2936<br/>
                                        Mon-Sun: 10:00 AM - 2:00 AM</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-info-box text-center">
                                        <i className="fa fa-envelope fa-2x mb-3" style={{color: '#00d4ff'}}></i>
                                        <h5>Email Us</h5>
                                        <p>hello@leedsgaminghub.co.uk<br/>
                                        events@leedsgaminghub.co.uk</p>
                                    </div>
                                </div>
                            </div>

                            <p className="lead">
                            Ready to level up your gaming experience? Check out our <a href="/faq">FAQ page</a> for quick answers, 
                            or drop us a message below. Our gaming experts are here to help you join the ultimate gaming community in Yorkshire!
                            </p>

                            <div className="contact_form_wrapper">
                                <form name="contactForm" id="contact_form" className="form-border" onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-lg-6 mb10">
                                            <div className="field-set">
                                                <span className="d-label">Name</span>
                                                <input type="text" name="Name" id="name" className="form-control" placeholder="Your Name" required/>
                                            </div>
                                        
                                            <div className="field-set">
                                                <span className="d-label">Email</span>
                                                <input type="text" name="Email" id="email" className="form-control" placeholder="Your Email" required/>
                                            </div>
                                        
                                            <div className="field-set">
                                                <span className="d-label">Phone</span>
                                                <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                                <div className="field-set">
                                                    <span className="d-label">Message</span>
                                                    <textarea name="message" id="message" className="form-control" placeholder="Tell us about your gaming interests or questions..." required></textarea>
                                                </div>
                                        </div>
                                        <div className="col-12">
                                            <div id='success' className='hide'>Your message has been sent! We'll get back to you soon...</div>
                                            <div id='failed' className='hide'>Message failed to send. Please try again...</div>
                                            <div id='submit' className="mt30">
                                                <button type='submit' id='send_message' className="btn-main">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
