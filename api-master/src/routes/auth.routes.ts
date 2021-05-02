import { Router } from "express";

import authentication from "../middlewares/auth";
import AuthController from "../controller/auth.controller";

const authRoutes = Router();

authRoutes.get("/renew", authentication, AuthController.prototype.renewToken);

export default authRoutes;