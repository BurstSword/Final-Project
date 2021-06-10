import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  /* Carousel images */
  public utils = [
    {
      "text": "Characters",
      "img": "https://cdn.mos.cms.futurecdn.net/dWxZpSYj6YxKhoYEGbNUZQ.jpg"
    },
    {
      "text": "Enemies",
      "img": "https://www.dexerto.es/wp-content/uploads/sites/3/2021/04/06/Hilichurl-enemy-type.jpg"
    },
    {
      "text": "Artifacts",
      "img": "https://lh6.googleusercontent.com/mK3i-fK-jmAEJuwrCUiKjfQH8TpblCVhXLn9tRt4wOIfbsf0Q8AQBLdDCBxYKGlPSJvS1TTwXSAhAsunfvmQp9dr9H0cLI86zphAmlcle4-D70bmzt3fFvUBgsneqFKa68rSW_4c"
    },
    {
      "text": "Weapons",
      "img": "https://dlprivateserver.com/wp-content/uploads/2020/10/Genshin-Impact-insin%C3%BAa-qui%C3%A9n-ser%C3%A1-el-pr%C3%B3ximo-h%C3%A9roe-despu%C3%A9s-de.jpg"
    },
    {
      "text": "Builder",
      "img": "https://i.ytimg.com/vi/AIYGDrLpUPw/maxresdefault.jpg"
    }
  ]
  ngOnInit(): void {
  }

}
