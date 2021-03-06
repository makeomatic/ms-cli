const AMQPTransport = require('@microfleet/transport-amqp');

// eslint-disable-next-line object-curly-newline
module.exports = function disposer({ host, port, login, password }) {
  return AMQPTransport
    .connect({
      privateQueueOpts: {
        exclusive: true,
        durable: false,
        arguments: {},
      },
      dlx: {
        enabled: false,
      },
      connection: {
        host,
        port,
        login,
        password,
      },
    })
    .timeout(10000)
    .disposer(amqp => amqp.close());
};
