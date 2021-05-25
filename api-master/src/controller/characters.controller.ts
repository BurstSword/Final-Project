import { Response, Request } from "express"
import { Character } from "../models/characters.model";



class characterController {

    findAllCharacters(_req: Request, res: Response) {

        Character.find().then((CharacterDB) => {
            if (!CharacterDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                characters: CharacterDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "DB Error",
                error: err
            })
        })
    }

    findAllCharactersByElement(_req: Request, res: Response) {
        const element: string = _req.body.element;
        Character.find({ vision_key: element.toUpperCase() }).then((CharacterDB) => {
            if (!CharacterDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                characters: CharacterDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "DB Error",
                error: err
            })
        })
    }

}

export default characterController