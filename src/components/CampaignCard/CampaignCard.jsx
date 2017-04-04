import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './CampaignCard.css';

const CampaignCard = (props) => (
  <div className="campaign-card">
    <Link to="#"><img className="intro-img" alt={props.campaign.name} src={props.campaign.photo}/></Link>
    <img className="category-icon" alt={props.campaign.category} src={`/i/category-icons/${props.campaign.category}.png`}/>
    <div className="campaign-info">
      <div className="campaign-details">
        <Link className="no-link" to="#"><h2>{props.campaign.name}</h2></Link>
        <span className="campaign-date">{props.campaign.date}</span>
        <hr/>
        <span className="sponsored-by">Sponsored by</span>
        <div className="sponsors">
          {
            props.campaign.sponsors.map((sponsor, i) => <img key={i} alt={sponsor.name} src={`/i/sponsors/${sponsor.logo}`}/>)
          }
        </div>
        <div className="footer-links">
          <Link to="#">VIEW DETAILS</Link>
          <Link to="#">NOTIFY INTEREST</Link>
        </div>
      </div>
    </div>
  </div>
);

CampaignCard.propTypes = {
  campaign: PropTypes.object.isRequired
};

export default CampaignCard;
