import { Component, OnInit } from '@angular/core';
import { ArtifactPart, ArtifactSet, ArtifactStat } from 'src/app/interfaces';
import { ArtifactsService } from 'src/app/services/artifacts.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  public artifacts: ArtifactSet[];
  public artifact: ArtifactPart[];
  public selectedSet: ArtifactSet;
  public artifactStats: ArtifactStat[];
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


  loadArtifacts() {
    this.artifactsService.findSets().subscribe(resp => {
      this.artifacts = resp.artifacts;
      this.selectedSet=this.artifacts[0];
      this.selectSet(this.selectedSet);
      this.loading = false;
    })
  }

  loadStats() {
    this.artifactsService.findStats().subscribe(resp => {
      this.artifactStats = resp.artifacts;
    })
  }



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
}
