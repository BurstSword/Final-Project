// Angular imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs Library
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Environment Variables
import { environment } from 'src/environments/environment';

// Custom interfaces
import { ResponseUser, User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  /**
   * @public

   * @type {IUser}

   * @description global user object
   */
  public user: User;

  /**
   * @constructor

   * @param _http Performs HTTP requests
   * @param _router A service that provides navigation among views and URL manipulation capabilities
   */
  constructor(private _http: HttpClient, private _router: Router) {}

  /**
   * @returns the token saved in local storage if it exists if it does not return null
   */
  getToken(): string {
    return localStorage.getItem('token');
  }

  /**
   *
   * @returns boolean
   * @description true if the token is valid saving the new token and the user, if it does not return false
   */
  validateToken(): Observable<boolean> {
    return this._http.get<ResponseUser>(`${environment.databaseURL}auth/renew`).pipe(
      map((resp) => {
        this.user = resp.user;
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', resp.user._id);
        return true;
      }),
      catchError(() => of(false))
    );
  }

  // Method to clear the token from local storage and return the user to login
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigateByUrl('/login');
  }
}