import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.inTheaters =[{
      title: 'Hulk',
      releaseDate: new Date(),
      price : 1200.34
    },
    {
      title: 'The mummy',
      releaseDate: new Date(),
      price : 200.34
    }
    ]

    this.futureReleases =[{
      title: 'Ironman',
      releaseDate: new Date(),
      price : 100.34
    },
    {
      title: 'Joker',
      releaseDate: new Date(),
      price : 1200.34
    }
    ]
  }  
  inTheaters;
  futureReleases;
}
