import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'dropsImg'
})
export class DropsImgPipe implements PipeTransform {

  transform(dropItem: string, enemyName: string ): any {
    
    return environment.assetsURL + `drops/${enemyName.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}/${dropItem.toLowerCase().replace(/[^A-Z0-9]+/ig, "")}`
  }

}
