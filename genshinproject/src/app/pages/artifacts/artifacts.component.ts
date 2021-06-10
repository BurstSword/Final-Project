import { Component, HostListener, OnInit } from '@angular/core';
import { ArtifactPart, ArtifactSet, ArtifactStat } from 'src/app/interfaces';
import { ArtifactsService } from 'src/app/services/artifacts.service';
@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  /* Variables */
  public artifacts: ArtifactSet[];
  public artifact: ArtifactPart[];
  public selectedSet: ArtifactSet;
  public artifactStats: ArtifactStat[];
  public windowScrolled: boolean;
  public imageName: string;
  public loading: boolean;
  public setName: string;
  constructor(private artifactsService: ArtifactsService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.loadArtifacts();
    this.loadStats();
  }

/* Method to load artifacts */
  loadArtifacts() {
    this.artifactsService.findSets().subscribe(resp => {
      this.artifacts = resp.artifacts;
      this.selectedSet=this.artifacts[0];
      this.selectSet(this.selectedSet);
      this.loading = false;
    })
  }

  /* Method to load artifact´s stats */
  loadStats() {
    this.artifactsService.findStats().subscribe(resp => {
      this.artifactStats = resp.artifacts;
    })
  }


/* Method to change selected set */
  selectSet(artifact: ArtifactSet) {
    this.artifact = [];
    this.setName = artifact.name;
    this.selectedSet = artifact;
    this.artifactsService.findSetParts(artifact).subscribe(resp => {
      this.artifact = resp.artifacts;
      this.artifact.forEach(artifact => {
        this.artifactStats.forEach(stats => {
          if (artifact.type == stats.type) {
            artifact.stats = stats.stats
          }

        })
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
