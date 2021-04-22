import { Request, Response } from "express";

import Token from "../classes/token";
import { User } from "../models/user.model";

/**
 * @author JesÃºs Pinto Hermosell
 * @class AuthController
 */
class AuthController {
  /**
   *
   * @param req - Http request
   * @param resp - Http response
   * @returns Http response | token | user
   * @description Method to renew the token
   */
  async renewToken(req: Request, resp: Response) {
    // The user id is taken
    const _id = req.body._id;
    try {
      const userDB = await User.findOne({ _id });

      // If for some reason the id does not exist, an error is returned
      if (!userDB) {
        return resp.status(400).send({
          ok: false,
          msg: "User not found",
        });
      }
      
      // A new token and user data is returned
      resp.send({
        ok: true,
        token: Token.generateToken(req.body),
        user: userDB,
      });
    } catch (err: any) {
      resp.status(500).send({
        ok: false,
        msg: err,
      });
    }
  }
}

export default AuthController;