import express from "express";

const app = express();
import secretRouter from "./routes/secret.js";

app.use("/api/v1", secretRouter);

app.listen(6000, () => {
  console.log("Server running on port 5000");
});
