import React from 'react';
import './project.css';
import CardList from './cards/projectcards.js';
import useCounter from './useCounter.js';

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

const Project = () => {

  const completedProjects = data.filter(item => item.status === 'completed');
  const ongoingProjects = data.filter(item => item.status === 'ongoing');
  const upcomingProjects = data.filter(item => item.status === 'upcoming');

  const duration = 2000;

  const count1 = useCounter('100', duration);
  const count2 = useCounter('4', duration);
  const count3 = useCounter('10', duration);
  const count4 = useCounter('3', duration);
  const count5 = useCounter('1234', duration);

  const counters = [
    { count: count1, text: 'Sqft of Built Space' },
    { count: count2, text: 'Ongoing Projects' },
    { count: count3, text: 'Completed Projects' },
    { count: count4, text: 'Upcoming Projects' },
    { count: count5, text: 'Happy Families' }
  ];

  const formatCount = (count) => {
    if (count === 100) {
      return (count / 1).toFixed(0) + 'K+';
    }
    return count;
  };

  return (
    <div className='project'>
      <div className='projectheading'>
        <div className='projectheading-heading-line1'></div>
        <h1 className='projectheading-heading'>PROJECTS</h1>
        <div className='projectheading-heading-line2'></div>
      </div>

      <section className='aboutpagecontainer'>
        <div className='aboutpagestatus'>
          {counters.map((counter, index) => (
            <div key={index}>
              <h1>{formatCount(counter.count)}</h1>
              <p>{counter.text}</p>
            </div>
          ))}
        </div>
        <hr></hr>
      </section>

      <div className='projectcontent-upcoming'>
        <h1>UPCOMING PROJECTS</h1>
        <hr />
        <CardList data={upcomingProjects} />
      </div>

      <div className='projectcontent-ongoing'>
        <h1>ONGOING PROJECTS</h1>
        <hr />
        <CardList data={ongoingProjects} />
      </div>

      <div className='projectcontent-completed'>
        <h1>COMPLETED PROJECTS</h1>
        <hr />
        <CardList data={completedProjects} />
      </div>
    </div>

  )
}

export default Project
