import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'constellation'
})
export class ConstellationPipe implements PipeTransform {

  transform(name: string, constellation:string): any {
    return environment.assetsURL + `characters/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/${constellation.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}`
  }

}
