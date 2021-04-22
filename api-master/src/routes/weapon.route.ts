import { Router } from "express"
import weaponController from "../controller/weapons.controller"

const weaponRoutes = Router();

weaponRoutes.get('/findWeapons', weaponController.prototype.findAllWeapons);
weaponRoutes.get('/insert', weaponController.prototype.insertAllEnemies);

export default weaponRoutes;