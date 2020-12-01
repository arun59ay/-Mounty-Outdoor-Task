import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  get(url): Observable<any> {
    return this.http.get(url);
  }
  post(url, payload) {
    return this.http.post(url, payload);
  }
  put(url, payload) {
    return this.http.put(url, payload);
  }
  delete(url) {
    return this.http.delete(url);
  }
}
