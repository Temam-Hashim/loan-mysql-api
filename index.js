import dotenv from "dotenv";
import express from "express";
const app = express();
app.use(express.json());
dotenv.config();
// import each routers
import userRouter from "./api/users/user_router.js";
import customerRouter from "./api/customer/customer_route.js";
import serviceRouter from "./api/services/service_route.js";

// get  router
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/customers/", customerRouter);
app.use("/api/v1/services/", serviceRouter);

const port = process.env.SERVER_PORT;
app.listen(port && "5010", () => {
  console.log("SERVER RUNNING ON PORT " + port);
});