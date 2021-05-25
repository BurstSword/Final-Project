import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/interfaces';
import { WeaponsService } from 'src/app/services/weapons.service';

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
      this.loading = false;
    })
  }

  changeWeapon(weapon: Weapon) {
    this.weaponSelected = weapon;
  }

}
