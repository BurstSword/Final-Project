import { Component, OnInit } from '@angular/core';
import { Enemy } from 'src/app/interfaces';
import { EnemiesService } from 'src/app/services/enemies.service';

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.css']
})
export class EnemiesComponent implements OnInit {

  constructor(private enemiesServices: EnemiesService) { }
  public enemies: Enemy[];
  public enemySelected: Enemy;
  public isLoaded: boolean;
  ngOnInit(): void {
    this.isLoaded = true;
    this.loadEnemies();
    setTimeout(this.loadEnemySlider, 1000)

  }
  loadEnemySlider() {
    const slider = document.getElementById("sliderEnemies");
    const loader = document.getElementById("loadingEnemies");
    loader.remove();
    slider.removeAttribute("hidden");
  }

  changeEnemy(name: string) {
    const res = this.enemies.find(ch => ch.name === name);
    this.enemySelected = res;
    console.log(this.enemySelected);
  }

  loadEnemies() {
    this.enemiesServices.findEnemies().subscribe(resp => {
      console.log(resp);
      this.enemies = resp.enemies;
      console.log(this.enemies);
    })
  }
}
