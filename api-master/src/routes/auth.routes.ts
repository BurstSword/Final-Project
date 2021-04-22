import { Router } from "express";

import authentication from "../middlewares/auth";
import AuthController from "../controller/auth.controller";

// Specific auth route
const authRoutes = Router();

// Check if the token is valid, if so it will enter the controller and renew it
authRoutes.get("/renew", authentication, AuthController.prototype.renewToken);

export default authRoutes;