// consumer.js
const redis = require('redis');
const connection = require('./db');

const client = redis.createClient();

client.on('message', (channel, message) => {
  const data = JSON.parse(message);
  if (channel === 'customer_data') {
    const query = 'INSERT INTO customers (name, email) VALUES (?, ?)';
    connection.query(query, [data.name, data.email]);
  } else if (channel === 'order_data') {
    const query = 'INSERT INTO orders (customer_id, amount) VALUES (?, ?)';
    connection.query(query, [data.customerId, data.amount]);
  }
});

client.subscribe('customer_data');
client.subscribe('order_data');
