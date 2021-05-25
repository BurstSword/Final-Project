import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'buildArtifacts'
})
export class BuildArtifactsPipe implements PipeTransform {

  transform(nameArtifact: string): any {
    return environment.assetsURL + `imgs/${nameArtifact.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}`
  }

}
