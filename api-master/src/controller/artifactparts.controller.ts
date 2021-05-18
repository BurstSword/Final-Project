import { Response, Request } from "express"
import { ArtifactPart } from "../models/artifactsparts.model";




class artifactPartController {

    /**
     * Method to find 
     * @param req 
     * @param res 
     */
    findAllPartsFromSet(req: Request, res: Response) {
        
        ArtifactPart.find({idSet:req.body._id}).then((ArtifactPartDB) => {
            if (!ArtifactPartDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: ArtifactPartDB
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