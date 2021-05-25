import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Build, BuildShow, ResponseBuild, ResponseUpdate } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BuildServiceService {

  constructor(private _http: HttpClient) { }

  insertBuild(build: Build) {
    return this._http.post(environment.databaseURL + `build/insertBuild`, build);
  }

  findBuildsById(idUser: string) {
    return this._http.post<ResponseBuild>(environment.databaseURL + `build/findBuildsById`, { idUser: idUser });
  }

  updateBuild(build: Build) {
    return this._http.put<ResponseUpdate>(environment.databaseURL + `build/updateBuild`, build);
  }
  removeBuild(id: string) {
    return this._http.post<ResponseBuild>(environment.databaseURL + `build/removeBuild`, { _id: id });
  }
}
