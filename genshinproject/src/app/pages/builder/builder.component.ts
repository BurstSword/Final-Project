import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtifactPartBuild, ArtifactStat, Build, Character, User, Weapon } from 'src/app/interfaces';
import { ArtifactsService } from 'src/app/services/artifacts.service';
import { BuildServiceService } from 'src/app/services/build-service.service';
import { CharacterService } from 'src/app/services/character.service';
import { WeaponsService } from 'src/app/services/weapons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(private characterService: CharacterService, private router: Router, private weaponService: WeaponsService, private artifactService: ArtifactsService, private buildService: BuildServiceService) { }
 /* Variables */
  public characters: Character[];
  public characterSelected: Character;
  public buildToSend: Build;
  public weaponSelected: Weapon;
  public weapons: Weapon[];
  public windowScrolled: boolean;
  public flowers: ArtifactPartBuild[];
  public goblets: ArtifactPartBuild[];
  public watches: ArtifactPartBuild[];
  public bandanas: ArtifactPartBuild[];
  public feathers: ArtifactPartBuild[];

  public flowerSelected: ArtifactPartBuild;
  public gobletsSelected: ArtifactPartBuild;
  public watchesSelected: ArtifactPartBuild;
  public bandanasSelected: ArtifactPartBuild;
  public feathersSelected: ArtifactPartBuild;



  public stats: ArtifactStat[];

  ngOnInit(): void {
    this.loadCharacters();
    this.loadArtifacts();
    this.loadStats();
    this.loadWeapons("Sword");
  }
/* Method to load characters */
  loadCharacters() {
    this.characterService.findCharacters().subscribe(resp => {
      this.characters = resp.characters;
      this.characterSelected = resp.characters[0];
    })
  }
/* Method to load weapons */
  loadWeapons(type: string) {
    this.weaponService.findWeaponsByType(type).subscribe(resp => {
      this.weapons = resp.weapons;
      this.weaponSelected = resp.weapons[0];
    })
  }
/* Method to change the selected character */
  changeCharacter(character: Character) {
    this.characterSelected = character;

    this.weaponService.findWeaponsByType(character.weapon).subscribe(resp => {
      this.weapons = resp.weapons;
      this.weaponSelected = this.weapons[0];
    })

    

  }

/* Method to change the selected weapon */
  changeWeapon(weapon: Weapon) {
    this.weaponSelected = weapon;
  }

  /* Method to load artifacts */
  loadArtifacts() {
    this.artifactService.findPartsWithSetByType("flower").subscribe(resp => {
      this.flowers = resp.artifacts;
      this.artifactService.findStats().subscribe(resp => {
        this.flowers.forEach(flower => {
          resp.artifacts.forEach(stat => {
            if (flower.type == stat.type) {
              flower.stats = stat.stats
            }
          })
        })
      })
      this.flowerSelected = resp.artifacts[0];
    })
    this.artifactService.findPartsWithSetByType("goblet").subscribe(resp => {
      this.goblets = resp.artifacts;
      this.artifactService.findStats().subscribe(resp => {
        this.goblets.forEach(goblet => {
          resp.artifacts.forEach(stat => {
            if (goblet.type == stat.type) {
              goblet.stats = stat.stats
            }
          })
        })
      })
      this.gobletsSelected = resp.artifacts[0];
    })
    this.artifactService.findPartsWithSetByType("watch").subscribe(resp => {
      this.watches = resp.artifacts;
      this.artifactService.findStats().subscribe(resp => {
        this.watches.forEach(watch => {
          resp.artifacts.forEach(stat => {
            if (watch.type == stat.type) {
              watch.stats = stat.stats
            }
          })
        })
      })
      this.watchesSelected = resp.artifacts[0];
    })
    this.artifactService.findPartsWithSetByType("feather").subscribe(resp => {
      this.feathers = resp.artifacts;
      this.artifactService.findStats().subscribe(resp => {
        this.feathers.forEach(feather => {
          resp.artifacts.forEach(stat => {
            if (feather.type == stat.type) {
              feather.stats = stat.stats
            }
          })
        })
      })
      this.feathersSelected = resp.artifacts[0];
    })
    this.artifactService.findPartsWithSetByType("bandana").subscribe(resp => {
      this.bandanas = resp.artifacts;
      this.artifactService.findStats().subscribe(resp => {
        this.bandanas.forEach(bandana => {
          resp.artifacts.forEach(stat => {
            if (bandana.type == stat.type) {
              bandana.stats = stat.stats
            }
          })
        })
      })
      this.bandanasSelected = resp.artifacts[0];
    })
  }

  /* Methods to change every artifact */
  changeFlower(flower: ArtifactPartBuild) {
    this.flowerSelected.stat = "";
    this.flowerSelected = flower
  }
  changeGoblet(goblet: ArtifactPartBuild) {
    this.gobletsSelected = goblet
  }
  changeFeather(feather: ArtifactPartBuild) {
    this.feathersSelected = feather
  }
  changeBandana(bandana: ArtifactPartBuild) {
    this.bandanasSelected = bandana
  }
  changeWatch(watch: ArtifactPartBuild) {
    this.watchesSelected = watch
  }

  /* Methods to change artifacts stats */
  selectFlowerStat(stat: string) {
    this.flowerSelected.stat = stat;
  }

  selectGobletStat(stat: string) {
    this.gobletsSelected.stat = stat;
  }

  selectWatchStat(stat: string) {
    this.watchesSelected.stat = stat;
  }
  selectFeatherStat(stat: string) {
    this.feathersSelected.stat = stat;
  }
  selectBandanaStat(stat: string) {
    this.bandanasSelected.stat = stat;
  }
/* Method to load stats */
  loadStats() {
    this.artifactService.findStats().subscribe(resp => {
      this.stats = resp.artifacts;
    })
  }

  /* Method to send build to DB */
  sendBuild() {
    const user: User = JSON.parse(localStorage.getItem("user"))

    this.buildToSend = {
      bandanaId: this.bandanasSelected._id,
      bandanaStat: this.bandanasSelected.stat,
      characterId: this.characterSelected._id,
      featherId: this.feathersSelected._id,
      featherStat: this.feathersSelected.stat,
      flowerId: this.flowerSelected._id,
      flowerStat: this.flowerSelected.stat,
      gobletId: this.gobletsSelected._id,
      gobletStat: this.gobletsSelected.stat,
      idUser: user._id,
      name: (<HTMLInputElement>document.getElementById("buildName")).value,
      watchId: this.watchesSelected._id,
      watchStat: this.watchesSelected.stat,
      weaponId: this.weaponSelected._id
    }


    this.buildService.insertBuild(this.buildToSend).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: '<div style="font-family:Genshin">Build saved!</div>'
      }).then(() => {
        this.router.navigateByUrl("/builds");
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        title: '<div style="font-family:Genshin">An error has ocurred</div>'
      })
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
