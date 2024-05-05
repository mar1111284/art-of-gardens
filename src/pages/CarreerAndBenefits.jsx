import React from 'react';

import ProfileCEO from "../assets/shared/ceo.jpeg"

const CarreerAndBenefits = () => {
    return (
        <div className='carreerAndBenefits-container'>

            <h2>Career and Benefits</h2>

            <h3>Join Our Team, We are Hiring!</h3>

            <h4>Current Job Openings:</h4>
            <ul>
                <li><b>Landscape Designer:</b> We're seeking a talented landscape designer to join our team in Northern Sydney. The ideal candidate will have experience in designing outdoor spaces and creating beautiful landscapes that enhance the natural surroundings. Responsibilities include collaborating with clients to understand their needs, creating design proposals, and overseeing projects from concept to completion.</li>
                <li><b>Garden Maintenance Technician:</b> We're looking for dedicated garden maintenance technicians to help maintain and care for our clients' outdoor spaces. Responsibilities include mowing, pruning, weeding, fertilizing, and general garden upkeep. The ideal candidate will have experience in horticulture or landscaping and a passion for plants and outdoor environments.</li>
            </ul>

            <h3>Company Culture:</h3>
            <p>At Northern Sydney Landscaping, we are passionate about creating and maintaining beautiful outdoor spaces that enhance the lives of our clients. Our team is driven by a love for nature and a commitment to delivering exceptional service. We pride ourselves on our attention to detail, creativity, and professionalism in everything we do.</p>
            <h3>Employee Benefits:</h3>
            <ul>
                <li><b>Health Insurance:</b> Comprehensive medical coverage for employees and their families, including dental and vision benefits.</li>
                <li><b>Retirement Plan:</b> Company-matched retirement savings plan to help employees plan for the future and secure their financial well-being.</li>
                <li><b>Paid Time Off:</b> Generous vacation and sick leave policies to support work-life balance and ensure employees have time to recharge and enjoy life outside of work.</li>
                <li><b>Training and Development:</b> Opportunities for ongoing training and development to help employees grow and advance in their careers. We provide workshops, seminars, and certification programs to enhance skills and knowledge in landscaping and related areas.</li>
            </ul>
            <p>Come join us and be a part of creating stunning outdoor landscapes across Northern Sydney! If you're passionate about nature, creativity, and making a positive impact in your community, we'd love to hear from you. Apply today to join our team of dedicated professionals!</p>
            
            <div className='profil-container'>
                <img className='ceo-image' src={ProfileCEO} alt="CEO profile picture"></img>
                <p><i>John Doe, CEO of Art and Gardens</i></p>
            </div>
        
        </div>
    );
};
  
export default CarreerAndBenefits;
