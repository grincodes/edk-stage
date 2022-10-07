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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlclRlc3Quc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy9jcmVhdGVVc2VyVGVzdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUV2QywwQ0FBMEM7QUFFMUMsd0NBQXdDO0FBQ3hDLG9GQUFvRjtBQUNwRix5REFBeUQ7QUFDekQsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixTQUFTO0FBRVQsd0NBQXdDO0FBQ3hDLFFBQVE7QUFDUiw0RUFBNEU7QUFDNUUsaUVBQWlFO0FBQ2pFLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsV0FBVztBQUVYLHFDQUFxQztBQUVyQywwQ0FBMEM7QUFDMUMsVUFBVTtBQUNWLHFFQUFxRTtBQUNyRSxpRUFBaUU7QUFDakUsaUNBQWlDO0FBQ2pDLG9DQUFvQztBQUNwQyx1Q0FBdUM7QUFDdkMsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QixXQUFXO0FBRVgsMENBQTBDO0FBQzFDLFNBQVM7QUFDVCxLQUFLIn0=