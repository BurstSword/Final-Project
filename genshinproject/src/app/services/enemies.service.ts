import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseEnemies } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class EnemiesService {

  constructor(private _http:HttpClient) { }

  findEnemies() {
    return this._http.get<ResponseEnemies>(environment.databaseURL + "enemies/findEnemies");

  }
}
