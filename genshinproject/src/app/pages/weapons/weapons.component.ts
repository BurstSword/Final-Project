import { Component, OnInit } from '@angular/core';
import { Weapon } from 'src/app/interfaces';
import { WeaponsService } from 'src/app/services/weapons.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  constructor(private weaponsService: WeaponsService) { }
  public weapons: Weapon[]
  public weaponSelected: Weapon;
  public isLoaded: boolean;
  ngOnInit(): void {
    this.isLoaded = true;
    this.loadWeapons()
    setTimeout(this.loadWeaponsSlider, 1000)
  }

  loadWeapons() {
    this.weaponsService.findWeapons().subscribe(resp => {
      this.weapons = resp.weapons;
      console.log(this.weapons);
    })
  }

  loadWeaponsSlider() {
    const slider = document.getElementById("sliderWeapons");
    const loader = document.getElementById("loadingWeapons");
    loader.remove();
    slider.removeAttribute("hidden");
  }

  sortWeapons(type: string) {
    this.weaponsService.findWeaponsByType(type).subscribe(resp => {
      this.weapons = resp.weapons;
    })
  }
}
