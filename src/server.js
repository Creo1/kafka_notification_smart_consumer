const app = require("./app");
const config = require("./config/config");
const { runConsumer } = require('./services/kafkaService');

const PORT = config.development.port || 3002;

// Start Kafka consumer
runConsumer().catch(console.error);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
