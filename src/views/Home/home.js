import React, { useEffect, useRef } from 'react';
import './home.css';
import CarouselCards from './carousel/carouselcards';

const data = [
  {
    "image": "/images/homecarousel1.webp",
    "status": "completed",
    "projectname": "Vdhatri Homes",
    "category": "Premium Villas",
    "location": "Hyderabad"
  },
  {
    "image": "/images/homecarousel2.webp",
    "status": "ongoing",
    "projectname": "Vdhatri Apartments",
    "category": "2 & 3 BHK Apartments",
    "location": "Vijayawada"
  },
  {
    "image": "/images/homecarousel3.jpg",
    "status": "ongoing",
    "projectname": "Vdhatri Villa",
    "category": "Premium Villas",
    "location": "Nallagandla"
  },
  {
    "image": "/images/homecarousel1.webp",
    "status": "upcoming",
    "projectname": "Vdhatri Homes",
    "category": "Premium Villas",
    "location": "Hyderabad"
  },
  {
    "image": "/images/homecarousel2.webp",
    "status": "completed",
    "projectname": "Vdhatri Apartments",
    "category": "2 & 3 BHK Apartments",
    "location": "Nallagandla"
  },
  {
    "image": "/images/homecarousel3.jpg",
    "status": "upcoming",
    "projectname": "Vdhatri Apartments",
    "category": "2 & 3 BHK Apartments",
    "location": "Vijayawada"
  },
];

const Home = () => {

  const completedProjects = data.filter(item => item.status === 'completed');
  const ongoingProjects = data.filter(item => item.status === 'ongoing');
  const upcomingProjects = data.filter(item => item.status === 'upcoming');

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, []);

  const videoRef1 = useRef(null);
  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.play();
      videoRef1.current.loop = true;
    }
  }, []);

  return (
    <div className='home'>
      <div className='home-hero'>
        <video ref={videoRef} muted>
          <source src="/videos/homevideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Home Reputation */}
      <section className='home-reputation'>
        <div className='home-reputation-heading'>
          <div className='home-reputation-heading-line1'></div>
          <div className='home-reputation-heading-h1'>REPUTATION BUILT ON PERFORMANCE</div>
          <div className='home-reputation-heading-line2'></div>
        </div>
        <div className='home-reputation-content'>
          <div className='home-reputation-content-image'>
            <img src="/images/reputationicon.webp" alt="" />
          </div>
          <div className='home-reputation-content-vision'>
            <div className='home-reputation-content-vision-block1'>
              <img src='/images/visionicon.png' alt='' />
              <h3>VISION</h3>
            </div>
            <div className='home-reputation-content-vision-block2'>
              <p>
                We envision revolutionizing the real estate industry by setting new benchmarks that redefine lifestyles in terms of community living and customer delight.
              </p>
            </div>
          </div>
          <div className='home-reputation-content-mission'>
            <div className='home-reputation-content-mission-block1'>
              <img src='/images/missionicon.png' alt='' />
              <h3>MISSION</h3>
            </div>
            <div className='home-reputation-content-mission-block2'>
              <p>
                At Vertex, we constantly strive to create futuristic and environment-friendly living spaces that foster vibrant communities across the country by adopting latest trends, advanced infrastructure and superior lifestyle. We aspire to foster strong relationships strengthened by the key values of unwavering trust and quality of construction.
              </p>
            </div>
          </div>
          <div className='home-reputation-content-values'>
            <div className='home-reputation-content-values-block1'>
              <img src='/images/valuesicon.png' alt='' />
              <h3>VALUES</h3>
            </div>
            <div className='home-reputation-content-values-block2'>
              <p>
                Integrity is the primary core value we adhere to that makes us do the right thing the right way. Trust and Quality are our other core values that are earned by honesty, positive intent, strong competencies, and a proven track record of results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Projects */}
      <section className='home-project'>
        <div className='home-project-heading'>
          <div className='home-project-heading-line1'></div>
          <div className='home-project-heading-h1'>OUR PROJECTS</div>
          <div className='home-project-heading-line2'></div>
        </div>
        <div className='home-project-content'>
          <div className='home-project-content-readytomove'>
            <div className='home-project-content-readytomove-button'>
              <h3>READY TO MOVE</h3>
            </div>
            <div>
              {completedProjects.length > 0 ? <CarouselCards data={completedProjects} /> : <p>No completed projects</p>}
            </div>
          </div>
          <div className='home-project-content-ongoing'>
            <div className='home-project-content-ongoing-button'>
              <h3>ONGOING</h3>
            </div>
            <div>
              {ongoingProjects.length > 0 ? <CarouselCards data={ongoingProjects} /> : <p>No ongoing projects</p>}
            </div>
          </div>
          <div className='home-project-content-upcoming'>
            <div className='home-project-content-upcoming-button'>
              <h3>UPCOMING</h3>
            </div>
            <div>
              {upcomingProjects.length > 0 ? <CarouselCards data={upcomingProjects} /> : <p>No upcoming projects</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Home About */}
      <section className='home-about'>
        <div className='home-about-heading'>
          <div className='home-about-heading-line1'></div>
          <div className='home-about-heading-h1'>CORPORATE VIDEO</div>
          <div className='home-about-heading-line2'></div>
        </div>

        <div className='home-about-content'>
          <div className='home-about-content-image'>
            <video ref={videoRef1} muted>
              <source src="/videos/about-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className='home-about-content-para'>
            <span>Some things are meant for a lifetime</span>
            <p>
              Established in 1994, Vdhatri has grown to become one of the leading real estate companies featuring luxury villas, Premium apartments and premium plotting ventures across Hyderabad. Vdhatri takes immense pride in its solid reputation and durable relationships built on quality constructions, on-time delivery, performance and trust.
            </p>
            <p>
              Over the course of two decades, Vdhatri has continued its legacy with proven competencies in a large number of residential and commercial projects .
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
