import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:MovieApiServiceService){}

  ngOnInit(): void {
    alert("Hello")
    this.bannerData();
  }

  //data banner
  bannerData(){
    this.service.bannerApiData().subscribe((result) =>{
      console.log(result,'bannerresult#')
    })
  }

}
