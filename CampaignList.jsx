import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch the list of campaigns
    axios.get('/api/campaigns')
      .then(response => {
        setCampaigns(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Campaign List</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign.id}>
            {campaign.name} - Sent: {campaign.sent} - Failed: {campaign.failed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
