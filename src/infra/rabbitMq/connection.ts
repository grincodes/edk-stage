import amqp from "amqplib/callback_api"
import { isProduction } from "../../config"

const CONN_URL = isProduction ? process.env.RABBITMQ_CONNECTION_URL : process.env.RABBITMQ_DEV

let rabbitmqConnection = null
amqp.connect(CONN_URL, function (err, conn) {
  rabbitmqConnection = conn
})

process.on("exit", (code) => {
  rabbitmqConnection.close()
  console.log(`Closing rabbitmq channel`)
})

export { rabbitmqConnection }
