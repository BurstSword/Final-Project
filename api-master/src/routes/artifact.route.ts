import { Router } from "express"
import artifactController from "../controller/artifacts.controller"

const artifactRoutes = Router();

artifactRoutes.get('/findSets', artifactController.prototype.findAllSets);
artifactRoutes.get('/findSet', artifactController.prototype.findOneSet);

export default artifactRoutes;