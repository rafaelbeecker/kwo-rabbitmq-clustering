const amqplib = require("amqplib");

(async () => {
  console.log("[INF]: conecting...");

  const conn = await amqplib.connect(process.env.RABBITMQ_URL);
  const chn = await conn.createChannel();

  console.log("[INF]: conected, waiting for messages...");

  await chn.consume("three.queue", (msg) => {
    try {
      chn.ack(msg);
      const data = msg.content.toString();
      console.log(data);
    } catch (e) {
      console.log(e);
      chn.nack(msg);
    }
  });
})();
