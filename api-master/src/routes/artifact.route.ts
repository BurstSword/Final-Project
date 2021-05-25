import { Router } from "express"
import artifactSetController from "../controller/artifacts.controller"
import artifactPartController from "../controller/artifactparts.controller"
import artifactStatsController from "../controller/artifactstats.controller"

const artifactRoutes = Router();

artifactRoutes.get('/findSets', artifactSetController.prototype.findAllSets);
artifactRoutes.get('/findSet', artifactSetController.prototype.findOneSet);
artifactRoutes.post('/findPartsFromSet', artifactPartController.prototype.findAllPartsFromSet);
artifactRoutes.post('/findPartsFromType', artifactPartController.prototype.findAllPartsFromType);
artifactRoutes.get('/findPartsWithSet', artifactPartController.prototype.findAllPartsWithSet);
artifactRoutes.post('/findPartsWithSetByType', artifactPartController.prototype.findAllPartsWithSetByType);
artifactRoutes.get('/findStats', artifactStatsController.prototype.findAllStats);

export default artifactRoutes;