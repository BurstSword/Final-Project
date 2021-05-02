import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'characterimage'
})
export class CharacterimagePipe implements PipeTransform {

  constructor() { }
  transform(name: string): any {
    return environment.assetsURL + `characters/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/icon`
  }

}
