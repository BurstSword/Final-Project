import { Response, Request } from "express"
import { ArtifactSet } from "../models/artifacts.model";




class artifactController {


    findAllSets(_req: Request, res: Response) {

        ArtifactSet.find().then((ArtifactSetDB) => {
            if (!ArtifactSetDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            
            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: ArtifactSetDB
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
        ArtifactSet.findOne({ name: req.body.name }).then((ArtifactSetDB) => {
            if (!ArtifactSetDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: ArtifactSetDB
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

export default artifactController