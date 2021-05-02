import { Response, Request } from "express"
import { Weapon } from "../models/weapon.model";



class weaponController {

    findAllWeapons(_req: Request, res: Response) {

        Weapon.find().then((WeaponDB) => {
            if (!WeaponDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Found!",
                artifacts: WeaponDB
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

export default weaponController