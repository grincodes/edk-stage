import express from "express"
import { deliveryPartnerRouter } from "../../../modules/delivery_partners/infra/http/routes"
import { productRouter } from "../../../modules/products/infra/http/routes"
import { shopRouter } from "../../../modules/shop/infra/http/routes"
import { userRouter } from "../../../modules/users/infra/http/routes"

const v1Router = express.Router()

v1Router.get("/", (req, res) => {
  return res.json({ message: "Yo! we're up" })
})

v1Router.use("/user", userRouter)
v1Router.use("/shop", shopRouter)
v1Router.use("/product", productRouter)
v1Router.use("/delivery_partner", deliveryPartnerRouter)

export { v1Router }
