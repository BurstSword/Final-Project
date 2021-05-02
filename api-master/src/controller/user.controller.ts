import { Request, Response } from "express"
import { User } from "../models/user.model";
import Token from "../classes/Token";
import bcrypt from "bcrypt"

class userController {

    register(req: Request, res: Response) {
        const saltRounds = 10;
        let params = req.body;
        bcrypt.hash(params.password, saltRounds, function (err, hash) {
            const newUser = new User();
            newUser.username = params.username;
            newUser.email = params.email;
            newUser.password = hash;
            User.create(newUser).then(userDB => {
                if (!userDB) {
                    return res.status(500).send({
                        status: 500,
                        message: "Error creating user",
                        error: err
                    })
                }
                return res.status(201).send({
                    status: 201,
                    message: "User created succesfully",
                    user: userDB
                })
            }).catch(err => {
                return res.status(500).send({
                    status: 500,
                    error: err,
                    message: "Problems with database"
                })
            });
        });
    }

    login(req: Request, res: Response) {
        const params = req.body;
        User.findOne({ username: params.username }).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Incorrect credentials"
                })
            }

            bcrypt.compare(params.password, userDB.password, function (err, result) {
                if (result == true) {
                    return res.status(200).send({
                        status: 200,
                        message: "Correctly logged",
                        user: userDB,
                        token: Token.generateToken(userDB)
                    })
                } else {
                    return res.status(500).send({
                        status: 500,
                        err: err,
                        message: "Incorrect credentials"
                    })
                }

            });

        }).catch(err => {
            return res.status(500).send({
                status: 500,
                message: "DB Error",
                error: err
            })
        })

    }
}

export default userController