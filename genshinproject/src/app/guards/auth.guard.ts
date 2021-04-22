// Angular imports
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Rxjs Library
import { tap } from 'rxjs/operators';

// Custom service
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * @constructor

   * @param _tokenService Custom service with the token logic
   */
  constructor(
    private _tokenService: TokenService) {};

  /**
   * @returns boolean
   * @description Check if the token is valid, if so, it will allow the user to access the route if it will not delete the token from local storage and remove it at login
   */
  canActivate() {
    return this._tokenService.validateToken().pipe(
      tap((auth) => {
        console.log(auth);
        !auth && this._tokenService.logout()
      })
    )
  }
  
}