// const request = require("supertest")

// import { app } from "../infra/http/app"

// describe("POST /api/v1/user", () => {
//   it("Should Respond with 500 if any of inputs fields are invalid", async () => {
//     const response = request(app).post("/user").send({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       role: ""
//     })

//     expect(response.status).toBe(500)
//   }),
//     it("Should Respond with 409 if Account Already Exists", async () => {
//       const response = await request(app).post("/user").send({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         role: ""
//       })

//       console.log(response.status)

//       expect(response.status).toBe(404)
//     }),
//     it("Should Respond with 201 if Account Created", async () => {
//       const response = await request(app).post("/user").send({
//         firstName: "testuser",
//         lastName: "testuserlast",
//         email: "testuser@gmail.com",
//         password: "12345",
//         role: "user"
//       })

//       expect(response.status).toBe(201)
//     })
// })
