import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import compression from "compression"
import { v1Router } from "./api/v1"
import { isProduction } from "../../config"

const app = express()

const origin = {
  origin: isProduction ? "https://" : "*",
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(origin))
app.use(compression())
app.use(helmet())
app.use(morgan("combined"))

app.use("/api/v1", v1Router)

// New api versions can go here

app.listen(process.env.PORT || 4000, () => {
  console.log(`[App]: Server listening on 4000`)
})

export { app }
