import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseCharacter } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _http: HttpClient) { }


  findCharacters() {
    return this._http.get<ResponseCharacter>(environment.databaseURL + "characters/findCharacters");

  }

  findImg(name:string){
    return this._http.get<any>(environment.assetsURL + `characters/${name}/portrait`);
  }
}
