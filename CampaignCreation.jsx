import React, { useState } from 'react';
import axios from 'axios';

const CampaignCreation = () => {
  const [audienceCriteria, setAudienceCriteria] = useState('');
  const [audienceSize, setAudienceSize] = useState(0);

  const handleCreateAudience = () => {
    // Logic to create audience and get size
    axios.post('/api/campaigns', { audienceCriteria })
      .then(response => {
        setAudienceSize(response.data.size);
      });
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <textarea
        value={audienceCriteria}
        onChange={(e) => setAudienceCriteria(e.target.value)}
        placeholder="Enter audience criteria"
      />
      <button onClick={handleCreateAudience}>Check Audience Size</button>
      <p>Audience Size: {audienceSize}</p>
      <button onClick={() => axios.post('/api/send-campaign', { audienceCriteria })}>
        Send Campaign
      </button>
    </div>
  );
};

export default CampaignCreation;
