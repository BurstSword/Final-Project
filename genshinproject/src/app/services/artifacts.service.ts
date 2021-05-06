import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArtifactPart, ResponseArtifact, ResponseArtifactPart } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  constructor(private _http: HttpClient) { }

  findSets() {
    return this._http.get<ResponseArtifact>(environment.databaseURL + "artifacts/findSets");

  }

  findNameFlower(idSet: string) {
    console.log(idSet);
    return this._http.post<ResponseArtifactPart>(environment.databaseURL + "artifacts/findPart", idSet);
  }

  findImg(name: string) {
    console.log(environment.assetsURL + `characters/${name}/portrait`);
    return this._http.get<any>(environment.assetsURL + `characters/${name}/portrait`);
  }
}
