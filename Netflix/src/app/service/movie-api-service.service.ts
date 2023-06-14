import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey =  "19f02d3aaca9fc975ee3e5859ea706ed"

  //banner api data
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  // trending api data
  trendingApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`)
  }
}
