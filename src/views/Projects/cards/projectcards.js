import React from 'react';
import "./projectcards.css";

const CardList = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div className="cards-list">
            {data.map((item, index) => (
                <div key={index} className="cards">
                    <img src={item.image} alt={item.projectname} className="cards-image" />
                    <div className="cards-details">
                        <span>| Project Name</span>
                        <h4>{item.projectname}</h4>
                        <span>| Category</span>
                        <p>{item.category}</p>
                        <p><i class="bi bi-geo-alt"></i>{item.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardList;
