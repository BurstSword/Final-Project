import { NextFunction, Request, Response } from "express";
import Token from "../classes/token";

/**
 *
 * @param req - Http Request
 * @param resp - Http Response
 * @param next - the next function allows to jump to the next middleware or to the controller
 * @returns Http response with and error or the user id
 * @description Middleware which validates any http request with the user's token
 */
const authentication = (req: Request, resp: Response, next: NextFunction) => {
  // It checks if the Authorization header comes and save the token
  let userToken: string = req.get("Authorization") || "";

  // If it exists, it removes the bearer keyword
  if (userToken !== "") {
    userToken = userToken.split("Bearer ")[1];
  }

  // It is verified if the token is valid, if so, the user's 'id' will have been decoded and saved in the body of the request
  Token.verifyToken(userToken)
    .then((decoded: any) => {
      req.body = decoded.user;
      next();
    })
    .catch((err) => {
      resp.status(500).send({
        ok: false,
        msg: err,
      });
    });
};

export default authentication;