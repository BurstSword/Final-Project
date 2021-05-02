import { Component, OnChanges, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces';
import { CharacterService } from 'src/app/services/character.service';




@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private CharacterService: CharacterService) { }
  public characters: Character[];
  public characterSelected: Character;
  public isLoaded: boolean;

  ngOnInit(): void {
    this.isLoaded = true;
    this.findCharacters();
    setTimeout(this.loadCharactersSlider, 1000)
  }

  findCharacters() {
    this.CharacterService.findCharacters().subscribe(resp => {
      this.characters = resp.characters;
    }, err => {
    })
  }

  loadCharactersSlider() {
    const slider = document.getElementById("sliderCharacters");
    const loader = document.getElementById("loadingCharacters");
    loader.remove();
    slider.removeAttribute("hidden");
  }

  changeCharacter(name: string) {
    console.log("Pruebita");
    const res = this.characters.find(ch => ch.name === name);
    this.characterSelected = res;
  }
}
