import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export default class Token {
    private static data: dotenv.DotenvConfigOutput = dotenv.config();
    public static secret: string = Token.data.parsed!.SECRET;
    public static expiration: string = Token.data.parsed!.EXPIRATION;
    constructor() {

    }

    static generateToken(payload: any): string {
        const myToken = jwt.sign({
            user: payload
        }, this.secret, {
            expiresIn: this.expiration
        });
        return myToken;
    }

    static verifyToken(token: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, Token.secret, (err: any, decoded: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    }
}