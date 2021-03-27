import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.movies =[{
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
    }, 1000);
  }
  movies;
}
