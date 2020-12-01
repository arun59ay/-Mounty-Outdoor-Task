import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, Loader, SPINNER } from 'ngx-ui-loader';

const LOGO_URL = 'https://raw.githubusercontent.com/t-ho/ngx-ui-loader/master/src/assets/angular.png';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  masterLoader: Loader
  loaders: any;

  constructor(
    private http: HttpClient,
    private ngxLoader: NgxUiLoaderService
  ){

  }
  title = 'movies';

  ngOnInit() {
    this.ngxLoader.start();
    this.http.get(`https://api.npmjs.org/downloads/range/last-year/ngx-ui-loader`).subscribe((res: any) => {
      console.log(res);
      this.ngxLoader.stop();
    });
  }
}
