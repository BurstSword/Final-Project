import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArtifactSet, ResponseArtifact, ResponseArtifactBuild, ResponseArtifactPart, ResponseArtifactStat } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  constructor(private _http: HttpClient) { }

  findSets() {
    return this._http.get<ResponseArtifact>(environment.databaseURL + "artifacts/findSets");

  }
  findSetParts(artifactSet: ArtifactSet) {
    return this._http.post<ResponseArtifactPart>(environment.databaseURL + "artifacts/findPartsFromSet", artifactSet);

  }

  findArtifacts(type: string) {
    return this._http.post<ResponseArtifactPart>(environment.databaseURL + "artifacts/findPartsFromType", { type: type });
  }

  findStats() {
    return this._http.get<ResponseArtifactStat>(environment.databaseURL + "artifacts/findStats");
  }

  findPartsWithSet() {
    return this._http.get<ResponseArtifactBuild>(environment.databaseURL + "artifacts/findPartsWithSet");
  }

  findPartsWithSetByType(type: string) {
    return this._http.post<ResponseArtifactBuild>(environment.databaseURL + "artifacts/findPartsWithSetByType", { type: type });
  }
}
