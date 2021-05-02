import { Response, Request } from "express"
import { Enemy } from "../models/enemies.model";



class enemiesController {

    findAllEnemies(_req:Request, res: Response) {

        Enemy.find().then((EnemyDB) => {
            if (!EnemyDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: EnemyDB
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

export default enemiesController