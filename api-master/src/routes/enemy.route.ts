import { Router } from "express"
import enemyController from "../controller/enemies.controller"

const enemyRoutes = Router();

enemyRoutes.get('/findEnemies', enemyController.prototype.findAllEnemies);


export default enemyRoutes;