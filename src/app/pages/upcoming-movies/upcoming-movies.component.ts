import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  upComingMoviesData: any;

  constructor(
    private movieS: MoviesService,
    private loader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {

    this.topMovies();
  }
  
  topMovies(){
    this.loader.start();    
    this.movieS.getUpcomingMovies().subscribe( res => {
      
      // console.log("this is movie service", res);  
      this.upComingMoviesData = res.results;
      this.loader.stop();    
  })
  }

}
