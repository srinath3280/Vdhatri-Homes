import React from 'react';
import './contact.css';
import { useLocation } from 'react-router-dom';

const ContactUs = () => {
    const location = useLocation();

    return (
        <div>
            <div className='contact'>
                <div className='contactpagecontent'>
                    <h1>CONTACT</h1>
                    <p>Creating Synergy Between Lifestyle And Aesthetics</p>
                    <p className='path'>HOME &nbsp;&nbsp;<span style={{ color: "red" }}>{location.pathname}</span></p>
                </div>
            </div>

            <div className='contactcards'>
                <div className='contactcards-cards'>
                    <div className='cards-body'>
                        <img src="/images/icon-global.png" alt="" />
                        <h6>HEAD QUARTERS</h6>
                        <p>
                            1-001/A, MYTHRI ENCLAVE, <br />
                            Hi-Tech City, HYD-500016.
                        </p>
                    </div>
                </div>
                <div className='contactcards-cards'>
                    <div className='cards-body'>
                        <img src="/images/icon-phone.png" alt="" />
                        <h6>PHONES</h6>
                        <p>
                            +911400253020 <br />
                            +911400253032
                        </p>
                    </div>
                </div>
                <div className='contactcards-cards'>
                    <div className='cards-body'>
                        <img src="/images/icon-email.png" alt="" />
                        <h6>WRITE TO US</h6>
                        <p>
                            info@vdhatri.com <br />
                            for all purpose
                        </p>
                    </div>
                </div>
            </div>

            <div className='contactcontentblock'>
                <div className='contactcontentblock-map'>
                    <h1>REACH US</h1>
                    <iframe
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.670830340825!2d75.7940167!3d13.308491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77f6b8853b5%3A0xaefdd637ace50db8!2sDev%E2%80%99s%20residence!5e0!3m2!1sen!2sin!4v1717173694838!5m2!1sen!2sin"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='contactcontentblock-form'>
                    <h1>GET IN TOUCH</h1>
                    <form action="/" className="form">
                        <input type="text" placeholder="Name" class="form-box" />
                        <input type="email" placeholder="Email" class="form-box" />
                        <input type="number" placeholder="Phone" class="form-box" />
                        <textarea
                            type="text"
                            placeholder="Message"
                            class="form-box"
                            id=""
                            cols="20"
                            rows="5"
                        ></textarea>
                        <div className="submit-btn">
                            <a href="/">Submit</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
