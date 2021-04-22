import { Router } from "express"
import nationController from "../controller/nations.controller"

const nationRoutes = Router();

nationRoutes.post('/createNation', nationController.prototype.createNation);
nationRoutes.get('/findNations', nationController.prototype.findAllNations);

export default nationRoutes;