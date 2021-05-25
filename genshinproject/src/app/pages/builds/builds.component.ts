import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ArtifactPart, ArtifactPartBuild, Build, BuildShow, Character, User, Weapon } from 'src/app/interfaces';
import { ArtifactsService } from 'src/app/services/artifacts.service';
import { BuildServiceService } from 'src/app/services/build-service.service';
import { CharacterService } from 'src/app/services/character.service';
import { WeaponsService } from 'src/app/services/weapons.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {

  constructor(private buildService: BuildServiceService, private characterService: CharacterService, private weaponService: WeaponsService, private artifactService: ArtifactsService) { }
  public user: User;
  public characters: Character[];
  public buildToSend: Build;
  public builds: BuildShow[]
  public buildsCopy: BuildShow[];
  public isLoaded: boolean;
  public selectedBuild: BuildShow;
  public weapons: Weapon[];
  public isEditing: boolean = false;
  public flowers: ArtifactPartBuild[];
  public goblets: ArtifactPartBuild[];
  public watches: ArtifactPartBuild[];
  public bandanas: ArtifactPartBuild[];
  public feathers: ArtifactPartBuild[];

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.loadArtifacts();
    this.loadBuildsById();
    this.loadCharacters();
    setTimeout(this.loadBuildSlider, 1000)
  }

  loadBuildsById() {
    this.buildService.findBuildsById(this.user._id).subscribe(resp => {
      this.builds = resp.builds;

    })
  }

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

  loadCharacters() {
    this.characterService.findCharacters().subscribe(resp => {
      this.characters = resp.characters;
    })
  }

  loadWeapons(type: string) {
    this.weaponService.findWeaponsByType(type).subscribe(resp => {
      this.weapons = resp.weapons;
    })
  }

  edit() {
    this.isEditing = !this.isEditing;
    this.loadWeapons(this.selectedBuild.weaponId.type)
  }

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


  changeCharacter(character: Character) {
    this.selectedBuild.characterId = character;
    this.buildToSend.characterId = character._id;
    this.loadWeapons(this.capitalizeFirstLetter(character.weapon_type));
  }
  changeWeapon(weapon: Weapon) {
    this.selectedBuild.weaponId = weapon;
    this.buildToSend.weaponId = weapon._id;

  }

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

  loadBuildSlider() {
    const slider = document.getElementById("sliderBuilds");
    const loader = document.getElementById("loadingBuilds");
    loader.remove();
    slider.removeAttribute("hidden");
  }

  capitalizeFirstLetter(string: string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  saveChanges() {
    this.edit();
    this.buildToSend.name = (<HTMLInputElement>document.getElementById("buildName")).value;
    this.buildService.updateBuild(this.buildToSend).subscribe(resp => {
      const index = this.builds.findIndex(b => b._id == resp.builds._id)
      console.log(index);
      if (index > -1) {
        this.builds.splice(index, 1, resp.builds);
        this.selectedBuild = JSON.parse(JSON.stringify(resp.builds));
      }
    })
  }

  removeBuild() {
    this.edit();
    this.buildService.removeBuild(this.buildToSend._id).subscribe(resp => {
      this.loadBuildsById();
    })
  }
}
