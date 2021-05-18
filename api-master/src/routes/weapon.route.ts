import { Router } from "express"
import weaponController from "../controller/weapons.controller"

const weaponRoutes = Router();

weaponRoutes.get('/findWeapons', weaponController.prototype.findAllWeapons);
weaponRoutes.post('/findWeaponsByType', weaponController.prototype.findWeaponsByType);

export default weaponRoutes;