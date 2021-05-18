import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'enemyImg'
})
export class EnemyImgPipe implements PipeTransform {

  transform(name: string): any {
    return environment.assetsURL + `enemies/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/icon`
  }

}
