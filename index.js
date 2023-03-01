import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());
// import each routers
import userRouter from "./api/users/user_router.js";
import customerRouter from "./api/customer/customer_route.js";
import serviceRouter from "./api/services/service_route.js";
import settingRouter from "./api/setting/setting_route.js";
import featureRouter from "./api/feature/feature_route.js";
import aboutRouter from "./api/about/about_route.js";
import messageRouter from "./api/messages/message_route.js";

// get  router
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/customers/", customerRouter);
app.use("/api/v1/services/", serviceRouter);
app.use("/api/v1/settings/", settingRouter);
app.use("/api/v1/features/", featureRouter);
app.use("/api/v1/about/", aboutRouter);
app.use("/api/v1/messages/", messageRouter);

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log("SERVER RUNNING ON PORT " + port);
});
