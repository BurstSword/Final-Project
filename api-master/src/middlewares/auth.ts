import { NextFunction, Request, Response } from "express";
import Token from "../classes/token";


const authentication = (req: Request, resp: Response, next: NextFunction) => {
  let userToken: string = req.get("Authorization") || "";

  if (userToken !== "") {
    userToken = userToken.split("Bearer ")[1];
  }

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