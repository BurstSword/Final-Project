import { Router } from "express"
import characterController from "../controller/characters.controller"

const characterRoutes = Router();

characterRoutes.get('/findCharacters', characterController.prototype.findAllCharacters);
characterRoutes.post('/findCharactersByElement', characterController.prototype.findAllCharactersByElement);

export default characterRoutes;