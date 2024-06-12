// server.js
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const connection = require('./db');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const redisClient = redis.createClient();
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Data ingestion API
app.post('/api/customers', (req, res) => {
  const { name, email } = req.body;
  redisClient.publish('customer_data', JSON.stringify({ name, email }), () => {
    res.status(201).send('Customer data published');
  });
});

app.post('/api/orders', (req, res) => {
  const { customerId, amount } = req.body;
  redisClient.publish('order_data', JSON.stringify({ customerId, amount }), () => {
    res.status(201).send('Order data published');
  });
});

// Campaign creation API
app.post('/api/campaigns', (req, res) => {
  const { audienceCriteria } = req.body;
  // Logic to create audience based on criteria and store in communications_log
  res.status(201).send('Campaign created');
});

// Send campaign API
app.post('/api/send-campaign', (req, res) => {
  const { communicationLogId } = req.body;
  // Logic to send campaign and hit Delivery Receipt API
  res.status(200).send('Campaign sent');
});

// Delivery Receipt API
app.post('/api/delivery-receipt', (req, res) => {
  const { communicationLogId, status } = req.body;
  // Logic to update communication log with status
  res.status(200).send('Delivery status updated');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
