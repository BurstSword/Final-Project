import { Response, Request } from "express"
import { ArtifactPart } from "../models/artifactsparts.model";




class artifactPartController {

    /**
     * Method to find 
     * @param req 
     * @param res 
     */
    findAllSets(req: Request, res: Response) {

        ArtifactPart.find().then((ArtifactDB) => {
            if (!ArtifactDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: ArtifactDB
            })


        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "DB Error",
                error: err
            })
        })
    }
    findOneSet(req: Request, res: Response) {
        ArtifactPart.findOne({ name: req.body.name }).then((ArtifactDB) => {
            if (!ArtifactDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: ArtifactDB
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

export default artifactPartController