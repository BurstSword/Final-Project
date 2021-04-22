import { Router } from "express"
import userController from "../controller/user.controller"

const userRoutes = Router();

userRoutes.post('/register', userController.prototype.register);
userRoutes.post('/login', userController.prototype.login);

export default userRoutes;