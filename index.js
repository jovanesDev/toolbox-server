import express from "express";
import cors from "cors";
import router from "./router/routes.js";
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use("/api", router);
app.listen(port, () => {
  console.log(`La app esta corriendo en el puerto : ${port}`);
});
