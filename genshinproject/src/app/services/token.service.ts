import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseUser, User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  
  public user: User;

  
  constructor(private _http: HttpClient, private _router: Router) { }

  
  getToken(): string {
    return localStorage.getItem('token');
  }

  
  validateToken(): Observable<boolean> {
    return this._http.get<ResponseUser>(`${environment.databaseURL}auth/renew`).pipe(
      map((resp) => {
        this.user = resp.user;
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        return true;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigateByUrl('/login');
  }
}