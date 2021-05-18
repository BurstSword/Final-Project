import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'weaponsImg'
})
export class WeaponsImgPipe implements PipeTransform {

  transform(name: string): any {
    return environment.assetsURL + `weapons/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/icon`
  }

}
