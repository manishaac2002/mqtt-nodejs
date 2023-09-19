import mqtt from "mqtt";
// const mqtt = require('mqtt');

// Connect to the MQTT broker
const client = mqtt.connect('mqtt://tr.atrehealthtech.com');

// Handle connection events
client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Publish a message to a topic
  const topic = 'your/topic';
  const message = 'Hello, MQTT!';
  
  client.publish(topic, message, (err) => {
    if (!err) {
      console.log(`Published to ${topic}: ${message}`);
      client.end(); // Close the MQTT connection
    } else {
      console.error('Error publishing message:', err);
    }
  });
});

  // Subscribe to one or more topics
  const topics = ['your/topic'];
  
  client.subscribe(topics, (err) => {
    if (!err) {
      console.log(`Subscribed to topics: ${topics.join(', ')}`);
    } else {
      console.error('Error subscribing to topics:', err);
    }
  });


// Handle incoming messages
client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

