import { Router } from "express"
import weaponController from "../controller/weapons.controller"

const weaponRoutes = Router();

weaponRoutes.get('/findWeapons', weaponController.prototype.findAllWeapons);

export default weaponRoutes;