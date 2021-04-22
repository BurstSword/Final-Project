import { Request, Response } from "express"
import { Nation } from "../models/nations.model";



class nationsController {

    findAllNations(res: Response) {

        Nation.find().then((NationDB) => {
            if (!NationDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: NationDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "DB Error",
                error: err
            })
        })
    }

    createNation(req:Request, res:Response){
        let params = req.body;
        

        Nation.create(params).then(paramsDB => {
            if (!paramsDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Error creating Nation"
                })
            }
            return res.status(200).send({
                status: 200,
                message: "Nation created succesfully",
                nation: paramsDB
            })
        }).catch(err => {
            return res.status(500).send({
                status: 500,
                error: err
            })
        });
    }

}

export default nationsController