import React from 'react';
import './about.css';
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
    const location = useLocation();

    return (
        <div>
            <div className='about'>
                <div className='aboutpagecontent'>
                    <h1>ABOUT VDHATRI HOMES</h1>
                    <p>Creating Synergy Between Lifestyle And Aesthetics</p>
                    <p className='path'>HOME &nbsp;&nbsp;<span style={{ color: "red" }}>{location.pathname}</span></p>
                </div>
            </div>

            <section className='aboutpagecontainer'>
                <div className='aboutpagecontainer-heading'>
                    <div className='aboutpagecontainer-heading-line1'></div>
                    <h1 className='aboutpagecontainer-heading-text'>BOARD MEMBERS</h1>
                    <div className='aboutpagecontainer-heading-line2'></div>
                </div>
                <div className='aboutpagecontainer-content'>
                    <p className='aboutpagecontainer-content-para'>
                        Meet our dynamic board of leaders who are committed to high standards of corporate governance.
                    </p>
                    <p className='aboutpagecontainer-content-para'>
                        The board members advocate the vision to excel in all the strategic goals of Vdhatri Homes. Their dedication and hard work have led to innovative and futuristic real estate projects and rapid business growth to Vdhatri Homes.
                    </p>
                    <div className='aboutpagecontainer-content-info1'>
                        <div className='aboutpagecontainer-content-info1-block1'>
                            <img src='/images/manager1.jpg' alt='' />
                            <p>MR. RAMA</p>
                            <p>MANAGING DIRECTOR</p>
                        </div>
                        <div className='aboutpagecontainer-content-info1-block2'>
                            <p>
                                MR. RAMA is the epitome of leadership at Vdhatri. His expertise and guidance play a key role which is evident in the growth of Vdhatri in becoming one of the most respected and sought after real estate developers in Telangana and Andhra Pradesh. With 3 decades of experience and proven competencies in real estate and various other sectors, Mr RAMA defines success at Vdhatri with his visionary leadership, ability to motivate the team and by effective management and delegation.
                            </p>
                        </div>
                    </div>
                    <div className='aboutpagecontainer-content-info2'>
                        <div className='aboutpagecontainer-content-info2-block1'>
                            <img src='/images/manager2.webp' alt='' />
                            <p>MR. KRISHNA</p>
                            <p>JT. MANAGING DIRECTOR</p>
                        </div>
                        <div className='aboutpagecontainer-content-info2-block2'>
                            <p>
                            MR. KRISHNA is deeply driven by the principles of financial sustainability, social impact, and innovation. His ability to think outside the box and convert challenging situations into advantage has always boosted business growth for Vdhatri. With nearly three decades of in-depth experience and knowledge in the real estate industry, Mr KRISHNA has a clear vision of growth for the company. As a Jt. managing Director.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
