import { Response, Request } from "express"
import { Build } from "../models/build.model";




class BuildController {

    /**
     * Method to find 
     * @param req 
     * @param res 
     */
    insertBuild(req: Request, res: Response) {

        Build.create(req.body).then((BuildDB) => {
            if (!BuildDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Inserted!",
                builds: BuildDB
            })


        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "DB Error",
                error: err
            })
        })
    }

    removeBuild(req: Request, res: Response) {

        Build.remove({ _id: req.body._id }).then((BuildDB) => {
            if (!BuildDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Nothing on DB"
                })
            }

            return res.status(200).send({
                status: 200,
                message: "Inserted!",
                builds: BuildDB
            })


        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "DB Error",
                error: err
            })
        })
    }

    updateBuild(req: Request, res: Response) {

        Build.findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true }).populate({ path: 'bandanaId', populate: { path: 'idSet', select: 'name' } })
            .populate('characterId')
            .populate({ path: 'flowerId', populate: { path: 'idSet', select: 'name' } })
            .populate({ path: 'watchId', populate: { path: 'idSet', select: 'name' } })
            .populate({ path: 'gobletId', populate: { path: 'idSet', select: 'name' } })
            .populate({ path: 'featherId', populate: { path: 'idSet', select: 'name' } })
            .populate('weaponId').then((BuildDB) => {
                if (!BuildDB) {
                    return res.status(500).send({
                        status: 500,
                        message: "Nothing on DB"
                    })
                }

                return res.status(200).send({
                    status: 200,
                    message: "Inserted!",
                    builds: BuildDB
                })


            }).catch((err: any) => {
                return res.status(500).send({
                    status: 500,
                    message: "DB Error",
                    error: err
                })
            })
    }

    findBuildsById(_req: Request, res: Response) {

        Build.find({ idUser: _req.body.idUser }).populate({ path: 'bandanaId', populate: { path: 'idSet', select: 'name' } })
            .populate('characterId')
            .populate({ path: 'flowerId', populate: { path: 'idSet', select: 'name' } })
            .populate({ path: 'watchId', populate: { path: 'idSet', select: 'name' } })
            .populate({ path: 'gobletId', populate: { path: 'idSet', select: 'name' } })
            .populate({ path: 'featherId', populate: { path: 'idSet', select: 'name' } })
            .populate('weaponId')
            .then((BuildDB) => {
                if (!BuildDB) {
                    return res.status(500).send({
                        status: 500,
                        message: "Nothing on DB"
                    })
                }

                return res.status(200).send({
                    status: 200,
                    message: "Found!",
                    builds: BuildDB
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

export default BuildController