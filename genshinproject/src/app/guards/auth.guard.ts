import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(
    private _tokenService: TokenService) {};

  
  canActivate() {
    return this._tokenService.validateToken().pipe(
      tap((auth) => {
        !auth && this._tokenService.logout()
      })
    )
  }
  
}