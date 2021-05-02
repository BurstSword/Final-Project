import { Response, Request } from "express"
import { ArtifactStat } from "../models/artifactstat.model";




class artifactStatsController {

    
    findAllStats(_req: Request, res: Response) {
        
        ArtifactStat.find().then((ArtifactStatDB) => {
            if (!ArtifactStatDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: ArtifactStatDB
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

export default artifactStatsController