import { Component, OnInit } from '@angular/core';
import { Enemy } from 'src/app/interfaces';
import { EnemiesService } from 'src/app/services/enemies.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.css']
})
export class EnemiesComponent implements OnInit {

  constructor(private enemiesServices: EnemiesService) { this.loading = true; }
  public enemies: Enemy[];
  public enemySelected: Enemy;
  public loading: boolean;
  ngOnInit(): void {

    this.loadEnemies();

  }


  changeEnemy(name: string) {
    const res = this.enemies.find(ch => ch.name === name);
    this.enemySelected = res;
  }

  loadEnemies() {
    this.enemiesServices.findEnemies().subscribe(resp => {

      this.enemies = resp.enemies;
      this.enemySelected = this.enemies[0];
      this.loading = false;
    })
  }
}
