import { Router } from "express"
import enemyController from "../controller/enemies.controller"

const enemyRoutes = Router();

enemyRoutes.post('/findEnemies', enemyController.prototype.findAllEnemies);


export default enemyRoutes;