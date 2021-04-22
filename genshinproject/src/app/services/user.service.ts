import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseUser, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }


  register(user: User) {
    return this._http.post<ResponseUser>(environment.databaseURL + "user/register", user);

  }

  login(user: User) {
    return this._http.post<ResponseUser>(environment.databaseURL + "user/login", user);

  }

}
