import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ArtifactPart, ArtifactPartBuild, Artifacts, ArtifactStat, Build, Character, User, Weapon } from 'src/app/interfaces';
import { ArtifactsService } from 'src/app/services/artifacts.service';
import { BuildServiceService } from 'src/app/services/build-service.service';
import { CharacterService } from 'src/app/services/character.service';
import { WeaponsService } from 'src/app/services/weapons.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(private characterService: CharacterService, private weaponService: WeaponsService, private artifactService: ArtifactsService, private buildService: BuildServiceService) { }
  public characters: Character[];
  public characterSelected: Character;

  public buildToSend: Build;

  public weaponSelected: Weapon;
  public weapons: Weapon[];

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

  public flowerStatSelecte: string;


  public stats: ArtifactStat[];

  ngOnInit(): void {
    this.loadCharacters();
    this.loadArtifacts();
    this.loadStats();
    this.loadWeapons("Sword");
  }

  loadCharacters() {
    this.characterService.findCharacters().subscribe(resp => {
      this.characters = resp.characters;
      this.characterSelected = resp.characters[0];
    })
  }

  loadWeapons(type: string) {
    this.weaponService.findWeaponsByType(type).subscribe(resp => {
      this.weapons = resp.weapons;
      this.weaponSelected = resp.weapons[0];
    })
  }

  changeCharacter(character: Character) {
    this.characterSelected = character;

    this.weaponService.findWeaponsByType(character.weapon).subscribe(resp => {
      console.log(resp);
      this.weapons = resp.weapons;
    })

    this.weaponSelected = null;

  }

  changeWeapon(weapon: Weapon) {
    this.weaponSelected = weapon;
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

  loadStats() {
    this.artifactService.findStats().subscribe(resp => {
      this.stats = resp.artifacts;
    })
  }

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
      
    })

    this.buildService.findBuildsById(user._id).subscribe(resp=>{
      console.log(resp);
    })
  }
}
