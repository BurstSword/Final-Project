import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'elements'
})
export class ElementsPipe implements PipeTransform {

  transform(name: string): any {
    return environment.assetsURL + `elements/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/icon`
  }

}
