import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

// Rxjs Library
import { Observable } from 'rxjs';

// Custom service
import { TokenService } from '../services/token.service';

// Header key
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  /**
   * 
   * @param _tokenService Custom service with the token logic
   */
  constructor(private _tokenService: TokenService) { }

  /**
   * 
   * @param req HttpRequest
   * @param next In an HttpInterceptor, the HttpHandler parameter is the next interceptor in the chain.
   * @returns a clone of the http request with the token
   * @description intercepts every http request to add the token in the header
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // The request is collected
    let authReq = req;
    
    // The token is collected from local storage
    const token = this._tokenService.getToken()
    
    // If there is a token, the request is cloned by inserting the token in the header
    if(token) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    
    // The request is returned
    return next.handle(authReq);
    
  }
}