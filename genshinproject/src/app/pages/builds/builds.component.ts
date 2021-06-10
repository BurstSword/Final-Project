import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ArtifactPart, ArtifactPartBuild, Build, BuildShow, Character, User, Weapon } from 'src/app/interfaces';
import { ArtifactsService } from 'src/app/services/artifacts.service';
import { BuildServiceService } from 'src/app/services/build-service.service';
import { CharacterService } from 'src/app/services/character.service';
import { WeaponsService } from 'src/app/services/weapons.service';
import { NgxCaptureService } from 'ngx-capture';
import animateScrollTo from 'animated-scroll-to';
import Swal from 'sweetalert2';
//import html2canvas from 'html2canvas';
@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {
  /* Variables */
  public user: User;
  public characters: Character[];
  public buildToSend: Build;
  public builds: BuildShow[]
  public buildsCopy: BuildShow[];
  public loading: boolean;
  public selectedBuild: BuildShow;
  public weapons: Weapon[];
  public windowScrolled: boolean;
  public isEditing: boolean = false;
  public flowers: ArtifactPartBuild[];
  public goblets: ArtifactPartBuild[];
  public watches: ArtifactPartBuild[];
  public bandanas: ArtifactPartBuild[];
  public feathers: ArtifactPartBuild[];

  constructor(private buildService: BuildServiceService, private characterService: CharacterService, private weaponService: WeaponsService, private artifactService: ArtifactsService) { this.loading = true; }


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.loadBuildsById();
    this.loadArtifacts();
    this.loadCharacters();
  }



  /* Load the user´s builds */
  loadBuildsById() {
    this.builds = null;
    this.loading = true;
    this.buildService.findBuildsById(this.user._id).subscribe(resp => {
      if (resp.builds.length > 0) {
        this.builds = resp.builds;
        this.selectBuilds(resp.builds[resp.builds.length - 1])
        this.loading = false;
      }
      else {
        this.builds = [];
        this.loading = false;
      }
    })
  }
  /* Method to load the artifacts by it´s type */
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
    })
  }
  /* Method to load characters */
  loadCharacters() {
    this.characterService.findCharacters().subscribe(resp => {
      this.characters = resp.characters;
    })
  }
  /* Method to load weapons */
  loadWeapons(type: string) {
    this.weaponService.findWeaponsByType(type).subscribe(resp => {
      this.weapons = resp.weapons;
    })
  }
  /* Method to activate edit mode */
  edit() {
    this.isEditing = !this.isEditing;
    this.loadWeapons(this.selectedBuild.weaponId.type)
  }
  /* Method to asign the selected build */
  selectBuilds(build: BuildShow) {
    if (this.isEditing) {
      this.edit()
    }
    this.selectedBuild = JSON.parse(JSON.stringify(build));
    this.buildToSend = {
      _id: this.selectedBuild._id,
      bandanaId: this.selectedBuild.bandanaId._id,
      featherId: this.selectedBuild.featherId._id,
      gobletId: this.selectedBuild.gobletId._id,
      watchId: this.selectedBuild.watchId._id,
      flowerId: this.selectedBuild.flowerId._id,
      bandanaStat: this.selectedBuild.bandanaStat,
      featherStat: this.selectedBuild.featherStat,
      flowerStat: this.selectedBuild.flowerStat,
      watchStat: this.selectedBuild.watchStat,
      gobletStat: this.selectedBuild.gobletStat,
      characterId: this.selectedBuild.characterId._id,
      idUser: this.selectedBuild.idUser._id,
      name: this.selectedBuild.name,
      weaponId: this.selectedBuild.weaponId._id
    }
  }

  /* Method to change character */
  changeCharacter(character: Character) {
    this.selectedBuild.characterId = character;
    this.buildToSend.characterId = character._id;
    this.loadWeapons(this.capitalizeFirstLetter(character.weapon_type));
  }

  /* Method to change weapon */
  changeWeapon(weapon: Weapon) {
    this.selectedBuild.weaponId = weapon;
    this.buildToSend.weaponId = weapon._id;

  }
  /* Methods to change artifact set parts */
  changeFlower(flower: ArtifactPart) {
    this.selectedBuild.flowerId = flower;
    this.buildToSend.flowerId = flower._id
  }

  selectFlowerStat(stat: string) {
    this.selectedBuild.flowerStat = stat;
    this.buildToSend.flowerStat = stat;
  }

  changeFeather(feather: ArtifactPart) {
    this.selectedBuild.featherId = feather;
    this.buildToSend.featherId = feather._id
  }

  selectFeatherStat(stat: string) {
    this.selectedBuild.featherStat = stat;
    this.buildToSend.featherStat = stat;
  }
  changeWatch(watch: ArtifactPart) {
    this.selectedBuild.watchId = watch;
    this.buildToSend.watchId = watch._id
  }

  /* Methods to change artifacts stats */
  selectWatchStat(stat: string) {
    this.selectedBuild.watchStat = stat;
    this.buildToSend.watchStat = stat;
  }
  changeGoblet(goblet: ArtifactPart) {
    this.selectedBuild.gobletId = goblet;
    this.buildToSend.gobletId = goblet._id
  }

  selectGobletStat(stat: string) {
    this.selectedBuild.gobletStat = stat;
    this.buildToSend.gobletStat = stat;
  }
  changeBandana(bandana: ArtifactPart) {
    this.selectedBuild.bandanaId = bandana;
    this.buildToSend.bandanaId = bandana._id
  }

  selectBandanaStat(stat: string) {
    this.selectedBuild.bandanaStat = stat;
    this.buildToSend.bandanaStat = stat;
  }


  /* Method to capitalize the word´s first letter */
  capitalizeFirstLetter(string: string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /* Method to save build changes */
  saveChanges() {
    this.edit();
    this.buildToSend.name = (<HTMLInputElement>document.getElementById("buildName")).value;
    this.buildService.updateBuild(this.buildToSend).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: '<div style="font-family:Genshin">Changes saved!</div>'
      }).then(() => {
        this.loadBuildsById();
      })

    })
  }

  /* Method to remove a build */
  removeBuild() {
    this.edit();
    Swal.fire({
      title: 'Do you want to remove the build?',
      showConfirmButton: false,
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: `Cancel`,
      denyButtonText: `Remove`,
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire('Build removed', '', 'info')
        this.buildService.removeBuild(this.buildToSend._id).subscribe(resp => {
          this.selectedBuild = null;
          this.loadBuildsById();
        })
      }
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
