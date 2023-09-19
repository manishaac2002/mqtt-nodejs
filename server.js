import mqtt from "mqtt";

// Connect to the MQTT broker
const brokerUrl = 'mqtt://tr.atrehealthtech.com:1883'
const client = mqtt.connect(brokerUrl);

// Handle connection events
client.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Publish a message to a topic
  const topic = 'your_topic';
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
  const topics = ['your_topic'];
  
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

// const serverPort =1833
// server.listen(serverPort,()=>{

// })
