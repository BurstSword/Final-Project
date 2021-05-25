import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces';
import { CharacterService } from 'src/app/services/character.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private CharacterService: CharacterService) {
    this.loading = true;
  }
  public characters: Character[];
  public characterSelected: Character;
  public loading: boolean;
  public elements: string[] = [
    "anemo",
    "cryo",
    "dendro",
    "electro",
    "geo",
    "hydro",
    "pyro"
  ]


  ngOnInit(): void {
    this.findCharacters();
  }

  findCharacters() {
    this.CharacterService.findCharacters().subscribe(resp => {
      this.characters = resp.characters;
      this.characterSelected = resp.characters[0];
      this.loading = false;
    }, err => {
    })
  }

  filterByElement(element: string) {
    if (element == "dendro") {
      Swal.fire({
        icon: 'error',
        title: '<div style="font-family:Genshin">No dendro characters yet</div>'
      })
    } else {
      this.characters = null;
      this.loading = true;
      this.characterSelected = null;
      this.CharacterService.findCharactersByElement(element).subscribe(resp => {
        this.characters = resp.characters;
        this.characterSelected = resp.characters[0];
        this.loading = false;
      })
    }

  }

  changeCharacter(name: string) {
    this.characterSelected = null;
    const res = this.characters.find(ch => ch.name === name);
    this.characterSelected = res;
  }
}
