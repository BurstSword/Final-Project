import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArtifactPart, ArtifactSet, ResponseArtifact, ResponseArtifactPart, ResponseArtifactStat } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  constructor(private _http: HttpClient) { }

  findSets() {
    return this._http.get<ResponseArtifact>(environment.databaseURL + "artifacts/findSets");

  }
  findSetParts(artifactSet:ArtifactSet) {
    return this._http.post<ResponseArtifactPart>(environment.databaseURL + "artifacts/findPartsFromSet", artifactSet);

  }

  findStats(){
    return this._http.get<ResponseArtifactStat>(environment.databaseURL + "artifacts/findStats");
  }


}
