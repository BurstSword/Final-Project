import { Component, HostListener, OnInit } from '@angular/core';
import { Weapon } from 'src/app/interfaces';
import { WeaponsService } from 'src/app/services/weapons.service';
import animateScrollTo from 'animated-scroll-to';
@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  constructor(private weaponsService: WeaponsService) { this.loading = true; }
  public weapons: Weapon[]
  public weaponSelected: Weapon;
  public loading: boolean;
  public windowScrolled: boolean;
  ngOnInit(): void {
    this.loadWeapons()

  }

  loadWeapons() {
    this.weaponSelected = null;
    this.weapons = null;
    this.loading = true;
    this.weaponsService.findWeapons().subscribe(resp => {
      this.weapons = resp.weapons;
      this.weaponSelected = this.weapons[0];
      this.weaponSelected.rarityShow = parseInt(this.weaponSelected.rarity);
      this.loading = false;
    })
  }



  sortWeapons(type: string) {
    this.weaponSelected = null;
    this.weapons = null;
    this.loading = true;
    this.weaponsService.findWeaponsByType(type).subscribe(resp => {
      this.weapons = resp.weapons;
      this.weaponSelected = this.weapons[0];
      this.weaponSelected.rarityShow = parseInt(this.weaponSelected.rarity);
      this.loading = false;
    })
  }

  changeWeapon(weapon: Weapon) {
    this.weaponSelected = weapon;
    this.weaponSelected.rarityShow=parseInt(this.weaponSelected.rarity)
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
