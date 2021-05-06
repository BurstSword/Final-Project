import { Component, OnInit } from '@angular/core';
import { ArtifactSet } from 'src/app/interfaces';
import { ArtifactsService } from 'src/app/services/artifacts.service';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css']
})
export class ArtifactsComponent implements OnInit {
  public artifacts : ArtifactSet[];
  public imageName: string;
  constructor(private artifactsService:ArtifactsService) { }

  ngOnInit(): void {
    this.loadArtifacts();
  }


  loadArtifacts(){
    this.artifactsService.findSets().subscribe(resp=>{
      
      this.artifacts=resp.artifacts;
      
    })
  }
}
