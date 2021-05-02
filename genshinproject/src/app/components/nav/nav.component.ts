import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private tokenService: TokenService) { }
  public user: User;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  logout() {
    this.tokenService.logout();
  }
}
