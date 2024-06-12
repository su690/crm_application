import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CampaignCreation from './CampaignCreation';
import CampaignList from './CampaignList';

const Dashboard = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/create-campaign">Create Campaign</Link></li>
          <li><Link to="/campaigns">Campaign List</Link></li>
        </ul>
      </nav>

      <Route path="/create-campaign" component={CampaignCreation} />
      <Route path="/campaigns" component={CampaignList} />
    </div>
  </Router>
);

export default Dashboard;
