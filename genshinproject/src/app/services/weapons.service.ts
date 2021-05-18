import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseWeapon } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor(private _http: HttpClient) { }

  findWeapons() {
    return this._http.get<ResponseWeapon>(environment.databaseURL + "weapons/findWeapons");
  }

  findWeaponsByType(type: string) {
    return this._http.post<ResponseWeapon>(environment.databaseURL + "weapons/findWeaponsByType", { type: type });
  }
}
