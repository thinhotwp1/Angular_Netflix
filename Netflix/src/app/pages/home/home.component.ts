import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:MovieApiServiceService){}
  bannerResult:any=[];
  trendingResult:any=[];


  ngOnInit(): void {
    console.log("HomeComponent")
    this.bannerData();
    this.trendingMovies();
  }

  //data banner
  bannerData(){
    this.service.bannerApiData().subscribe((result: { results: any; }) =>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    })
  }

  //trending movies
  trendingMovies(){
    this.service.trendingApiData().subscribe((result: {results : any }) =>{
      console.log(result,"trendingResult#");
      this.trendingResult = result.results;
    });
  }

}
