import { Router } from "express"
import BuildController from "../controller/build.controller"


const buildRoutes = Router();

buildRoutes.post('/insertBuild', BuildController.prototype.insertBuild);
buildRoutes.post('/findBuildsById', BuildController.prototype.findBuildsById);
buildRoutes.put('/updateBuild', BuildController.prototype.updateBuild);
buildRoutes.post('/removeBuild', BuildController.prototype.removeBuild);


export default buildRoutes;