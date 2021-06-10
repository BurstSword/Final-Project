import { Component, HostListener, OnInit } from '@angular/core';
import { Enemy } from 'src/app/interfaces';
import { EnemiesService } from 'src/app/services/enemies.service';
import animateScrollTo from 'animated-scroll-to';

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
  public windowScrolled: boolean;

  ngOnInit(): void {

    this.loadEnemies();

  }

/* Method to change enemy */
  changeEnemy(name: string) {
    const res = this.enemies.find(ch => ch.name === name);
    this.enemySelected = res;
  }

  /* Method to load enemies */
  loadEnemies() {
    this.enemiesServices.findEnemies().subscribe(resp => {

      this.enemies = resp.enemies;
      this.enemySelected = this.enemies[0];
      this.loading = false;
    })
  }

  /**
    * @function onWindowScroll - Method that listens for whether the user has scrolled the page
    */
   @HostListener('window:scroll', []) onWindowScroll(): void {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  /**
   * @function scrollToTop - Method to scroll to the top of the page
   */
  scrollToTop(): void {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
