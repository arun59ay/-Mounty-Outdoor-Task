import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';
import { apiConfig } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey = '4e3affe2a38fe860a804fff3201cd326';

  private baseUrl = environment;
  constructor(private http: HttpService) { }


  // get service for top rated movies
  getTopRatedMovies(): Observable<any> {
    return this.http.get(this.baseUrl.baseApiUrl + apiConfig.getMovies.getTopRatedMovies + '?api_key=' + this.apiKey + '&language=en-US&page=1')
  }

  // get service for upcoming movies
  getUpcomingMovies(): Observable<any> {
    return this.http.get(this.baseUrl.baseApiUrl + apiConfig.getMovies.getUpcomingMovies + '?api_key=' + this.apiKey + '&language=en-US&page=1')
  }

}
