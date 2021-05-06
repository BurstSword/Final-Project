import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArtifactsService } from '../services/artifacts.service';

@Pipe({
  name: 'artifactSet'
})
export class ArtifactSetPipe implements PipeTransform {
  constructor(private artifactService:ArtifactsService){}
  transform(nameSet: string): any {
    var namePart="";
    return environment.assetsURL + `artifacts/${nameSet.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/${namePart.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}`
  }

}
