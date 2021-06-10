import { Component, HostListener, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces';
import { CharacterService } from 'src/app/services/character.service';
import Swal from 'sweetalert2';
import animateScrollTo from 'animated-scroll-to';




@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private CharacterService: CharacterService) {
    this.loading = true;
  }
  /* Variables */
  public characters: Character[];
  public characterSelected: Character;
  public loading: boolean;
  public windowScrolled: boolean;
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
  /* Method to load characters */
  findCharacters() {
    this.characters = null;
    this.characterSelected = null;
    this.CharacterService.findCharacters().subscribe(resp => {
      this.characters = resp.characters;
      this.characterSelected = resp.characters[0];
      this.characterSelected.rarityShow = parseInt(this.characterSelected.rarity)
      this.loading = false;
    }, err => {
    })
  }
  /* Method to filter characters by element */
  filterByElement(element: string) {
    if (element == "dendro") {
      Swal.fire({
        icon: 'error',
        title: '<div style="font-family:Genshin">No dendro characters yet</div>'
      });
    } else {
      this.characters = null;
      this.loading = true;
      this.characterSelected = null;
      this.CharacterService.findCharactersByElement(element).subscribe(resp => {
        this.characters = resp.characters;
         this.characterSelected = resp.characters[0];
        this.characterSelected.rarityShow = parseInt(resp.characters[0].rarity); 
        this.loading = false;
      })
    }

  }
  /* Method to change selected characters */
  changeCharacter(name: string) {
    const res = this.characters.find(ch => ch.name === name);
    this.characterSelected = res;
    this.characterSelected.rarityShow = parseInt(this.characterSelected.rarity)
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
