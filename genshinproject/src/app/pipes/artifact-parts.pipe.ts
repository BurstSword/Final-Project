import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'artifactParts'
})
export class ArtifactPartsPipe implements PipeTransform {

  transform(namePart: string, nameSet: string ): any {
    
    return environment.assetsURL + `artifacts/${nameSet.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/${namePart.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}`
  }

}
