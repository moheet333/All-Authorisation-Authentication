import express from "express";
const router = express.Router();
import { getSecret } from "../controllers/secret.js";
import { basicAuth } from "../middleware/basicAuth.js";

router.route("/secret").get(basicAuth, getSecret);

export default router;
