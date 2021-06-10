import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'weaponicon'
})
export class WeaponiconPipe implements PipeTransform {

  transform(name: string): any {
    return environment.assetsURL + `weaponsicons/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/icon`
  }

}
