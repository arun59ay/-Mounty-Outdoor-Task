import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-toprates-movies',
  templateUrl: './toprates-movies.component.html',
  styleUrls: ['./toprates-movies.component.scss']
})
export class TopratesMoviesComponent implements OnInit {
  topRatedMoviesData: any;

  constructor(
    private movieS: MoviesService,
    public router: Router,
    private loader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.topMovies();
  }

  topMovies() {
    this.loader.start();
    this.movieS.getTopRatedMovies().subscribe(res => {
      // console.log("this is movie service", res);  
      this.topRatedMoviesData = res.results;
      this.loader.stop();

    })
  }

}
